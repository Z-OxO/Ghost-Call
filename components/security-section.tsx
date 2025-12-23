"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Server, Lock, Eye, FileX, Globe2 } from "lucide-react"

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Military-Grade Encryption",
    description: "256-bit AES encryption protects every call from end to end.",
  },
  {
    icon: Server,
    title: "Zero-Knowledge Architecture",
    description: "Our systems are designed so even we cannot access your data.",
  },
  {
    icon: FileX,
    title: "No Logs Policy",
    description: "Call metadata, duration, and content are never stored anywhere.",
  },
  {
    icon: Eye,
    title: "Anonymous Registration",
    description: "No phone number or ID verification required to sign up.",
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "Servers in privacy-friendly jurisdictions with strict data laws.",
  },
  {
    icon: Globe2,
    title: "Distributed Network",
    description: "No single point of failure with globally distributed architecture.",
  },
]

export function SecuritySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
              Security First
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Your Privacy is Not <span className="text-primary text-glow">Negotiable</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We built GhostCall with a single mission: to provide truly private communication. Our infrastructure is
              designed from the ground up to ensure your calls remain completely anonymous and untraceable.
            </p>

            {/* Security Shield Visual */}
            <div className="relative">
              <motion.div
                className="w-32 h-32 mx-auto lg:mx-0 relative"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative w-full h-full flex items-center justify-center glass rounded-full border border-primary/30">
                  <ShieldCheck className="h-14 w-14 text-primary" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl glass-card hover:border-primary/40 transition-all duration-300 group"
              >
                <feature.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
