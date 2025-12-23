"use client"

import { UserPlus, CreditCard, Phone, Shield } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up in seconds with just your email. No personal information or identity verification required.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Buy Credits",
    description: "Purchase call credits with secure payment methods. Start with as little as $5 and never expires.",
  },
  {
    icon: Phone,
    step: "03",
    title: "Make Your Call",
    description: "Enter any phone number and call instantly. Your assigned anonymous number masks your identity.",
  },
  {
    icon: Shield,
    step: "04",
    title: "Stay Protected",
    description: "All call logs and metadata are automatically deleted. Zero trace, zero risk, complete privacy.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Start Calling in <span className="text-primary text-glow">4 Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with no complex setup. Our streamlined process gets you calling anonymously right
            away.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/10 select-none">
                  {step.step}
                </div>

                {/* Icon Circle */}
                <motion.div
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border border-border mb-6 group hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <step.icon className="h-8 w-8 text-primary relative z-10" />
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  />
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
