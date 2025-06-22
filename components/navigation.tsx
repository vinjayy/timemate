"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Puzzle, Lightbulb, Users, Menu, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    name: "Beranda",
    href: "/",
    icon: Home,
    description: "Selamat datang di TimeMate",
  },
  {
    name: "Fitur",
    href: "/features",
    icon: Puzzle,
    description: "Daily Tracker, Goals & Refleksi",
  },
  {
    name: "Tips",
    href: "/tips",
    icon: Lightbulb,
    description: "Tips dari para ahli",
  },
  {
    name: "Tentang",
    href: "/about",
    icon: Users,
    description: "Cerita di balik TimeMate",
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">TimeMate</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={cn(
                        "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200",
                        isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50",
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-800">TimeMate</span>
            </Link>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">TimeMate</h2>
                    <p className="text-sm text-gray-600">Teman Manajemen Waktu Kamu</p>
                  </div>

                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                        <div
                          className={cn(
                            "flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 border",
                            isActive
                              ? "bg-blue-600 text-white border-blue-600 shadow-md"
                              : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 border-gray-200 hover:border-blue-200",
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          <div className="flex-1">
                            <div className="font-medium">{item.name}</div>
                            <div className={cn("text-xs", isActive ? "text-blue-100" : "text-gray-500")}>
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1">
        <div
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{
            width: `${((navigationItems.findIndex((item) => item.href === pathname) + 1) / navigationItems.length) * 100}%`,
          }}
        />
      </div>
    </>
  )
}
