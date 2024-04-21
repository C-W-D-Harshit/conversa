import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up"]);

export default clerkMiddleware((auth, req) => {
  auth().protect();
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next|sign-in|sign-up).*)", // Don't run middleware on static files
    "/", // Run middleware on index page
    "/(api|trpc)(.*)",
  ], // Run middleware on API routes
};
