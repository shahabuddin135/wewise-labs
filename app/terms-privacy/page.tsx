"use client"

import { useState } from "react"
import TableOfContents from "@/components/PrivacyPage/TableOfContents";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, FileText, Mail, Calendar } from "lucide-react"
import { Footer } from "@/components/Layout/footer"

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("privacy")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen mt-28 bg-background dark:bg-[#0a0a0a] dark:text-[#fafafa]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-black dark:text-[#fafafa]" />
            <h1 className="text-4xl font-bold text-black dark:text-[#fafafa]">Privacy Policy & Terms</h1>
          </div>
          <p className="text-xl text-black text-muted-foreground dark:text-[#d4d4d4] max-w-2xl mx-auto">
            Your privacy and security are our top priorities. Learn how we protect your information and outline our
            terms of service.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Calendar className="h-4 w-4 text-black dark:text-[#a3a3a3]" />
            <span className="text-sm text-black text-muted-foreground dark:text-[#a3a3a3]">Last updated: July 2, 2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <TableOfContents
              activeSection={activeSection}
              scrollToSection={scrollToSection}
          />

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ScrollArea className="h-full">
              <div className="space-y-8">
                {/* Privacy Policy Section */}
                <section id="privacy" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-black dark:text-[#fafafa]" />
                        <CardTitle className="text-2xl text-black dark:text-[#fafafa]">Privacy Policy</CardTitle>
                      </div>
                      <CardDescription className="dark:text-[#d4d4d4]">
                        Your privacy is important to us. This Privacy Policy explains what information WeWise Labs
                        collects and how we use and protect it, in accordance with the laws of Pakistan.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </section>

                {/* Information We Collect */}
                <section id="information" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-[#fafafa]">Information We Collect</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground dark:text-[#d4d4d4] leading-relaxed">
                        We do not require you to provide personal information just to browse our site. However, if you
                        choose to contact us (for example, by submitting a contact form on our website), we will collect
                        the personal information you provide, such as your name, email address, and the content of your
                        message. This information is provided voluntarily by you, and we only gather what is necessary
                        to respond to your inquiry.
                      </p>
                      <div className="bg-muted/50 dark:bg-[#1f1f1f] p-4 rounded-lg border dark:border-[#262626]">
                        <h4 className="font-semibold mb-2 text-black dark:text-[#fafafa]">No Cookies Policy</h4>
                        <p className="text-sm text-muted-foreground dark:text-[#d4d4d4]">
                          We do not use cookies or any similar tracking technologies on our website. Our site does not
                          place any cookies on your device, and we do not collect analytics data or personal identifiers
                          through cookies at this time. You can browse our content without any cookies being set.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* How We Use Your Information */}
                <section id="usage" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-[#fafafa]">How We Use Your Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground dark:text-[#d4d4d4] leading-relaxed">
                        Any personal information you provide is used only for its intended purpose – typically, to
                        respond to your inquiries or requests and to communicate with you about your query. For example,
                        if you contact us with a question or feedback, we will use your name and email to reply to you.
                        We do not use your personal information for marketing emails or newsletters, unless you have
                        explicitly requested or consented to such communication.
                      </p>
                      <div className="bg-green-50 dark:bg-[#1f1f1f] border border-green-200 dark:border-[#404040] p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-[#fafafa] mb-2">
                          No Third-Party Sharing
                        </h4>
                        <p className="text-sm text-green-700 dark:text-[#d4d4d4]">
                          WeWise Labs will never share, rent, or sell your personal information to any third parties. We
                          treat your information as confidential. The only exception would be if we are required by law
                          to disclose certain information, and in such cases we would only share the minimum necessary,
                          in accordance with applicable law.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Your Rights */}
                <section id="rights" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-[#fafafa]">Your Rights</CardTitle>
                      <CardDescription className="dark:text-[#d4d4d4]">
                        WeWise Labs respects your rights regarding your personal data. You have the following rights:
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex gap-3">
                          <Badge variant="outline" className="mt-1 dark:border-[#404040] dark:text-[#fafafa]">
                            1
                          </Badge>
                          <div>
                            <h4 className="font-semibold text-black dark:text-[#fafafa]">Access Your Data</h4>
                            <p className="text-sm text-muted-foreground dark:text-[#d4d4d4]">
                              You can request a copy of the personal information we hold about you. We will provide you
                              with a summary of any information we have collected from you, such as details you
                              submitted via our contact form.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Badge variant="outline" className="mt-1 dark:border-[#404040] dark:text-[#fafafa]">
                            2
                          </Badge>
                          <div>
                            <h4 className="font-semibold text-black dark:text-[#fafafa]">Request Deletion</h4>
                            <p className="text-sm text-muted-foreground dark:text-[#d4d4d4]">
                              You can ask us to delete the personal data you have given us. Upon request, we will erase
                              your name, contact information, and any messages you sent, unless we are required to keep
                              certain data for legal reasons.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-[#d4d4d4] mt-4">
                        To exercise any of these rights, please contact us using the information in the Contact Us
                        section below. We will respond and act on your request in accordance with applicable laws and
                        within a reasonable timeframe. There is no charge for making such requests.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Data Security */}
                <section id="security" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-[#fafafa]">Data Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground dark:text-[#d4d4d4] leading-relaxed">
                        We take reasonable measures to protect the information you submit to us. While no website or
                        electronic storage can ever be completely secure, we implement appropriate technical and
                        organizational security measures to safeguard your personal data from unauthorized access or
                        disclosure. WeWise Labs does not collect sensitive personal information, and we limit access to
                        the data we do have. Please note that if you send information via email or an online form, no
                        method of transmission is 100% secure, but we will do our best to protect your data.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator className="my-8 dark:bg-[#404040]" />

                {/* Terms and Conditions */}
                <section id="terms" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <FileText className="h-6 w-6 text-black dark:text-[#fafafa]" />
                        <CardTitle className="text-2xl text-black dark:text-[#fafafa]">Terms and Conditions</CardTitle>
                      </div>
                      <CardDescription className="dark:text-[#d4d4d4]">
                        Welcome to the WeWise Labs website. These Terms and Conditions govern your use of our website.
                        By accessing or using our site, you agree to be bound by these Terms.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </section>

                {/* Ownership of Content */}
                <section id="ownership" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-[#fafafa]">Ownership of Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground dark:text-[#d4d4d4] leading-relaxed">
                        Unless otherwise noted, WeWise Labs owns all content and materials on this website. This
                        includes, but is not limited to, all text, software code, logos, graphics, images, design
                        layouts, and documentation on the site. All such content is protected by intellectual property
                        laws.
                      </p>
                      <p className="text-muted-foreground dark:text-[#d4d4d4] leading-relaxed">
                        WeWise Labs retains all rights, title, and interest in our website&apos;s content. You are not
                        permitted to copy, reproduce, distribute, or create derivative works from any portion of the
                        site for any commercial purpose without our prior written permission. We may allow personal,
                        non-commercial use of content (such as downloading a page for personal reference), but this does
                        not transfer any ownership or rights to you.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Acceptable Use */}
                <section id="acceptable" className="scroll-mt-28">
                  <Card className="dark:bg-[#171717] dark:border-[#262626]">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-[#fafafa]">Acceptable Use</CardTitle>
                      <CardDescription className="dark:text-[#d4d4d4]">
                        We value a secure and fair online environment. By using our website, you agree not to misuse it
                        or engage in any activity that could harm us or other users.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-red-50 dark:bg-[#171717] border border-red-200 dark:border-[#404040] p-4 rounded-lg">
                          <h4 className="font-semibold text-red-800 dark:text-red-900 mb-3">Prohibited Activities</h4>
                          <div className="space-y-2 text-sm text-red-700 dark:text-red-800">
                            <div className="flex items-start gap-2">
                              <span className="font-medium">•</span>
                              <span>
                                <strong>Hacking or Unauthorized Access:</strong> Attempt to gain unauthorized access to
                                any part of the site, our servers, or other systems.
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="font-medium">•</span>
                              <span>
                                <strong>Scraping and Automated Collection:</strong> Use any robot, scraper, spider, or
                                other automated means to access or extract data from the website without our permission.
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="font-medium">•</span>
                              <span>
                                <strong>Reverse Engineering:</strong> Attempt to reverse engineer, decompile, or
                                disassemble any of the website&apos;s software or underlying technology.
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="font-medium">•</span>
                              <span>
                                <strong>Disruption or Harmful Acts:</strong> Interfere with the normal operation of the
                                website or impose an unreasonable load on our infrastructure.
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="font-medium">•</span>
                              <span>
                                <strong>Unlawful Use:</strong> Use the site for any illegal purpose or to violate any
                                local, national, or international law or regulation.
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground dark:text-[#d4d4d4]">
                          If you violate any of the above rules or otherwise misuse the website, WeWise Labs reserves
                          the right to take appropriate action. This may include suspending or terminating your access
                          to the site and, if necessary, pursuing legal remedies.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Disclaimer */}
                <Card className="dark:bg-[#171717] dark:border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-xl text-black dark:text-[#fafafa]">Disclaimer of Warranties and Liability</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-black dark:text-[#fafafa]">Use at Your Own Risk</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed dark:text-[#d4d4d4]">
                        WeWise Labs provides this website and its content on &quot;as is&quot; and &quot;as available&quot; basis. While
                        we strive to keep information up-to-date and accurate, we make no express or implied warranties
                        or guarantees about the completeness, accuracy, reliability, or availability of the site.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-black dark:text-[#fafafa]">Limitation of Liability</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed dark:text-[#d4d4d4]">
                        WeWise Labs (including our directors, employees, and affiliates) will not be liable for any
                        direct, indirect, incidental, consequential, or special losses or damages arising out of or in
                        connection with your use of (or inability to use) our website.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Governing Law */}
                <Card className="dark:bg-[#171717] dark:border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-xl text-black dark:text-[#fafafa]">Governing Law</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed dark:text-[#d4d4d4]">
                      This Privacy Policy and Terms and Conditions are governed by the laws of Pakistan. By using our
                      website or providing us with your information, you agree that any matters relating to privacy or
                      this policy will be dealt with in accordance with Pakistani law. WeWise Labs will comply with
                      applicable data protection regulations of Pakistan in how we manage your data.
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-28">
                  <Card className="bg-primary/5 border-primary/20 dark:bg-[#1f1f1f] dark:border-[#404040]">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Mail className="h-6 w-6 text-black dark:text-[#fafafa]" />
                        <CardTitle className="text-xl text-black dark:text-[#fafafa]">Contact Us</CardTitle>
                      </div>
                      <CardDescription className="dark:text-[#d4d4d4]">
                        If you have any questions or concerns about this Privacy Policy or Terms and Conditions, please
                        feel free to contact us.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="dark:bg-[#262626] dark:text-[#fafafa]">Privacy</Badge>
                          <span className="text-sm text-black dark:text-[#fafafa]">privacy@wewiselabs.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="dark:bg-[#262626] dark:text-[#fafafa]">General</Badge>
                          <span className="text-sm text-black dark:text-[#fafafa]">info@wewiselabs.com</span>
                        </div>
                        <p className="text-sm text-muted-foreground dark:text-[#d4d4d4]">
                          We value our users and will do our best to address your inquiries promptly and professionally.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}