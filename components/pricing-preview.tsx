"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "$10",
    credits: "10",
    description: "Perfect for occasional anonymous calls",
    features: ["10 credits included", "HD voice quality", "Global coverage", "24/7 support"],
  },
  {
    name: "Popular",
    price: "$50",
    credits: "58",
    bonus: "+8 bonus",
    description: "Best value for regular users",
    features: [
      "50 credits + 8 bonus",
      "HD voice quality",
      "Global coverage",
      "Priority support",
      "Lower per-minute rate",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$100",
    credits: "120",
    bonus: "+20 bonus",
    description: "For power users who need more",
    features: [
      "100 credits + 20 bonus",
      "HD voice quality",
      "Global coverage",
      "Priority support",
      "Lowest per-minute rate",
      "Dedicated number option",
    ],
  },
]

export function PricingPreview() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">Simple Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pay Only For <span className="text-primary text-glow">What You Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No subscriptions, no hidden fees. Buy credits once and use them whenever you need. Credits never expire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 lg:p-8 ${
                tier.popular ? "glass-card border-primary/50 glow-sm" : "glass-card hover:border-primary/30"
              } transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.bonus && <span className="text-sm text-primary font-medium">{tier.bonus}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/payment" className="block">
                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-sm hover:glow"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  } transition-all duration-300`}
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All prices in USD. Rates: $0.05/min (US) | $0.15/min (International)
        </motion.p>
      </div>
    </section>
  )
}
