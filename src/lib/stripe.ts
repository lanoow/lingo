import Stripe from "stripe";

// biome-ignore lint/style/noNonNullAssertion: It's safe to assume that STRIPE_API_KEY is always set in production
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
	apiVersion: "2025-04-30.basil",
	typescript: true,
});