"use client";
import { useEffect } from "react";

const setFavicon = (theme: "light" | "dark") => {
  const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
  if (favicon) {
    favicon.href = theme === "dark" ? "/favicon-dark.ico" : "/favicon-light.ico";
  } else {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = theme === "dark" ? "/favicon-dark.ico" : "/favicon-light.ico";
    document.head.appendChild(link);
  }
};

export default function ThemeFavicon() {
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = () => {
      setFavicon(matchMedia.matches ? "dark" : "light");
    };

    updateFavicon();
    matchMedia.addEventListener("change", updateFavicon);

    return () => {
      matchMedia.removeEventListener("change", updateFavicon);
    };
  }, []);

  return null;
}
