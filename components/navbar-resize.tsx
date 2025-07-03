"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizeable-navbar";
import { useState } from "react";

import Link from "next/link";
import { ModeToggle } from "./ui/theme-button";
import { useRouter, usePathname } from "next/navigation";

export function ResizableNavbar() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Why Us", link: "#why-choose-us" },
    { name: "Process", link: "#process" },
    { name: "Projects", link: "#projects" },
    { name: "Team", link: "#team" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ideasClickCount, setIdeasClickCount] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  // Check if user is on ideas page or any slug page
  const isOnIdeasPage = pathname?.startsWith('/ideas');

  // Conditionally update nav links for ideas page
  const displayNavItems = isOnIdeasPage
    ? navItems.map(item => ({
        ...item,
        link: `/${item.link}`, // e.g., "/#services"
      }))
    : navItems;

  const handleIdeasClick = () => {
    const newCount = ideasClickCount + 1;
    setIdeasClickCount(newCount);
    
    if (newCount >= 10) {
      // Reset counter and navigate to ideas page
      setIdeasClickCount(0);
      router.push('/ideas');
    }
  };

  return (
    <div className="relative w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody 
          className={isOnIdeasPage ? "!border-2 !border-black dark:!border-white !bg-white dark:!bg-neutral-950 !shadow-none !rounded-none" : ""}
        >
          {isOnIdeasPage ? (
            <Link href="/" className="focus:outline-none">
              <NavbarLogo />
            </Link>
          ) : (
            <Link href="/" className="focus:outline-none">
              <NavbarLogo />
            </Link>
          )}
          <NavItems 
            items={displayNavItems} 
            className={isOnIdeasPage ? "!text-black dark:!text-white" : ""}
          />
          <div className="flex items-center gap-4 z-10">
            {!isOnIdeasPage && (
              <button
                onClick={handleIdeasClick}
                className="px-3 py-1 border-2 border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600 text-sm cursor-not-allowed opacity-50"
                title="This button doesn't work..."
              >
                IDEAS
              </button>
            )}
            <ModeToggle className="ml-2 my-auto"/>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav 
          className={isOnIdeasPage ? "!border-2 !border-black dark:!border-white !bg-white dark:!bg-neutral-950 !shadow-none !rounded-none" : ""}
        >
          <MobileNavHeader>
            {isOnIdeasPage ? (
              <Link href="/" className="focus:outline-none">
                <NavbarLogo />
              </Link>
            ) : (
              <Link href="/" className="focus:outline-none">
                <NavbarLogo />
              </Link>
            )}
            <div className="flex items-center justify-center gap-5">
            {!isOnIdeasPage && (
              <button
                onClick={handleIdeasClick}
                className="px-2 py-1 border-2 border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600 text-xs cursor-not-allowed opacity-50"
                title="This button doesn't work..."
              >
                IDEAS
              </button>
            )}
            <ModeToggle className="ml-2 my-auto"/>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className={isOnIdeasPage ? "!border-2 !border-black dark:!border-white !bg-white dark:!bg-neutral-950 !rounded-none" : ""}
          >
            {displayNavItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative ${
                  isOnIdeasPage 
                    ? "!text-black dark:!text-white" 
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

