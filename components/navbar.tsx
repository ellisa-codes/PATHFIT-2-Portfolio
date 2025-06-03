"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Food & Activity", href: "/food-activity" },
  { name: "Advocacy", href: "/advocacy" },
  { name: "Midterm Reflection", href: "/midterm-reflection" },
  { name: "PATHFIT Cocina", href: "/pe-day" },
  { name: "Finals Reflection", href: "/finals-reflection" },
  { name: "Health Trivias", href: "/health-trivias" },
  { name: "Message", href: "/message" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">EllisaShammahBonete_PATHFIT2_Portfolio</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-x-2 lg:gap-x-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md
                  hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100 
                  dark:hover:from-pink-900/30 dark:hover:to-blue-900/30
                  hover:text-primary hover:shadow-sm hover:scale-105
                  ${
                    isActive
                      ? "bg-gradient-to-r from-pink-200 to-blue-200 dark:from-pink-800/40 dark:to-blue-800/40 text-primary shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {item.name}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden",
          mobileMenuOpen ? "slide-in-from-bottom-80 bg-background" : "slide-out-to-bottom-80 hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md bg-background p-4">
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex w-full items-center rounded-md p-3 text-sm font-medium transition-all duration-300
                    hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100 
                    dark:hover:from-pink-900/30 dark:hover:to-blue-900/30
                    hover:shadow-sm hover:scale-[1.02]
                    ${
                      isActive
                        ? "bg-gradient-to-r from-pink-200 to-blue-200 dark:from-pink-800/40 dark:to-blue-800/40 text-primary shadow-md"
                        : "hover:bg-accent"
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
