import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	dialect: "postgresql",
	dbCredentials: {
		// biome-ignore lint/style/noNonNullAssertion: It's safe to assume that DATABASE_URL is always set in production
		url: process.env.DATABASE_URL!,
	},
} satisfies Config;
