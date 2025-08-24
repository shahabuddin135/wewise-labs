import type React from "react"
import type { Metadata } from "next"
import {Archivo, Nunito_Sans, PT_Sans_Caption, Ubuntu, Pacifico,Libre_Caslon_Text,Kablammo, Arizonia} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import NavbarWrapper from "@/components/NavbarWrapper";
import { ScrollHandler } from "@/lib/smooth-handler"
import ThemeFavicon from "@/components/theme-favicon";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { Analytics } from '@vercel/analytics/next';

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  variable: "--font-heading",
  weight:["700"]
})

const archivo = Archivo({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable:"--font-subheading",
  weight:["400", "500", "600"] 
})

const nunito = Nunito_Sans({
  subsets:["latin"],
  variable: "--font-body",
  weight:["300"]
})

const ubuntu = Ubuntu({
  subsets:["latin"],
  variable: "--font-heading",
  weight:["500", "700"]
})

const arizonia = Arizonia({
  subsets:["latin"],
  variable: "--font-arizonia",
  weight:["400"]
})

const Libre = Libre_Caslon_Text ({
  subsets:["latin"],
  variable: "--font-libre-caslon",
  weight:["400"]
})

const pacifico = Pacifico({
  subsets:["latin"],
  variable: "--font-pacifico",
  weight:["400"]
})

const kablammo = Kablammo({
  subsets: ["latin"],
  variable: "--font-Kablammo",
  weight:["400"]
})

export const metadata: Metadata = {
  title: "Wewise Labs | AI SaaS & Web Development Services" ,
  description: "We build exceptional AI powered SaaS applications and provide professional web development services.",
  generator: 'Wewise Labs',
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can keep a default favicon as a fallback */}
        <link rel="icon" href="/favicon-light.ico" />
       
        {/* Google tag (gtag.js)  */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
        <script
           dangerouslySetInnerHTML={{
               __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments)}
               gtag('js', new Date());
               gtag('config', GA_MEASUREMENT_ID );
              `
           }}
         />
      </head>
      <body className={`dark:bg-gray-950 ${ptSansCaption.variable}  ${pacifico.variable}  ${kablammo.variable} ${archivo.variable} ${nunito.variable} ${ubuntu.variable} ${arizonia.variable} ${Libre.variable} font-sans bg-white text-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <ScrollHandler/>
        <NavbarWrapper />
        <ThemeFavicon />
        {children}
        <Analytics />
        <ScrollToTopButton minScrollY={600} />
        </ThemeProvider>
      </body>
    </html>
  )
}
