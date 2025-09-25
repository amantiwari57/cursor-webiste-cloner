"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { Button } from "@/components/ui/button"

const demoExamples = [
  {
    prompt: "Remove the boy in this picture.",
    before: "/images/edit-before-1.jpg",
    after: "/images/edit-after-1.jpg",
  },
  {
    prompt: 'Change "Santiago Music Festival" to "Seedream Photography Exhibition", and the date into "2025.10.01-07". Keep the color scheme, font, and alignment of the text unchanged.',
    before: "/images/edit-before-2.jpg",
    after: "/images/edit-after-2.jpg",
  },
  {
    prompt: "Turn on the lights to light up the living room. The outside is still the evening.",
    before: "/images/edit-before-1.jpg",
    after: "/images/edit-after-1.jpg",
  },
  {
    prompt: "Refer to the line draft. Generate a scene on a red clay tennis court under the sun, where an athlete wearing a red top and white shorts is throwing up a tennis ball high, preparing to serve.",
    before: "/images/edit-before-2.jpg",
    after: "/images/edit-after-2.jpg",
  },
  {
    prompt: "Replace this dog with a Schnauzer.",
    before: "/images/edit-before-1.jpg",
    after: "/images/edit-after-1.jpg",
  },
  {
    prompt: "Colorize and repair the scratches on the photo.",
    before: "/images/edit-before-2.jpg",
    after: "/images/edit-after-2.jpg",
  },
]

const knowledgeExamples = [
  "/images/knowledge-1.jpg",
  "/images/knowledge-2.jpg", 
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/knowledge-1.jpg",
  "/images/knowledge-2.jpg",
  
]

function DemoExample({ example, index }: { example: typeof demoExamples[0], index: number }) {
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
      <div className="flex flex-col gap-2 items-center">
        <div className="w-[160px] h-[120px] overflow-hidden">
          <Image
            src={example.before}
            alt="Before"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center px-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs">→</span>
          </div>
        </div>
        <div className="w-[160px] h-[120px] overflow-hidden">
          <Image
            src={example.after}
            alt="After"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-20">
        {/* Batch Input & Output */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-1 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Batch Input & Output
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Upload multiple reference images and generate several outputs in one go, boosting your creative workflow. (Examples below show combined results.)
              </p>
              <div className="flex gap-4">
                <Button disabled className="bg-gray-100 text-gray-400 cursor-not-allowed">
                  Input Images
                </Button>
                <Button disabled className="bg-gray-100 text-gray-400 cursor-not-allowed">
                  Output Results
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Carousel
                items={[
                  <Card
                    key="batch-1"
                    card={{
                      src: "/images/batch-output.jpg",
                      title: "Batch Processing",
                      category: "Output Results",
                      content: (
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300">
                            High-quality batch processing results with multiple variations and styles applied simultaneously.
                          </p>
                          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-sm sm:text-base">Features:</h4>
                            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm lg:text-base">
                              <li>Multiple output formats</li>
                              <li>Batch optimization</li>
                              <li>Quality consistency</li>
                            </ul>
                          </div>
                        </div>
                      ),
                    }}
                    index={0}
                    layout={true}
                  />,
                  <Card
                    key="batch-2"
                    card={{
                      src: "/images/gallery-1.jpg",
                      title: "Creative Variations",
                      category: "Style Transfer",
                      content: (
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300">
                            Explore different creative interpretations and artistic styles applied to your images.
                          </p>
                          <Image 
                            src="/images/gallery-1.jpg" 
                            alt="Creative variations" 
                            width={500} 
                            height={300} 
                            className="rounded-lg w-full h-auto object-cover"
                          />
                        </div>
                      ),
                    }}
                    index={1}
                    layout={true}
                  />,
                  <Card
                    key="batch-3"
                    card={{
                      src: "/images/gallery-2.jpg",
                      title: "Professional Results",
                      category: "Quality Output",
                      content: (
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300">
                            Professional-grade results with attention to detail and artistic excellence.
                          </p>
                          <Image 
                            src="/images/gallery-2.jpg" 
                            alt="Professional results" 
                            width={500} 
                            height={300} 
                            className="rounded-lg w-full h-auto object-cover"
                          />
                        </div>
                      ),
                    }}
                    index={2}
                    layout={true}
                  />,
                ]}
              />
            </div>
          </div>
        </div>

        {/* Prompt-based Editing */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-1 gap-10 items-start">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Prompt-based Editing
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Create high-quality images or make precise edits with just one single sentence. Turn your words into visuals and watch them come to life.
              </p>
              <div className="flex gap-4">
                <Button disabled className="bg-gray-100 text-gray-400 cursor-not-allowed">
                  Try Examples
                </Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className=" flex flex-col ">
              <Carousel
                items={demoExamples.slice(0, 6).map((example, index) => (
                  <Card
                    key={`edit-${index}`}
                    card={{
                      src: index % 2 === 0 ? example.before : example.after,
                      title: `Edit ${index + 1}`,
                      category: "Prompt Editing",
                      content: (
                        <div className="space-y-4">
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-sm sm:text-base">Prompt:</h4>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 italic">
                              "{example.prompt}"
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium mb-2 text-xs sm:text-sm">Before</h5>
                              <Image 
                                src={example.before} 
                                alt="Before editing" 
                                width={300} 
                                height={200} 
                                className="rounded-lg w-full h-auto object-cover"
                              />
                            </div>
                            <div>
                              <h5 className="font-medium mb-2 text-xs sm:text-sm">After</h5>
                              <Image 
                                src={example.after} 
                                alt="After editing" 
                                width={300} 
                                height={200} 
                                className="rounded-lg w-full h-auto object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ),
                    }}
                    index={index}
                    layout={true}
                  />
                ))}
              />
            </div>
          </div>
        </div>

        {/* Versatile Styles */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Versatile Styles
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Unlock professional styles at your fingertips. Transform images or even your own photos into stunning art, whether it's watercolor, cyberpunk, or anything in between, and create your unique visual language in seconds. (Examples show multiple outputs together.)
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <Button disabled className="bg-gray-100 text-gray-400 cursor-not-allowed">
              Original Image
            </Button>
            <Button disabled className="bg-gray-100 text-gray-400 cursor-not-allowed">
              Style Variations
            </Button>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-4">
              <span className="text-sm font-medium text-gray-500">Prompt</span>
              <p className="text-gray-800 mt-2">
                "Change this picture to four styles: Hong Kong 90s style, Baroque style, oil painting style, and CG style."
              </p>
            </div>
          </div>
        </div>

        {/* Knowledge-driven Generation */}
        <div>
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Knowledge-driven Generation
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Easily generate visually appealing and accurate educational illustrations, charts, and professional images, powered by rich knowledge and reasoning capabilities.
              </p>
              <div className="flex gap-4">
                <Button disabled className="bg-gray-100 text-gray-400 cursor-not-allowed">
                  Educational Examples
                </Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                  Try Now
                </Button>
              </div>
            </div>
                <div className="grid grid-cols-3 gap-3">
                  {knowledgeExamples.map((example, index) => (
                    <div key={index} className="aspect-square overflow-hidden cursor-pointer hover:opacity-80 transition-opacity rounded-lg">
                      <Image
                        src={example}
                        alt={`Knowledge example ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}
