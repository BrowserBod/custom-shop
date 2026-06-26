/**
 * Custom Shop API — Cloudflare Worker
 * Routes:
 *   GET  /api/products                 -> list active products (filter by ?category=)
 *   GET  /api/products/:slug           -> full product detail (variants + personalization fields)
 *   GET  /api/categories               -> list categories
 *   POST /api/checkout                 -> create Stripe Checkout session
 *   POST /api/upload                   -> upload personalization image to R2, returns URL
 *   POST /api/webhook/stripe           -> Stripe webhook, creates order on payment success
 *
 * Bindings expected (set in wrangler.toml):
 *   DB        - D1 database
 *   UPLOADS   - R2 bucket
 *   STRIPE_SECRET_KEY      - env var (secret)
 *   STRIPE_WEBHOOK_SECRET  - env var (secret)
 *   PUBLIC_SITE_URL        - env var, e.g. https://shop.example.com
 */

import { handleListProducts, handleGetProduct } from "./routes/products.js";
import { handleListCategories } from "./routes/categories.js";
import { handleCreateCheckout } from "./routes/checkout.js";
import { handleUpload } from "./routes/upload.js";
import { handleStripeWebhook } from "./routes/webhook.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // tighten to your storefront domain in production
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      let response;

      if (pathname === "/api/products" && request.method === "GET") {
        response = await handleListProducts(request, env, url);
      } else if (
        pathname.startsWith("/api/products/") &&
        request.method === "GET"
      ) {
        const slug = pathname.split("/api/products/")[1];
        response = await handleGetProduct(slug, env);
      } else if (pathname === "/api/categories" && request.method === "GET") {
        response = await handleListCategories(env);
      } else if (pathname === "/api/checkout" && request.method === "POST") {
        response = await handleCreateCheckout(request, env);
      } else if (pathname === "/api/upload" && request.method === "POST") {
        response = await handleUpload(request, env);
      } else if (
        pathname === "/api/webhook/stripe" &&
        request.method === "POST"
      ) {
        response = await handleStripeWebhook(request, env);
      } else {
        response = new Response(JSON.stringify({ error: "Not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      // attach CORS headers to every response
      const newHeaders = new Headers(response.headers);
      Object.entries(corsHeaders).forEach(([k, v]) => newHeaders.set(k, v));
      return new Response(response.body, {
        status: response.status,
        headers: newHeaders,
      });
    } catch (err) {
      console.error("Worker error:", err);
      return new Response(
        JSON.stringify({ error: "Internal server error", message: err.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  },
};
