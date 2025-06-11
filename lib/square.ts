import { Client } from "squareup"

// Determine environment
const environment = process.env.NODE_ENV === "production" ? "production" : "sandbox"

// Initialize Square client with error handling
let client: Client | null = null

try {
  client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN || "",
    environment: environment as any,
  })
} catch (error) {
  console.error("Failed to initialize Square client:", error)
}

// Export APIs with null checks
export const paymentsApi = client?.paymentsApi
export const ordersApi = client?.ordersApi
export const customersApi = client?.customersApi

export { client }
