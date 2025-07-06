"use client";
import { useTheme } from "next-themes";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import DarkContent from "@/components/AboutPage/dark-content";
import LightContent from "@/components/AboutPage/light-content";
import { Footer } from "@/components/Layout/footer";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section>

    <MaskContainer 
        revealText=
        {isDark ? <LightContent /> : <DarkContent />}
        >
         {isDark ? <DarkContent /> : <LightContent />}
    </MaskContainer>
    
    <Footer/>
    
    </section>
  );
}
