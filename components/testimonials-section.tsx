"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex M.",
    role: "Privacy Advocate",
    content:
      "Finally a service that takes privacy seriously. No verification, no logs, just pure anonymous communication.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Journalist",
    content: "Essential tool for protecting sources. The encryption and zero-log policy give me peace of mind.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Business Owner",
    content: "Crystal clear call quality with complete anonymity. Worth every credit for business privacy.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Security Researcher",
    content: "I have tested many anonymous calling services. GhostCall is the only one I trust and recommend.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Remote Worker",
    content: "Simple to use, reliable, and truly private. The credit system means I only pay for what I need.",
    rating: 5,
  },
  {
    name: "Emily W.",
    role: "Legal Professional",
    content: "Client confidentiality is paramount. GhostCall helps me maintain that standard effortlessly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary text-glow">Privacy-Conscious</span> Users
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who trust GhostCall for their anonymous communication needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300 group"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-300" />

              <p className="text-muted-foreground leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
