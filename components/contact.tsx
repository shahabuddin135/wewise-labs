"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Minimize2, Maximize2, ExternalLink } from "lucide-react"
import Link from "next/link"

type FormField = "name" | "email" | "email-confirm" | "message" | "submitting" | "submitted" | "error"

interface FormState {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })
  const [currentField, setCurrentField] = useState<FormField>("name")
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: string; content: string }>>([
    { type: "system", content: "Welcome to Wewise Labs Terminal. Please enter your information to get in touch." },
    { type: "system", content: "Enter your name:" },
  ])
  const [isMinimized, setIsMinimized] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)
  
  const terminalRef = useRef<HTMLDivElement>(null)

  // Use the environment variable
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_URL

  // Auto-scroll to bottom of terminal
    useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])
  
  const addToHistory = (type: string, content: string) => {
    setTerminalHistory((prev) => [...prev, { type, content }])
  }

  const simulateTyping = (callback: () => void, delay = 500) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, delay)
  }

  const submitToFormspree = async (data: FormState): Promise<{ success: boolean; error?: string }> => {
    // Check if Formspree endpoint is configured
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      return {
        success: false,
        error: "Formspree endpoint not configured. Please contact us directly at hello@wewiselabs.com",
      }
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `New contact form submission from ${data.name}`,
          _replyto: data.email,
        }),
      })

      if (response.ok) {
        return { success: true }
      } else {
        const errorData = await response.json().catch(() => ({}))
        return {
          success: false,
          error: errorData.error || `Server error: ${response.status} ${response.statusText}`,
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleInputSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (currentField === "name") {
      if (!formState.name.trim()) {
        simulateTyping(() => {
          addToHistory("error", "Name cannot be empty. Please enter your name:")
        })
        return
      }
      addToHistory("user", formState.name)
      simulateTyping(() => {
        addToHistory("system", `Hello ${formState.name}! Please enter your email address:`)
        setCurrentField("email")
      })
    } else if (currentField === "email") {
      if (!formState.email.trim()) {
        simulateTyping(() => {
          addToHistory("error", "Email cannot be empty. Please enter your email:")
        })
        return
      }
      
      addToHistory("user", formState.email)
      simulateTyping(() => {
        addToHistory("system", `Email entered: ${formState.email}`)
        addToHistory("system", "Is this email address correct? (yes/no)")
        setCurrentField("email-confirm")
      })
    } else if (currentField === "email-confirm") {
      const confirmation = formState.message.toLowerCase().trim()
      addToHistory("user", confirmation)

      if (confirmation === "yes" || confirmation === "y") {
        simulateTyping(() => {
          addToHistory("system", "Great! Now please enter your message:")
          setCurrentField("message")
          setFormState({ ...formState, message: "" })
        })
      } else if (confirmation === "no" || confirmation === "n") {
        simulateTyping(() => {
          addToHistory("system", "Please enter your email address again:")
          setCurrentField("email")
          setFormState({ ...formState, email: "", message: "" })
        })
      } else {
        simulateTyping(() => {
          addToHistory("error", "Please answer with 'yes' or 'no'")
          addToHistory("system", `Is this email correct: ${formState.email}? (yes/no)`)
        })
      }
    } else if (currentField === "message") {
      if (!formState.message.trim()) {
        simulateTyping(() => {
          addToHistory("error", "Message cannot be empty. Please enter your message:")
        })
        return
      }
      addToHistory("user", formState.message)
      setCurrentField("submitting")

      simulateTyping(() => {
        addToHistory("system", "Thank you for your message!")
        addToHistory("system", "Submitting to our servers...")
        addToHistory("system", "Please wait...")
      }, 800)

      // Submit to Formspree
      setTimeout(async () => {
        const result = await submitToFormspree(formState)

        if (result.success) {
          addToHistory("success", "✓ Message sent successfully!")
          addToHistory("system", "We'll get back to you within 48 hours.")
          addToHistory("system", "Type 'reset' to send another message or 'exit' to close.")
          setCurrentField("submitted")
          setFormState({ ...formState, message: "" })
        } else {
          setSubmissionError(result.error || "Unknown error occurred")
          addToHistory("error", "✗ Failed to send message")
          addToHistory("error", result.error || "Unknown error occurred")
          addToHistory("system", "You can:")
          addToHistory("system", "• Type 'retry' to try again")
          addToHistory("system", "• Type 'contact' to get our direct email")
          addToHistory("system", "• Type 'reset' to start over")
          setCurrentField("error")
        }
      }, 2000)
    }
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const command = formState.message.toLowerCase().trim()

    addToHistory("command", command)

    if (command === "reset") {
      simulateTyping(() => {
        setFormState({ name: "", email: "", message: "" })
        setSubmissionError(null)
        setTerminalHistory([
          { type: "system", content: "Welcome to Wewise Labs Terminal. Please enter your information to get in touch." },
          { type: "system", content: "Enter your name:" },
        ])
        setCurrentField("name")
      })
    } else if (command === "exit") {
      simulateTyping(() => {
        addToHistory("system", "Thank you for visiting Wewise Labs!")
        addToHistory("system", "Terminal session ended.")
      })
    } else if (command === "help") {
      simulateTyping(() => {
        addToHistory("system", "Available commands:")
        if (currentField === "error") {
          addToHistory("system", "  retry - Try submitting again")
          addToHistory("system", "  contact - Get our direct email address")
        }
        addToHistory("system", "  reset - Start a new message")
        addToHistory("system", "  exit - Close the terminal")
        addToHistory("system", "  help - Show available commands")
        addToHistory("system", "  debug - Show debug information")
        addToHistory("system", "  contact - Get our direct email address")
      })
    } else if (command === "debug") {
      simulateTyping(() => {
        addToHistory("system", "Debug Information:")
        addToHistory("system", `Formspree Endpoint: ${FORMSPREE_ENDPOINT ? "Configured" : "Not configured"}`)
        addToHistory("system", `Form Data: Name=${formState.name}, Email=${formState.email}`)
        addToHistory("system", `Current Field: ${currentField}`)
        if (submissionError) {
          addToHistory("system", `Last Error: ${submissionError}`)
        }
      })
    } else if (command === "retry" && currentField === "error") {
      setCurrentField("submitting")
      simulateTyping(() => {
        addToHistory("system", "Retrying submission...")
        addToHistory("system", "Please wait...")
      })

      setTimeout(async () => {
        const result = await submitToFormspree(formState)

        if (result.success) {
          addToHistory("success", "✓ Message sent successfully!")
          addToHistory("system", "We'll get back to you within 24 hours.")
          addToHistory("system", "Type 'reset' to send another message or 'exit' to close.")
          setCurrentField("submitted")
          setSubmissionError(null)
        } else {
          addToHistory("error", "✗ Still unable to send message")
          addToHistory("error", result.error || "Please try again later")
          addToHistory("system", "Type 'contact' to get our direct contact information")
        }
      }, 1500)
    } else if (command === "contact") {
      simulateTyping(() => {
        addToHistory("system", "Direct contact information:")
        addToHistory("system", "🌐 Website: https://wewiselabs@gmail.com")
        
      })
    } else {
      simulateTyping(() => {
        addToHistory("error", `Command not recognized: ${command}`)
        addToHistory("system", "Type 'help' to see available commands.")
      })
    }

    setFormState({ ...formState, message: "" })
  }

  const getCurrentPlaceholder = () => {
    switch (currentField) {
      case "name":
        return "Enter your name..."
      case "email":
        return "Enter your email address..."
      case "email-confirm":
        return "Type 'yes' or 'no'..."
      case "message":
        return "Enter your message..."
      default:
        return "Type a command..."
    }
  }

  const getCurrentInputValue = () => {
    if (currentField === "email-confirm" || (currentField !== "name" && currentField !== "email")) {
      return formState.message
    }
    return formState[currentField as keyof FormState]
  }

  const getCurrentInputName = () => {
    if (currentField === "email-confirm" || (currentField !== "name" && currentField !== "email")) {
      return "message"
    }
    return currentField
  }

  const getCurrentInputType = () => {
    if (currentField === "email") return "email"
    return "text"
  }

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 px-4 md:px-8">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Ready to start your project? Contact us through our terminal interface below.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-3 md:px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 mr-1.5 md:mr-2"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 mr-1.5 md:mr-2"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 mr-1.5 md:mr-2"></div>
              <span className="text-white text-xs md:text-sm font-mono ml-2">wewise-labs:~/contact</span>
            </div>
            <div className="flex items-center gap-2">
              {!FORMSPREE_ENDPOINT && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                  <span className="text-yellow-400 text-xs">Config needed</span>
                </div>
              )}
              {currentField === "submitting" && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-1"></div>
                  <span className="text-blue-400 text-xs">Sending...</span>
                </div>
              )}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label={isMinimized ? "Maximize terminal" : "Minimize terminal"}
              >
                {isMinimized ? (
                  <Maximize2 className="h-3 w-3 md:h-4 md:w-4" />
                ) : (
                  <Minimize2 className="h-3 w-3 md:h-4 md:w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  ref={terminalRef}
                  className="bg-gray-900 text-green-500 font-mono p-3 md:p-4 h-[300px] md:h-[400px] overflow-y-auto text-xs md:text-sm"
                >
                  {terminalHistory.map((entry, index) => (
                    <div key={index} className="mb-1 md:mb-2">
                      {entry.type === "system" && <div className="text-blue-400">{entry.content}</div>}
                      {entry.type === "user" && (
                        <div className="break-words">
                          <span className="text-purple-400">user@wewise-labs:~$</span> {entry.content}
                        </div>
                      )}
                      {entry.type === "command" && (
                        <div className="break-words">
                          <span className="text-purple-400">user@wewise-labs:~$</span> {entry.content}
                        </div>
                      )}
                      {entry.type === "success" && <div className="text-green-400">{entry.content}</div>}
                      {entry.type === "error" && <div className="text-red-400">{entry.content}</div>}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center">
                      <span className="text-blue-400">system</span>
                      <span className="typing-indicator ml-1">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Terminal Input */}

                {currentField !== "submitting" ? (
                  <form
                    onSubmit={
                      currentField === "submitted" || currentField === "error" ? handleCommandSubmit : handleInputSubmit
                    }
                    className="bg-gray-800 p-2 md:p-3 flex items-center gap-2"
                  >
                    <span className="text-green-500 font-mono flex-shrink-0">
                      {currentField === "submitted" || currentField === "error" ? (
                        <span className="text-purple-400">$</span>
                      ) : (
                        <ChevronRight className="h-3 w-3 md:h-4 md:w-4 inline" />
                      )}

                    </span>
                    <input
                      type={getCurrentInputType()}
                      name={getCurrentInputName()}
                      value={getCurrentInputValue()}
                      onChange={handleInputChange}
                      className="bg-transparent text-white font-mono flex-grow focus:outline-none text-xs md:text-sm"
                      placeholder={getCurrentPlaceholder()}
                      required={currentField !== "submitted" && currentField !== "error"}
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="sm"
                      className="text-green-500 hover:text-green-400 hover:bg-gray-700 text-xs md:text-sm px-2 md:px-3"
                    >
                      Enter
                    </Button>
                  </form>
                ) : (
                  <div className="bg-gray-800 p-2 md:p-3 flex items-center gap-2">
                    <span className="text-blue-400 font-mono flex-shrink-0">Submitting...</span>
                    <div className="flex-grow flex items-center">
                      <div className="typing-indicator">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-500">
          <p className="mb-2">
            Prefer traditional contact? Email us at{" "}
            <Link href="mailto:wewiselabs@gmail.com" className="text-black underline">
            wewiselabs@gmail.com
            </Link>
          </p>
          
        </div>
      </div>
    </section>
  )
}