import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define which routes require authentication. Currently everything is public.
// To protect the dashboard, you would uncomment the matcher and the auth.protect() line below.
const isProtectedRoute = createRouteMatcher([
  // '/dashboard(.*)',
])

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
