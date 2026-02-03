"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <>
      {/* Top contact bar - Hidden on small mobile, visible on sm+ */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden sm:block transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:770-572-1066" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>770-572-1066</span>
            </a>
            <a
              href="mailto:ejosephisang@ritebridge.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>ejosephisang@ritebridge.com</span>
            </a>
          </div>
          <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-1 text-xs font-semibold hover:text-accent transition-colors cursor-pointer">
              SCHEDULE CONSULTATION <ArrowRight className="h-3 w-3" />
            </div>
          </a>
        </div>
      </div>

      {/* Main navigation - Added glass effect on scroll */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-background border-b border-border py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-xl sm:text-2xl font-bold text-secondary group-hover:opacity-90 transition-opacity">
                Dr. Ekaette <span className="text-chart-3">Joseph-Isang</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Full screen overlay with animation */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: "0" }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>

          <nav className="flex flex-col items-center space-y-6 text-center">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-bold text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-border w-full max-w-xs">
            <a
              href="tel:770-572-1066"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>770-572-1066</span>
            </a>
            <a
              href="mailto:ejosephisang@ritebridge.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>ejosephisang@ritebridge.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
