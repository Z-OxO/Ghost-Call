"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does GhostCall protect my identity?",
    answer:
      "When you make a call, we assign you a random phone number from our pool. The recipient sees this number, not yours. All calls are routed through our encrypted servers, and we maintain zero logs of any call activity.",
  },
  {
    question: "Do you store any call recordings or logs?",
    answer:
      "Absolutely not. We operate on a strict zero-logs policy. No call recordings, no call metadata, no duration logs, nothing. Once your call ends, all traces are immediately purged from our systems.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and cryptocurrency payments for maximum privacy. All payment processing is handled by secure third-party processors.",
  },
  {
    question: "Do credits expire?",
    answer:
      "No, your credits never expire. Buy once and use whenever you need them. There are no subscription fees or recurring charges.",
  },
  {
    question: "Can I choose my anonymous number?",
    answer:
      "For standard accounts, numbers are randomly assigned for each session. Pro users have the option to request a dedicated anonymous number that remains consistent.",
  },
  {
    question: "What countries can I call?",
    answer:
      "GhostCall supports calls to over 190 countries and territories worldwide. Rates vary by destination, with US calls at $0.05/min and international calls starting at $0.15/min.",
  },
  {
    question: "Is it legal to use GhostCall?",
    answer:
      "Yes, using anonymous calling services is legal in most countries. However, users are responsible for complying with local laws. GhostCall is designed for legitimate privacy needs.",
  },
  {
    question: "What if I have technical issues?",
    answer:
      "Our 24/7 support team is available to help. You can reach us through the in-app support chat or email. We typically respond within minutes.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary text-glow">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GhostCall and anonymous calling.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl overflow-hidden glass-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{faq.question}</span>
                </div>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-0 text-muted-foreground leading-relaxed pl-12">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
