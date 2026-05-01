'use client'

import Link from "next/link"
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-white dark:bg-gray-950 border-gray-200 py-12 px-4 md:px-8 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex flex-col">
              <div>
                <Link
                  href="/"
                  className="font-subheading text-xl font-bold tracking-tighter mb-4 block dark:text-white"
                >
                  Wewise Labs
                </Link>
                <p className="font-subheading text-gray-600 max-w-xs dark:text-white">
                  We build exceptional SaaS applications and provide
                  professional web development services.
                </p>
              </div>
              <div className="mt-10">
                <h2 className="mb-4 font-subheading font-semibold text-black dark:text-white">
                  Socials
                </h2>
                <div className="flex items-center gap-4">
                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/company/wewise-labs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`mb-2 transition duration-200 ease-in-out hover:scale-110 ${isDark ? "text-white" : "text-[#333]"}`}
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V11ZM9.5 7.5C9.5 8.32843 8.82843 9 8 9C7.17157 9 6.5 8.32843 6.5 7.5C6.5 6.67157 7.17157 6 8 6C8.82843 6 9.5 6.67157 9.5 7.5ZM12 10C12.3395 10 12.6395 10.1692 12.8203 10.4279C13.3329 10.1502 13.9036 10 14.5 10C16.6594 10 18 11.9258 18 13.5714V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V13.5714C16 12.8032 15.3406 12 14.5 12C13.9759 12 13.3974 12.2849 13 12.9631V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </Link>
                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/wewiselabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`mb-2 transition duration-200 ease-in-out hover:scale-110 ${isDark ? "text-white" : "text-[#333]"}`}
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </Link>
                  {/* Twitter */}
                  <Link
                    href="https://twitter.com/wewiselabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`mb-2 transition duration-200 ease-in-out hover:scale-110 ${isDark ? "text-white" : "text-[#333]"}`}
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g>
                          <path 
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-subheading font-semibold mb-4 dark:text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "AI SaaS Development",
                "Web Applications",
                "E-Commerce",
                "Agentic Solutions",
                "Consultation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-subheading font-semibold mb-4 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {["Process", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#team"
                  className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm"
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/ideas"
                  className="text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition-colors text-sm"
                >
                  Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-600 dark:text-white hover:text-black hover:dark:text-white transition-colors text-sm"
                >
                  Site Map
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 dark:text-white hover:text-black hover:dark:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-white">
            © {currentYear} Wewise Labs. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/terms-privacy"
              className="text-sm text-gray-600 dark:text-white hover:text-black dark:hover:text-white  transition-colors"
            >
              Terms & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
