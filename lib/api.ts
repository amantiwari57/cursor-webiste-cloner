import { NextApiRequest, NextApiResponse } from 'next'

export interface Model {
  id: string
  name: string
  description: string
  capabilities: string[]
  category: string
  status: string
  preview_image: string
  examples: Array<{
    prompt: string
    image: string
  }>
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

export interface GalleryItem {
  id: number
  title: string
  prompt: string
  image: string
  category: string
}

export interface PricingTier {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
  cta: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

// API fetch wrapper functions
export async function fetchModels(): Promise<ApiResponse<{ models: Model[], features: Feature[], gallery: GalleryItem[] }>> {
  try {
    const response = await fetch('/api/models')
    if (!response.ok) throw new Error('Failed to fetch models')
    return await response.json()
  } catch (error) {
    return {
      success: false,
      data: { models: [], features: [], gallery: [] },
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

export async function fetchPricing(): Promise<ApiResponse<{ pricing: PricingTier[] }>> {
  try {
    const response = await fetch('/api/pricing')
    if (!response.ok) throw new Error('Failed to fetch pricing')
    return await response.json()
  } catch (error) {
    return {
      success: false,
      data: { pricing: [] },
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

// Utility function for handling API routes
export function createApiHandler<T>(data: T) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
      res.status(200).json({
        success: true,
        data
      })
    } else {
      res.setHeader('Allow', ['GET'])
      res.status(405).json({
        success: false,
        message: `Method ${req.method} not allowed`
      })
    }
  }
}
