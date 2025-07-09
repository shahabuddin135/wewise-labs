"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ResizableNavbar } from "@/components/Layout/navbar-resize";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isStudioStructure =
    pathname === "/studio/structure" || pathname.startsWith("/studio/structure/");
  const [showNavbar, setShowNavbar] = useState(false);
  const [position, setPosition] = useState({ x: 16, y: 16 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const dragMoved = useRef(false); // Track if drag occurred

  // Mouse event handlers for drag
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    dragging.current = true;
    dragMoved.current = false;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
    dragMoved.current = true;
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Touch event handlers for drag
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    dragging.current = true;
    dragMoved.current = false;
    const touch = e.touches[0];
    offset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!dragging.current) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - offset.current.x,
      y: touch.clientY - offset.current.y,
    });
    dragMoved.current = true;
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  // Only open navbar on explicit click/tap, not on drag
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragMoved.current) {
      dragMoved.current = false;
      return;
    }
    setShowNavbar((prev) => !prev);
  };

  if (!isStudioStructure) {
    return <ResizableNavbar />;
  }

  return (
    <>
      <button
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          zIndex: 1000,
          background: "#ff9100",
          cursor: "grab",
          userSelect: "none",
        }}
        className="text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition font-bold"
        aria-label="Toggle Navigation"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
      >
        ≡ Navbar
      </button>
      {showNavbar && <ResizableNavbar />}
    </>
  );
} 