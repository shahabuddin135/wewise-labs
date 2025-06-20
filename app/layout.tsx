import type React from "react"
import type { Metadata } from "next"
import {Archivo, Nunito_Sans, PT_Sans_Caption, Ubuntu, Pacifico, Arizonia} from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { NavbarDemo } from "@/components/navbar-resize"


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

export const metadata: Metadata = {
  title: "Wewise Labs | SaaS & Web Development Services",
  description: "We build exceptional SaaS applications and provide professional web development services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ptSansCaption.variable} ${archivo.variable} ${nunito.variable} ${ubuntu.variable} ${arizonia.variable} font-sans bg-white text-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <NavbarDemo/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
