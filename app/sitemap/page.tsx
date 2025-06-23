import { Footer } from "@/components/footer"
import { SiteMapContent } from "@/components/site-map-content"

export const metadata = {
  title: "Site Map | Wewise Labs",
  description: "Navigate through the structure of our website",
}

export default function SiteMapPage() {
  return (
    <main className="min-h-screen flex flex-col max-w-7xl mx-auto mt-36">
      <div className="flex-1 pb-8 px-4 md:px-8 max-w-7xl mx-auto w-full ">
        <h1 className="text-3xl font-bold mb-4 md:text-6xl px-4 dark:text-white">Site Map</h1>
        <SiteMapContent />
      </div>
      <Footer />
    </main>
  )
}
