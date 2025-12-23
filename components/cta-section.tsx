"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">100% Anonymous & Secure</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Ready to Make Your First <br className="hidden sm:block" />
            <span className="text-primary text-glow">Anonymous Call</span>?
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of privacy-conscious users who trust GhostCall for their confidential communications. Get
            started with free credits today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/auth?mode=signup">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow hover:glow-lg transition-all duration-300 text-lg px-8 py-6 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link href="/call">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
              >
                Try a Demo Call
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-5 w-5 text-primary" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-5 w-5 text-primary" />
              <span>190+ Countries</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
