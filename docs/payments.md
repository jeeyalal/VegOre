# Razorpay Integration & Setup

This document explains how to configure Razorpay keys for the VegOre project and how to test payments locally and in production.

## Environment variables
Set these env vars in `Backend/.env` (DO NOT commit `.env` to git):

- `RAZORPAY_KEY_ID`: Razorpay API Key ID (test or live)
- `RAZORPAY_KEY_SECRET`: Razorpay API Key Secret
- `RAZORPAY_WEBHOOK_SECRET`: Webhook secret configured in Razorpay Dashboard for webhooks

For the frontend set the following in `frontend/.env` (client-safe key id only):

- `VITE_RAZORPAY_KEY_ID`: set to your Razorpay Key ID (public key). This will be embedded in the frontend bundle at build time.

## Endpoints
- `POST /api/payments/create-order` (auth required): Creates a Razorpay order via SDK on the backend.
- `POST /api/payments/verify` (auth required): Verify payment signature and create subscription. Also used to confirm payment from frontend after successful Razorpay checkout.
- `POST /api/payments/webhook`: Public webhook callback to update subscriptions based on Razorpay events (uses signature verification with `RAZORPAY_WEBHOOK_SECRET`).

## Flow (Recommended)
1. Frontend calls `POST /api/payments/create-order` with { amount }.
2. Backend creates a Razorpay order, returns order for frontend.
3. Frontend opens Razorpay checkout (checkout.js) with the returned `order_id` and Key ID.
4. On successful payment, frontend calls `POST /api/payments/verify` with `razorpay_order_id`, `razorpay_payment_id`, `razorpay_signature` and the `subscriptionData`.
5. Backend verifies signature and adds the subscription record into the DB with payment status 'success' and returns the created subscription.
6. Admin can view the subscription at `/api/subscriptions/list`, and admin UI shows updated status.

## Testing locally
Use Razorpay test keys (found in your Razorpay dashboard) for local testing and add them to your `Backend/.env` and `frontend/.env`.

## Webhook
Visit the Razorpay dashboard → Webhooks, and add webhook URL: `{PUBLIC_BACKEND_URL}/api/payments/webhook` and set webhook secret to `RAZORPAY_WEBHOOK_SECRET`.

Please DO NOT paste Razorpay key secrets into public or chat; set them via environment variables only.
