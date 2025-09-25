"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/knowledge-1.jpg",
  "/images/knowledge-2.jpg",
  "/images/edit-after-1.jpg",
  "/images/edit-after-2.jpg",
  "/images/style-variations.jpg",
  "/images/hero-demo.jpg",
  "/images/batch-output.jpg",
]

export function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Creativity Unleashed, Explore the Possibilities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our curated showcase to spark your next great idea.
          </p>
        </div>

        {/* Perfect Image Bento Grid */}
        <div className="mb-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[400px_300px_400px]">
            {/* Large left image - spans 2 columns and 2 rows */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-[300px] md:h-full">
              <Image 
                src={galleryImages[0]} 
                alt="Gallery image 1" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Top right image */}
            <div className="md:col-span-1 relative overflow-hidden rounded-xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-[300px] md:h-full">
              <Image 
                src={galleryImages[1]} 
                alt="Gallery image 2" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Second row left */}
            <div className="md:col-span-1 relative overflow-hidden rounded-xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-[300px] md:h-full">
              <Image 
                src={galleryImages[2]} 
                alt="Gallery image 3" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Second row center-right */}
            <div className="md:col-span-2 relative overflow-hidden rounded-xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-[300px] md:h-full">
              <Image 
                src={galleryImages[3]} 
                alt="Gallery image 4" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Bottom left */}
            <div className="md:col-span-1 relative overflow-hidden rounded-xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-[300px] md:h-full">
              <Image 
                src={galleryImages[4]} 
                alt="Gallery image 5" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Bottom right */}
            <div className="md:col-span-2 relative overflow-hidden rounded-xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-[300px] md:h-full">
              <Image 
                src={galleryImages[5]} 
                alt="Gallery image 6" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-3">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}