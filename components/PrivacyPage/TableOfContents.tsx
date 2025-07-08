"use client";

import { Shield, ChevronRight, FileText, Mail, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tocSections: {
  id: string;
  label: string;
  icon: LucideIcon;
    }   [] = [
  { id: "privacy", label: "Privacy Policy", icon: Shield },
  { id: "information", label: "Information We Collect", icon: ChevronRight },
  { id: "usage", label: "How We Use Your Info", icon: ChevronRight },
  { id: "rights", label: "Your Rights", icon: ChevronRight },
  { id: "security", label: "Data Security", icon: ChevronRight },
  { id: "terms", label: "Terms & Conditions", icon: FileText },
  { id: "ownership", label: "Content Ownership", icon: ChevronRight },
  { id: "acceptable", label: "Acceptable Use", icon: ChevronRight },
  { id: "contact", label: "Contact Us", icon: Mail },
];

type Props = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

export default function TableOfContents({
  activeSection,
  scrollToSection,
}: Props) {
  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-8 dark:bg-[#171717] dark:border-[#262626]">
        <CardHeader>
          <CardTitle className="text-lg text-black dark:text-[#fafafa]">
            Contents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {tocSections.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <Button
                key={id}
                variant={isActive ? "default" : "ghost"}
                className={`group w-full justify-start text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black hover:bg-gray-200 dark:hover:bg-gray-800"
                    : "bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => scrollToSection(id)}
              >
                <Icon
                  className={`h-4 w-4 mr-2 transition-colors duration-200 ${
                    isActive
                      ? "text-white dark:text-black group-hover:text-black dark:group-hover:text-white"
                      : "text-black dark:text-white group-hover:text-black dark:group-hover:text-white"
                  }`}
                />
                <span
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-white dark:text-black group-hover:text-black dark:group-hover:text-white"
                      : "text-black dark:text-white group-hover:text-black dark:group-hover:text-white"
                  }`}
                >
                  {label}
                </span>
              </Button>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
