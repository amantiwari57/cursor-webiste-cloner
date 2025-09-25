"use client"

import * as React from "react"
import Image from "next/image"

export function Performance() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Model Performance
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Below are the results of Seedream 4.0 in internal benchmark MagicBench and on the third-party platform Artificial Analysis.
          </p>
        </div>

        {/* MagicBench */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            MagicBench: Multi-Dimensional Evaluation
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            In comparison with other models, Seedream 4.0 performed well across core dimensions including prompt adherence, alignment, and aesthetics.
          </p>
          
          <div className="grid md:grid-cols-1 gap-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Text-to-Image Radar Chart</h4>
              <div className="w-[400px] h-[400px] mx-auto mb-4">
                <Image
                  src="/images/performance-chart-1.png"
                  alt="Text-to-Image Radar Chart"
                  width={544}
                  height={544}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">
                Achieved high scores in text-to-image tasks for prompt following, aesthetics, and text-rendering.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Single-Image Editing Radar Chart</h4>
              <div className="w-[400px] h-[400px] mx-auto mb-4">
                <Image
                  src="/images/performance-chart-1.png"
                  alt="Single-Image Editing Radar Chart"
                  width={544}
                  height={544}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">
                Achieved a good balance between prompt following and alignment with the source image in single-image editing tasks. Also reached the first place in the internal Elo evaluation.
              </p>
            </div>
          </div>
        </div>

        {/* Artificial Analysis */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-12 text-center">
            Artificial Analysis Image Arena
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Text-to-Image Leaderboard</h4>
              <div className="w-[500px] h-[375px] mx-auto mb-4">
                <Image
                  src="/images/performance-chart-1.png"
                  alt="Text-to-Image Leaderboard"
                  width={544}
                  height={408}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500">
                Source: Artificial Analysis official website. As of 2025-09-12 7:00 (GMT+8).
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Image Editing Leaderboard</h4>
              <div className="w-[500px] h-[375px] mx-auto mb-4">
                <Image
                  src="/images/performance-chart-1.png"
                  alt="Image Editing Leaderboard"
                  width={544}
                  height={408}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500">
                Source: Artificial Analysis official website. As of 2025-09-12 7:00 (GMT+8).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}