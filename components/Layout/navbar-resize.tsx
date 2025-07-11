"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizeable-navbar";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../ui/theme-button";
import {usePathname, useRouter } from "next/navigation";

declare global {
  interface Window {
    ScrollSmoother?: {
      get: () => { scrollTo: (el: Element, smooth: boolean, position: string) => void }
    }
  }
}

export function ResizableNavbar() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Why Us", link: "#why-choose-us" },
    { name: "Process", link: "#process" },
    { name: "About", link: "/about" }, // <-- add slash here
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check if user is on ideas page or any slug page
  const isOnIdeasPage = pathname?.startsWith('/ideas');

  const specialPages = [
    "/ideas",
    "/about",
    "/careers",
    "/sitemap",
    "/terms-privacy",
  ];

  const isOnSpecialPage = specialPages.some((prefix) => pathname?.startsWith(prefix));

  // Custom navigation handler
  const handleNavClick = (link: string) => {
    if (link.startsWith('#')) {
      // Hash link - handle based on current page
      if (pathname === '/') {
        // On home page, just scroll
        const targetElement = document.getElementById(link.substring(1));
        if (targetElement) {
          const smoother = (window as Window).ScrollSmoother?.get();
          if (smoother) {
            smoother.scrollTo(targetElement, true, "top top");
          } else {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        // On other pages, navigate to home with hash
        router.push(`/${link}`);
      }
    } else {
      // Regular page link
      router.push(link);
    }
  };

  // Conditionally update nav links for special pages
  const displayNavItems = isOnSpecialPage
    ? navItems.map(item => ({
        ...item,
        link: item.link.startsWith('#') ? `/${item.link}` : item.link, // Only prefix hash links
      }))
    : navItems;

  return (
    <div className="relative w-full z-50">
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
            onItemClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              const target = e.target as HTMLElement;
              const anchor = target.closest("a");
              if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute("href");
                if (href) {
                  handleNavClick(href);
                }
              }
            }}
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
            <div className="flex items-center justify-center gap-2 sm:gap-4">
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
              <button
                key={`mobile-link-${idx}`}
                onClick={() => {
                  handleNavClick(item.link);
                  setIsMobileMenuOpen(false);
                }}
                className={`relative text-left w-full ${
                  isOnIdeasPage 
                    ? "!text-black dark:!text-white" 
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

