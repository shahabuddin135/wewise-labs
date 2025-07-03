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
import {usePathname } from "next/navigation";

export function ResizableNavbar() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Why Us", link: "#why-choose-us" },
    { name: "Process", link: "#process" },
    { name:"About", link:"/about"},
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <div className="relative w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody 
          className={isOnIdeasPage ? "!border-2 !border-black dark:!border-white !bg-white dark:!bg-neutral-950 !shadow-none !rounded-none " : ""}
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
          <div className="flex items-center gap-3 z-10">
            {!isOnIdeasPage && (
              <Link href='/ideas'>
              <button className="px-3 py-1 border-2 border-gray-400 dark:border-gray-300 text-neutral-600 dark:text-neutral-300 text-sm  font-semibold rounded-full">
                IDEAS
              </button>
              </Link>
            )}
            <ModeToggle className="my-auto"/>
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
            <div className="flex items-center justify-center gap-1 sm:gap-3">
            {!isOnIdeasPage && (
              <Link href="/ideas">
                <button className="px-2 py-1 border-2 border-gray-400 dark:border-gray-300 text-neutral-600 dark:text-neutral-200 text-xs  font-semibold rounded-[5px]">
                  IDEAS
                </button>
              </Link>
            )}
            <ModeToggle/>
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

