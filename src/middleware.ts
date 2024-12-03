import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
export const TOKEN_KEY = 'token';

export async function middleware(request: NextRequest) {
	const cookie = await cookiers();
	const token = cookie.get(TOKEN_KEY);

	const protectedRoutes = ['auth', 'customerArea'];

	const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);
	if (isProtectedRoute && !token) {
		const url = new URL('/login', request.url);
		url.searchParams.append('unanthorized', 'true');
		return NextResponse.redirect(url.toString());
	}
	return NextResponse.next();
}
export const config = {
	matcher: ['/auth', '/customerArea']
};
