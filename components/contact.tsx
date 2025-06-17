"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Minimize2, Maximize2 } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [currentField, setCurrentField] = useState<"name" | "email" | "message" | "submitted">("name")
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: string; content: string }>>([
    { type: "system", content: "Welcome to Wewise Labs Terminal. Please enter your information to get in touch." },
    { type: "system", content: "Enter your name:" },
  ])
  const [isMinimized, setIsMinimized] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Add user input to terminal history
    // setTerminalHistory([...terminalHistory, { type: "user", content: formState[currentField] }])

    // Set typing indicator
    setIsTyping(true)

    // Process based on current field
    setTimeout(() => {
      setIsTyping(false)

      if (currentField === "name") {
        setTerminalHistory((prev) => [
          ...prev,
          { type: "system", content: `Hello ${formState.name}! Please enter your email:` },
        ])
        setCurrentField("email")
      } else if (currentField === "email") {
        setTerminalHistory((prev) => [...prev, { type: "system", content: "Great! Now, please enter your message:" }])
        setCurrentField("message")
      } else if (currentField === "message") {
        setTerminalHistory((prev) => [
          ...prev,
          { type: "system", content: "Thank you for your message! We'll get back to you soon." },
          { type: "system", content: "Processing your request..." },
        ])

        // Simulate processing
        setTimeout(() => {
          setTerminalHistory((prev) => [
            ...prev,
            { type: "success", content: "Message sent successfully! Reference: #" + Math.floor(Math.random() * 10000) },
            { type: "system", content: "Type 'reset' to start a new message or 'exit' to close." },
          ])
          setCurrentField("submitted")
        }, 1500)
      }
    }, 500)
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const command = formState.message.toLowerCase().trim()

    setTerminalHistory([...terminalHistory, { type: "command", content: command }])

    if (command === "reset") {
      setTimeout(() => {
        setFormState({ name: "", email: "", message: "" })
        setTerminalHistory([
          { type: "system", content: "Terminal reset. Please enter your information to get in touch." },
          { type: "system", content: "Enter your name:" },
        ])
        setCurrentField("name")
      }, 500)
    } else if (command === "exit") {
      setTimeout(() => {
        setTerminalHistory((prev) => [...prev, { type: "system", content: "Thank you for visiting Wewise Labs!" }])
      }, 500)
    } else if (command === "help") {
      setTimeout(() => {
        setTerminalHistory((prev) => [
          ...prev,
          { type: "system", content: "Available commands:" },
          { type: "system", content: "  reset - Start a new message" },
          { type: "system", content: "  exit - Close the terminal" },
          { type: "system", content: "  help - Show available commands" },
        ])
      }, 500)
    } else {
      setTimeout(() => {
        setTerminalHistory((prev) => [
          ...prev,
          { type: "error", content: `Command not recognized: ${command}` },
          { type: "system", content: "Type 'help' to see available commands." },
        ])
      }, 500)
    }

    setFormState({ ...formState, message: "" })
  }

  return (
    <section id="contact" className="py-24 relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to start your project? Contact us through our terminal interface below.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-white text-sm font-mono ml-2">wewise-labs:~/contact</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={isMinimized ? "Maximize terminal" : "Minimize terminal"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
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
                <div ref={terminalRef} className="bg-gray-900 text-green-500 font-mono p-4 h-[400px] overflow-y-auto">
                  {terminalHistory.map((entry, index) => (
                    <div key={index} className="mb-2">
                      {entry.type === "system" && <div className="text-blue-400">{entry.content}</div>}
                      {entry.type === "user" && (
                        <div>
                          <span className="text-purple-400">user@wewise-labs:~$</span> {entry.content}
                        </div>
                      )}
                      {entry.type === "command" && (
                        <div>
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
                {currentField !== "submitted" ? (
                  <form onSubmit={handleInputSubmit} className="bg-gray-800 p-2 flex items-center" >
                    <span className="text-green-500 font-mono mr-2">
                      <ChevronRight className="h-4 w-4 inline" />
                    </span>
                    {currentField === "name" && (
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="bg-transparent text-white font-mono flex-grow focus:outline-none"
                        placeholder="Enter your name..."
                        autoFocus
                        required
                      />
                    )}
                    {currentField === "email" && (
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="bg-transparent text-white font-mono flex-grow focus:outline-none"
                        placeholder="Enter your email..."
                        autoFocus
                        required
                      />
                    )}
                    {currentField === "message" && (
                      <input
                        type="text"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        className="bg-transparent text-white font-mono flex-grow focus:outline-none"
                        placeholder="Enter your message..."
                        autoFocus
                        required
                      />
                    )}
                    <Button
                      type="submit"
                      variant="ghost"
                      size="sm"
                      className="text-green-500 hover:text-green-400 hover:bg-gray-700"
                    >
                      Enter
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleCommandSubmit} className="bg-gray-800 p-2 flex items-center">
                    <span className="text-purple-400 font-mono mr-2">$</span>
                    <input
                      type="text"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      className="bg-transparent text-white font-mono flex-grow focus:outline-none"
                      placeholder="Type a command..."
                      autoFocus
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="sm"
                      className="text-green-500 hover:text-green-400 hover:bg-gray-700"
                    >
                      Enter
                    </Button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Prefer traditional contact? Email us at{" "}
            <a href="mailto:hello@wewise-labs.com" className="text-black underline">
              hello@wewise-labs.com
            </a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        
        .dot {
          width: 4px;
          height: 4px;
          margin: 0 1px;
          background-color: currentColor;
          border-radius: 50%;
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes pulse {
          0%, 50%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          25%, 75% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}