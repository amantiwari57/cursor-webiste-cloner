"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "News", href: "/blog" },
  { name: "Seed Edge", href: "/seed-edge" },
  { name: "Top Seed", href: "/topseed" },
  { name: "Join Us", href: "/career" },
]

export function Header() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 px-6 lg:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 rounded bg-white/95 text-black flex items-center justify-center font-semibold">S</div>
          <span className="text-white/95 font-medium">ByteDance | Seed</span>
        </div>
      </Link>

      {/* Desktop Navigation - pill chips */}
      <div className="hidden md:flex items-center gap-3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="rounded-full bg-white/90 text-black text-xs lg:text-sm px-3.5 py-1.5 hover:bg-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Language pill */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-white/95 text-black text-xs px-3 py-1">EN</span>
        {/* <span className="text-white/80 text-xs">中文</span> */}
      </div>
    </nav>
  )
}
