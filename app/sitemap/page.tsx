import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SiteMapContent } from "@/components/site-map-content"

export const metadata = {
  title: "Site Map | Wewise Labs",
  description: "Navigate through the structure of our website",
}

export default function SiteMapPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Site Map</h1>
        <SiteMapContent />
      </div>
      <Footer />
    </main>
  )
}
