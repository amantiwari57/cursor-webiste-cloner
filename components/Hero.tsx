"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative text-white min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/hero-demo.jpg"
          alt="Seedream 4.0 Demo"
          width={3840}
          height={2560}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative px-6 z-30 lg:px-10 pt-28 pb-10 flex flex-col justify-end h-screen">
        <div className="max-w-5xl">
          <h1
            className="font-semibold leading-none tracking-tight"
            style={{ fontSize: '120px', lineHeight: '120px', letterSpacing: '-12px', fontWeight: 600 }}
          >
            Seedream 4.0
          </h1>
          <p className="mt-6 text-white/95 text-lg max-w-3xl">
            As a new-generation image creation model, Seedream 4.0 integrates image generation and image editing
            capabilities into a single, unified architecture. This allows it to flexibly handle complex multimodal tasks,
            including knowledge-based generation, complex reasoning, and reference consistency. With much faster
            inference speed than its predecessor, the model can produce stunning, high-definition images at up to 4K
            resolution.
          </p>
        </div>

        {/* CTA Buttons bottom-right */}
        <div className="mt-10 flex gap-4 z-30">
          <Button className="rounded-full bg-white text-black hover:bg-white/90 px-6 py-2">Get API</Button>
          <Button variant="outline" className="rounded-full border-white text-black hover:bg-white hover:text-black px-6 py-2">
            Prompt Guide
          </Button>
          <Button variant="outline" className="rounded-full border-white text-black hover:bg-white hover:text-black px-6 py-2">
            Model Arena
          </Button>
        </div>
      </div>
    </section>
  )
}
