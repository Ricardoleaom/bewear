import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NODE_ENV === "production" 
    ? process.env.NEXT_PUBLIC_AUTH_URL || "https://friendly-yodel-rq546qpq5qv35wjx-3001.app.github.dev"
    : "http://localhost:3000",
});
