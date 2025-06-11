// Simple in-memory database for demo - replace with your preferred database
interface Purchase {
  id: string
  email: string
  packageId: string
  packageName: string
  amount: number
  paymentId: string
  status: "pending" | "completed" | "failed"
  downloadToken: string
  createdAt: Date
  expiresAt: Date
}

interface Package {
  id: string
  name: string
  description: string
  price: number
  files: {
    name: string
    url: string
    type: "meal" | "exercise"
  }[]
}

// In-memory storage (replace with actual database)
const purchases: Purchase[] = []
const packages: Package[] = [
  {
    id: "basic-hammer",
    name: "Basic Hammer Package",
    description: "Essential workout routines and meal plans to get you started",
    price: 4999, // $49.99 in cents
    files: [
      { name: "Basic Workout Plan.pdf", url: "/files/basic-workout.pdf", type: "exercise" },
      { name: "Basic Meal Plan.pdf", url: "/files/basic-meal.pdf", type: "meal" },
      { name: "Nutrition Guide.pdf", url: "/files/nutrition-guide.pdf", type: "meal" },
    ],
  },
  {
    id: "premium-hammer",
    name: "Premium Hammer Package",
    description: "Advanced training programs with detailed nutrition protocols",
    price: 9999, // $99.99 in cents
    files: [
      { name: "Premium Workout Plan.pdf", url: "/files/premium-workout.pdf", type: "exercise" },
      { name: "Premium Meal Plan.pdf", url: "/files/premium-meal.pdf", type: "meal" },
      { name: "Advanced Nutrition Guide.pdf", url: "/files/advanced-nutrition.pdf", type: "meal" },
      { name: "Supplement Guide.pdf", url: "/files/supplement-guide.pdf", type: "meal" },
      { name: "Recovery Protocols.pdf", url: "/files/recovery-protocols.pdf", type: "exercise" },
    ],
  },
  {
    id: "elite-hammer",
    name: "Elite Hammer Package",
    description: "Complete transformation system with personalized elements",
    price: 19999, // $199.99 in cents
    files: [
      { name: "Elite Workout Plan.pdf", url: "/files/elite-workout.pdf", type: "exercise" },
      { name: "Elite Meal Plan.pdf", url: "/files/elite-meal.pdf", type: "meal" },
      { name: "Complete Nutrition System.pdf", url: "/files/complete-nutrition.pdf", type: "meal" },
      { name: "Advanced Training Protocols.pdf", url: "/files/advanced-training.pdf", type: "exercise" },
      { name: "Mindset Training.pdf", url: "/files/mindset-training.pdf", type: "exercise" },
      { name: "Meal Prep Guide.pdf", url: "/files/meal-prep.pdf", type: "meal" },
      { name: "Progress Tracking System.pdf", url: "/files/progress-tracking.pdf", type: "exercise" },
    ],
  },
]

export const db = {
  // Package operations
  getPackages: () => packages,
  getPackage: (id: string) => packages.find((p) => p.id === id),

  // Purchase operations
  createPurchase: (purchase: Omit<Purchase, "id" | "createdAt">) => {
    const newPurchase: Purchase = {
      ...purchase,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    }
    purchases.push(newPurchase)
    return newPurchase
  },

  getPurchase: (id: string) => purchases.find((p) => p.id === id),
  getPurchaseByToken: (token: string) => purchases.find((p) => p.downloadToken === token),
  getPurchaseByPaymentId: (paymentId: string) => purchases.find((p) => p.paymentId === paymentId),

  updatePurchase: (id: string, updates: Partial<Purchase>) => {
    const index = purchases.findIndex((p) => p.id === id)
    if (index !== -1) {
      purchases[index] = { ...purchases[index], ...updates }
      return purchases[index]
    }
    return null
  },

  getUserPurchases: (email: string) => purchases.filter((p) => p.email === email && p.status === "completed"),
}
