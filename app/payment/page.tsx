"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Check, Shield, Zap, Clock, Star, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

const creditPackages = [
  { id: 1, amount: 10, bonus: 0, price: 10, popular: false },
  { id: 2, amount: 25, bonus: 3, price: 25, popular: false },
  { id: 3, amount: 50, bonus: 8, price: 50, popular: true },
  { id: 4, amount: 100, bonus: 20, price: 100, popular: false },
]

export default function PaymentPage() {
  const [selectedPackage, setSelectedPackage] = useState<number>(3)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
  }

  const selected = creditPackages.find((p) => p.id === selectedPackage)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Buy <span className="text-primary text-glow">Credits</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a package that fits your needs. More credits mean more savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Packages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Select Package</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {creditPackages.map((pkg, index) => (
                  <motion.button
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    onClick={() => setSelectedPackage(pkg.id)}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-5 sm:p-6 rounded-2xl text-left transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? "glass-card border-primary glow-sm"
                        : "glass-card hover:border-primary/30"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl sm:text-3xl font-bold text-foreground">${pkg.amount}</div>
                      {selectedPackage === pkg.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="p-1.5 rounded-full bg-primary"
                        >
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </motion.div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <p className="text-foreground font-medium">${pkg.amount} Credits</p>
                      {pkg.bonus > 0 && <p className="text-sm text-primary">+ ${pkg.bonus} Bonus Credits</p>}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Instant Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Never Expires</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-5 sm:p-6 h-fit"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-6">Payment Details</h2>

              {/* Order Summary */}
              <div className="p-4 rounded-xl bg-secondary/50 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground text-sm">Package</span>
                  <span className="text-foreground font-medium">${selected?.amount} Credits</span>
                </div>
                {selected?.bonus && selected.bonus > 0 && (
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground text-sm">Bonus</span>
                    <span className="text-primary font-medium">+${selected.bonus}</span>
                  </div>
                )}
                <div className="border-t border-border mt-3 pt-3 flex items-center justify-between">
                  <span className="text-foreground font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary">${selected?.price}</span>
                </div>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  handlePayment()
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-foreground text-sm">
                    Card Number
                  </Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                    <Input
                      id="cardNumber"
                      placeholder="4242 4242 4242 4242"
                      className="pl-10 bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-foreground text-sm">
                      Expiry
                    </Label>
                    <Input id="expiry" placeholder="MM/YY" className="bg-input border-border focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc" className="text-foreground text-sm">
                      CVC
                    </Label>
                    <Input id="cvc" placeholder="123" className="bg-input border-border focus:border-primary" />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-sm hover:glow transition-all duration-300 py-5 sm:py-6 mt-4"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    <>Pay ${selected?.price}</>
                  )}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Your payment is secured with 256-bit SSL encryption
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
