import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the password page and unlock API to pass through unconditionally
  if (pathname.startsWith('/password') || pathname.startsWith('/api/unlock')) {
    return NextResponse.next()
  }

  const isAuthenticated = request.cookies.get('sg_preview')?.value === 'unlocked'

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/password', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Run on all paths except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
