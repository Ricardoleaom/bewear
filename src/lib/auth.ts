// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  emailAndPassword: { enabled: true },

  // 🔑 Coloque SEU domínio aqui
  trustedOrigins: [
    "https://friendly-yodel-rq546qpq5qv35wjx.github.dev",
    "https://friendly-yodel-rq546qpq5qv35wjx-3000.app.github.dev",
    "https://friendly-yodel-rq546qpq5qv35wjx-3001.app.github.dev",
    "http://localhost:3000",
    "http://localhost:3001",
    "https://localhost:3000",
    "https://localhost:3001",
  ],

  // (se usar Google)
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      redirectURI: `https://friendly-yodel-rq546qpq5qv35wjx-3000.app.github.dev/api/auth/callback/google`,
    },
  },

  database: drizzleAdapter(db, { provider: "pg", schema }),
  user: { modelName: "userTable" },
  session: { modelName: "sessionTable" },
  account: { modelName: "accountTable" },
  verification: { modelName: "verificationTable" }, // se você criou a tabela
});
