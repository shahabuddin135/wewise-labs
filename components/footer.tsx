import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-white dark:bg-gray-950 border-gray-200 py-12 px-4 md:px-8 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-subheading text-xl font-bold tracking-tighter mb-4 block dark:text-white">
              Wewise Labs
            </Link>
            <p className="font-subheading text-gray-600 max-w-xs dark:text-white">
              We build exceptional SaaS applications and provide professional web development services.
            </p>
          </div>

          <div>
            <h3 className="font-subheading font-semibold mb-4 dark:text-white">Services</h3>
            <ul className="space-y-2">
              {["SaaS Development", "Web Applications", "Frontend", "Backend", "Consultation"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-subheading font-semibold mb-4 dark:text-white">Company</h3>
            <ul className="space-y-2">
              {[ "Process", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/team" className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm">
                  Ideas
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-600 dark:text-white hover:text-black hover:dark:text-white transition-colors text-sm">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-white hover:text-black hover:dark:text-white transition-colors text-sm">
                    Careers 
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-white">© {currentYear} Wewise Labs. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-sm text-gray-600 dark:text-white hover:text-black dark:hover:text-white  transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
