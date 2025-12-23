"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, CreditCard, Key } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Phone className="h-7 w-7 lg:h-8 lg:w-8 text-primary transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Ghost<span className="text-primary text-glow">Call</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="/credits"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm lg:text-base"
            >
              <CreditCard className="h-4 w-4" />
              Credits
            </Link>
            <Link
              href="/call"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm lg:text-base"
            >
              <Phone className="h-4 w-4" />
              Make a Call
            </Link>
            <Link href="/auth">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-sm hover:glow transition-all duration-200"
              >
                <Key className="h-4 w-4 mr-2" />
                Account
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-3">
                <Link
                  href="/credits"
                  className="flex items-center gap-2 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <CreditCard className="h-4 w-4" />
                  Credits
                </Link>
                <Link
                  href="/call"
                  className="flex items-center gap-2 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Make a Call
                </Link>
                <div className="px-4 pt-2">
                  <Link href="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-sm">
                      <Key className="h-4 w-4 mr-2" />
                      Account
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
