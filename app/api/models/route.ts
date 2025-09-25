import { NextResponse } from 'next/server'
import modelsData from '@/data/models.json'

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: modelsData
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch models data',
        data: { models: [], features: [], gallery: [] }
      },
      { status: 500 }
    )
  }
}
