"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  models: [
    { name: "Seed1.6", href: "/en/seed1_6" },
    { name: "Seed1.5-VL", href: "/en/seed1_5_vl" },
    { name: "Seedance 1.0", href: "/en/seedance" },
    { name: "Seedream 4.0", href: "/en/seedream4_0" },
    { name: "SeedEdit 3.0", href: "/en/seededit" },
    { name: "Seed LiveInterpret 2.0", href: "/en/seed_liveinterpret" },
    { name: "Seed Realtime Voice", href: "/en/realtime_voice" },
    { name: "Seed Music", href: "/en/seed-music" },
  ],
  teams: [
    { name: "LLM", href: "/en/direction/llm" },
    { name: "Infrastructures", href: "/en/direction/infrastructures" },
    { name: "Vision", href: "/en/direction/vision" },
    { name: "Speech", href: "/en/direction/speech" },
    { name: "Multimodal Interaction & World Model", href: "/en/direction/multimodal" },
    { name: "AI for Science", href: "/en/direction/ai_for_science" },
    { name: "Robotics", href: "/en/direction/robotics" },
    { name: "Responsible AI", href: "/en/direction/responsible_ai" },
  ],
  learnMore: [
    { name: "Research", href: "/en/research" },
    { name: "News", href: "/en/blog" },
    { name: "Seed Edge", href: "/en/seed-edge" },
    { name: "Top Seed", href: "/en/topseed" },
    { name: "Join Us", href: "/en/career" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and CTA */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-lg">S</span>
              </div>
              <span className="text-white font-semibold text-lg">Seed</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/qr-code.png"
                  alt="QR Code"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-sm">Join ByteDance Seed</span>
              </div>
            </div>
          </div>

          {/* Models */}
          <div>
            <h3 className="text-white font-semibold mb-6">Models</h3>
            <ul className="space-y-3">
              {footerLinks.models.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams */}
          <div>
            <h3 className="text-white font-semibold mb-6">Teams</h3>
            <ul className="space-y-3">
              {footerLinks.teams.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-white font-semibold mb-6">Learn More</h3>
            <ul className="space-y-3">
              {footerLinks.learnMore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Bytedance Seed
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/user-agreement" className="text-gray-400 hover:text-white text-sm transition-colors">
              User Agreement
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}