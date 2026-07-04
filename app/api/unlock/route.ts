import { NextRequest, NextResponse } from 'next/server'

const SITE_PASSWORD = 'ComingSoon2026'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (password === SITE_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('sg_preview', 'unlocked', {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })
    return response
  }

  return NextResponse.json(
    { success: false, error: 'Incorrect password' },
    { status: 401 }
  )
}
