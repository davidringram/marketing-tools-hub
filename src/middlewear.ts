import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

// Protect the entire site (/)
const isProtectedRoute = createRouteMatcher(['(.*)']);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();

  // If they are not logged in, bounce them to the Clerk login page
  if (!userId && isProtectedRoute(context.request)) {
    return redirectToSignIn();
  }
});