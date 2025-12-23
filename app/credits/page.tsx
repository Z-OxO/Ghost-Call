"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CreditCard, Phone, Clock, TrendingUp, Plus, ArrowRight, History, Wallet } from "lucide-react"
import { motion } from "framer-motion"
import { CreditsSkeleton } from "@/components/skeletons/credits-skeleton"

export default function CreditsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [credits] = useState(125.5)
  const [assignedNumber] = useState("+1 (555) 842-9173")

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const recentActivity = [
    { id: 1, type: "call", number: "+1 (555) 123-4567", duration: "4:32", cost: -2.5, date: "Today, 2:34 PM" },
    { id: 2, type: "call", number: "+44 20 7946 0958", duration: "12:05", cost: -8.25, date: "Today, 11:20 AM" },
    { id: 3, type: "purchase", amount: 50.0, date: "Yesterday, 6:15 PM" },
    { id: 4, type: "call", number: "+1 (555) 987-6543", duration: "2:15", cost: -1.25, date: "Yesterday, 3:42 PM" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <CreditsSkeleton />
          ) : (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  Your <span className="text-primary text-glow">Credits</span>
                </h1>
                <p className="text-muted-foreground">Manage your balance and view call history</p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {/* Balance Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Balance</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">${credits.toFixed(2)}</div>
                    <p className="text-sm text-muted-foreground">Available credits</p>
                    <Link href="/payment">
                      <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-sm hover:glow transition-all duration-300">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Credits
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Assigned Number Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Your Number</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-foreground font-mono mb-1 break-all">
                      {assignedNumber}
                    </div>
                    <p className="text-sm text-muted-foreground">Anonymous caller ID</p>
                    <Link href="/call">
                      <Button
                        variant="outline"
                        className="mt-4 w-full border-primary/50 hover:bg-primary/10 transition-all duration-200 bg-transparent"
                      >
                        Make a Call
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Usage Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">This Month</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">47</div>
                    <p className="text-sm text-muted-foreground">Calls made</p>
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">3h 24m total duration</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <History className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground">Recent Activity</h2>
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    View All
                  </Button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`p-2 rounded-lg ${activity.type === "call" ? "bg-primary/10" : "bg-green-500/10"}`}
                        >
                          {activity.type === "call" ? (
                            <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          ) : (
                            <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                          )}
                        </div>
                        <div>
                          {activity.type === "call" ? (
                            <>
                              <p className="font-medium text-foreground font-mono text-sm sm:text-base">
                                {activity.number}
                              </p>
                              <p className="text-xs sm:text-sm text-muted-foreground">Duration: {activity.duration}</p>
                            </>
                          ) : (
                            <>
                              <p className="font-medium text-foreground text-sm sm:text-base">Credits Purchase</p>
                              <p className="text-xs sm:text-sm text-muted-foreground">Added to balance</p>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold text-sm sm:text-base ${activity.type === "call" ? "text-red-400" : "text-green-400"}`}
                        >
                          {activity.type === "call"
                            ? `-$${Math.abs(activity.cost!).toFixed(2)}`
                            : `+$${activity.amount!.toFixed(2)}`}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
