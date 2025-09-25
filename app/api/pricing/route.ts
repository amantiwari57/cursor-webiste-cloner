import { NextResponse } from 'next/server'
import pricingData from '@/data/pricing.json'

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: pricingData
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch pricing data',
        data: { pricing: [] }
      },
      { status: 500 }
    )
  }
}
