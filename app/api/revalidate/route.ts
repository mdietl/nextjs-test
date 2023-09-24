// write a nextjs route handler that will revalidate the cache

import { NextApiRequest, NextApiResponse } from 'next'
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(req: NextRequest, res: NextResponse) {
    console.log('revalidating /product/1')
    revalidatePath('/products/1')

    return NextResponse.json({ revalidated: true, now: Date.now(), test: Math.floor(Math.random() * 1000)})
}
