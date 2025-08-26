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
import Script from 'next/script';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics tag (gtag.js)  */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-38ZTL2VF2B"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments)}
             gtag('js', new Date());
             gtag('config','G-38ZTL2VF2B' );
             `,
          }}
        />

        {/* You can keep a default favicon as a fallback */}
        <link rel="icon" href="/favicon-light.ico" />
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-NX5QRW9Q');`}
        </Script>
        {/* End Google Tag Manager  */}

        {/* Google Search Console  */}
        <meta
          name="google-site-verification"
          content="YDycmmSr_H-ujffIEZO9u7BZ48NUmYHo_GL1oEUCj_A"
        />
      </head>
      <body
        className={`dark:bg-gray-950 ${ptSansCaption.variable}  ${pacifico.variable}  ${kablammo.variable} ${archivo.variable} ${nunito.variable} ${ubuntu.variable} ${arizonia.variable} ${Libre.variable} font-sans bg-white text-black antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NX5QRW9Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollHandler />
          <NavbarWrapper />
          <ThemeFavicon />
          {children}
          <Analytics />
          <ScrollToTopButton minScrollY={600} />
        </ThemeProvider>
      </body>
    </html>
  );
}
