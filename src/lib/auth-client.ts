import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" 
    ? window.location.origin 
    : "https://friendly-yodel-rq546qpq5qv35wjx.github.dev"
});
