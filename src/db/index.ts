import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
  // Add any additional exports or configurations if needed
});
