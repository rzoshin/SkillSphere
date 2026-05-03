import { NextResponse } from 'next/server'

export async function proxy(request) {
  const sessionCookie =
    request.cookies.get("__Secure-better-auth.session_token") || // production
    request.cookies.get("better-auth.session_token");            // localhost

  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/course/:id']
}