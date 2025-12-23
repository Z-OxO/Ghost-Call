"use client"

import { Shield, Phone, Lock, Zap, CreditCard, Globe, Fingerprint, Server, Eye } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Complete Anonymity",
    description:
      "Your real number is never exposed. We assign you a random number for each session that cannot be traced back to you.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All calls are encrypted with military-grade 256-bit AES encryption technology. Even we cannot listen to your calls.",
  },
  {
    icon: Zap,
    title: "Instant Connection",
    description:
      "No complex setup required. Create an account and start making calls within seconds. Zero configuration needed.",
  },
  {
    icon: CreditCard,
    title: "Flexible Credits",
    description:
      "Pay only for what you use with our credit-based system. No subscriptions, no hidden fees, no recurring charges.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Call any number worldwide with support for 190+ countries and regions. Same low rates everywhere.",
  },
  {
    icon: Phone,
    title: "HD Voice Quality",
    description: "Crystal clear audio quality powered by advanced codecs. Hear and be heard with perfect clarity.",
  },
  {
    icon: Fingerprint,
    title: "Zero Footprint",
    description: "We never store call logs, recordings, or any metadata. Your calls vanish the moment they end.",
  },
  {
    icon: Server,
    title: "Distributed Infrastructure",
    description: "Our servers are distributed globally with no single point of failure. Maximum uptime guaranteed.",
  },
  {
    icon: Eye,
    title: "No KYC Required",
    description: "We believe in privacy. No identity verification needed. Use any email to get started anonymously.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">Why GhostCall</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Privacy-First Communication <br className="hidden sm:block" />
            <span className="text-primary text-glow">Built for the Modern Age</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We have reimagined phone calls from the ground up with privacy as the foundation. Every feature is designed
            to keep your identity protected.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 glass-card rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:glow-sm transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
