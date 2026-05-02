"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
export interface DropdownNavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface NavItem {
  name: string;
  link: string;
  type?: string;
  dropdownItems?: DropdownNavItem[];
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  activePath?: string;
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  /**
   * If true, disables the gray border for the ideas page.
   */
  isOnIdeasPage?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const lastScrollY = useRef<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [shrink, setShrink] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = lastScrollY.current;
    const direction = current - previous;

    if (current > 200 && direction > 0) {
      setShrink(true);
    } else if (current < 200 || direction < 0) {
      setShrink(false);
    }

    if (current > 200 && direction > 0) {
      setVisible(false);
    }

    if (direction < 0) {
      setVisible(true);
    }

    lastScrollY.current = current;
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full",
          className,
          shrink ? "py-1" : "py-2"
        )}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                { visible }
              )
            : child
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const { theme } = useTheme();
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(50px)" : "none",
        boxShadow: visible
          ? theme === "dark"
            ? "0 0 24px rgba(255,255,255,0.12), 0 1px 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06), 0 0 4px rgba(255,255,255,0.10), 0 16px 68px rgba(255,255,255,0.08), 0 1px 0 rgba(255,255,255,0.15) inset"
            : "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "70%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-1 lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, activePath }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdownIdx(null), 120);
  };
  const cancelClose = (idx: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdownIdx(idx);
  };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isHashLink = item.link.startsWith('#');
        const isExternalLink = item.link.startsWith('http');
        const isActive = item.type === 'about' && activePath && activePath.startsWith(item.link);

        // Dropdown item using shadcn DropdownMenu
        if (item.type === 'dropdown' && item.dropdownItems) {
          return (
            <DropdownMenu key={`link-${idx}`} open={openDropdownIdx === idx} onOpenChange={(open) => { if (!open) setOpenDropdownIdx(null); }}>
              <DropdownMenuTrigger asChild>
                <button
                  onMouseEnter={() => { setHovered(idx); cancelClose(idx); }}
                  onMouseLeave={scheduleClose}
                  className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 flex items-center gap-1 outline-none cursor-pointer"
                >
                  {hovered === idx && (
                    <motion.div
                      layoutId="hovered"
                      className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                    />
                  )}
                  <span className="relative z-20">{item.name}</span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "relative z-20 transition-transform duration-200",
                      openDropdownIdx === idx && "rotate-180"
                    )}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={10}
                className="w-60 p-2 dark:bg-neutral-900 dark:border-neutral-800"
                onMouseEnter={() => cancelClose(idx)}
                onMouseLeave={scheduleClose}
              >
                {item.dropdownItems.map((sub, si) => (
                  <DropdownMenuItem key={si} asChild className="cursor-pointer rounded-lg p-0 focus:bg-transparent">
                    <a
                      href={sub.link}
                      onClick={onItemClick}
                      className="flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors w-full"
                    >
                      {sub.icon && (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                          {sub.icon}
                        </span>
                      )}
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{sub.name}</span>
                        {sub.description && (
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">{sub.description}</span>
                        )}
                      </div>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }
        // About button style (like IDEAS)
        const aboutButtonClass = item.type === 'about'
          ? cn(
              "px-3 py-1 border-2 border-gray-400 dark:border-gray-300 text-neutral-600 dark:text-neutral-300 text-sm font-semibold rounded-full transition hover:opacity-80 active:opacity-60",
              isActive && "bg-gray-200 dark:bg-gray-700 border-black dark:border-white text-black dark:text-white"
            )
          : "";
        const pageLinkClass = item.type === 'page'
          ? cn(
              "border-2 border-gray-400 dark:border-gray-300 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 font-semibold transition hover:opacity-80 active:opacity-60",
              isActive && "bg-gray-200 dark:bg-gray-700 border-black dark:border-white text-black dark:text-white"
            )
          : "";
        if (isHashLink) {
          return (
            <a
              onMouseEnter={() => setHovered(idx)}
              onClick={onItemClick}
              className={cn("relative px-4 py-2 text-neutral-600 dark:text-neutral-300", pageLinkClass)}
              key={`link-${idx}`}
              href={item.link}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </a>
          );
        } else if (isExternalLink) {
          return (
            <a
              onMouseEnter={() => setHovered(idx)}
              onClick={onItemClick}
              className={cn("relative px-4 py-2 text-neutral-600 dark:text-neutral-300", pageLinkClass)}
              key={`link-${idx}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </a>
          );
        } else if (item.type === 'about') {
          return (
            <Link
              onMouseEnter={() => setHovered(idx)}
              onClick={onItemClick}
              className={cn(aboutButtonClass, "relative")}
              key={`link-${idx}`}
              href={item.link}
            >
              <span className="relative z-20">{item.name}</span>
            </Link>
          );
        } else {
          return (
            <Link
              onMouseEnter={() => setHovered(idx)}
              onClick={onItemClick}
              className={cn("relative px-4 py-2 text-neutral-600 dark:text-neutral-300", pageLinkClass)}
              key={`link-${idx}`}
              href={item.link}
            >
              {(hovered === idx || isActive) && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-200 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </Link>
          );
        }
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const { theme } = useTheme();
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(50px)" : "none", 
        boxShadow: visible
          ? theme === "dark"
            ? "0 0 24px rgba(255,255,255,0.12), 0 1px 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06), 0 0 4px rgba(255,255,255,0.10), 0 16px 68px rgba(255,255,255,0.08), 0 1px 0 rgba(255,255,255,0.15) inset"
            : "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "12px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-1 lg:hidden ",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between rounded-lg",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  isOnIdeasPage = false,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-20 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            !isOnIdeasPage && "dark:border border-gray-200/50",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

// wewise logo

export const NavbarLogo = () => {
  return (
    <span className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal">
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 180 128" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-200"
      >
        <path d="M78.6259 38.832C73.1355 30.0558 79.9798 19.0256 90.9159 19.0256V19.0256C95.9638 19.0256 100.622 21.5226 103.145 25.5801L143.724 90.8642C145.832 94.2543 146.186 98.3492 144.69 102.018V102.018C140.494 112.31 125.342 113.504 119.402 104.01L78.6259 38.832Z" className="fill-black dark:fill-white"/>
        <path d="M34.6428 42.8981C27.6461 32.2271 35.8741 18.6466 49.2631 18.7671V18.7671C55.3185 18.8216 60.9183 21.8481 63.989 26.726L103.195 89.0068C106.026 93.5035 106.218 99.0116 103.705 103.629V103.629C97.9155 114.268 81.7676 114.769 75.0466 104.519L34.6428 42.8981Z" className="fill-black dark:fill-white"/>
        <path d="M160.053 69.3467C161.229 66.3076 160.897 62.9169 159.148 60.0817L137.86 25.5824C135.668 22.0288 131.606 19.8274 127.243 19.8274V19.8274C117.98 19.8274 112.348 29.176 117.096 36.671L138.808 70.9438C143.918 79.0109 156.686 78.0511 160.053 69.3467V69.3467Z" className="fill-black dark:fill-white"/>
        <path d="M163.801 32.4324C166.824 32.4067 169.63 33.7805 171.302 36.1052L171.971 37.0345C173.82 39.6042 174.018 42.9461 172.49 45.7714V45.7714C169.105 52.0318 159.729 52.3625 156.178 46.3466L155.599 45.3649C152.226 39.6513 156.767 32.4922 163.801 32.4324V32.4324Z" className="fill-black dark:fill-white"/>
      </svg>
    </span>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

