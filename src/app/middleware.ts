// /middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const response = NextResponse.next();
  if (request.url.includes('/api/posts')) {
    response.headers.set('Cache-Control', 'no-store');
  }
  return response;
}
