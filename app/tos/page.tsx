"use client"

import Link from "next/link"
import { Phone, ArrowLeft, Shield, AlertTriangle, Scale, FileText } from "lucide-react"
import { motion } from "framer-motion"

const sections = [
  {
    icon: FileText,
    title: "1. Service Description",
    content: `GhostCall provides anonymous voice calling services. When you create an account, you receive a unique 16-character Account ID that serves as your sole means of authentication. We assign you a temporary phone number for making outbound calls. The recipient will see this assigned number, not your personal phone number.`,
  },
  {
    icon: Shield,
    title: "2. Privacy & Anonymity",
    content: `We collect no personal information. No email, no name, no phone number. Your Account ID is the only identifier. Call metadata (duration, destination country) is stored temporarily for billing purposes and purged after 30 days. We do not record or store call audio content under any circumstances.`,
  },
  {
    icon: Scale,
    title: "3. Acceptable Use",
    content: `You agree NOT to use GhostCall for: illegal activities, harassment, threats, fraud, impersonation of law enforcement or government officials, spam calls, or any activity that violates local, national, or international law. Violation results in immediate account termination without refund.`,
  },
  {
    icon: AlertTriangle,
    title: "4. Prohibited Activities",
    content: `The following are strictly prohibited: using the service for emergency calls (911/112/999), making calls to premium rate numbers for fraudulent purposes, attempting to reverse-engineer or exploit the service, reselling or sharing your account access, using automated systems to make bulk calls.`,
  },
  {
    icon: FileText,
    title: "5. Credits & Billing",
    content: `Credits are prepaid and non-refundable. Credit purchases are final. Call rates vary by destination and are displayed before each call. Unused credits do not expire. We reserve the right to modify pricing with 30 days notice. Account balance cannot be transferred between accounts.`,
  },
  {
    icon: Shield,
    title: "6. Account Security",
    content: `Your Account ID is your only authentication method. If you lose it, your account and any remaining credits are unrecoverable. We cannot reset or retrieve Account IDs. Store your Account ID securely. We recommend saving it in multiple secure locations.`,
  },
  {
    icon: Scale,
    title: "7. Service Availability",
    content: `We strive for 99.9% uptime but do not guarantee uninterrupted service. We reserve the right to perform maintenance, modify features, or discontinue the service with reasonable notice. We are not liable for service interruptions or their consequences.`,
  },
  {
    icon: AlertTriangle,
    title: "8. Limitation of Liability",
    content: `GhostCall is provided "as is" without warranties. We are not liable for any damages arising from use of the service. Maximum liability is limited to the amount of credits in your account. We are not responsible for actions taken by call recipients or third parties.`,
  },
  {
    icon: Scale,
    title: "9. Law Enforcement",
    content: `While we prioritize privacy, we comply with valid legal orders from competent jurisdictions. We may disclose available information (limited to Account ID and call metadata) when legally required. We will notify users of such requests when legally permitted.`,
  },
  {
    icon: FileText,
    title: "10. Modifications",
    content: `We may update these terms at any time. Continued use after changes constitutes acceptance. Major changes will be announced on our website. It is your responsibility to review the terms periodically.`,
  },
]

export default function TOSPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Phone className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Ghost<span className="text-primary text-glow">Call</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 sm:p-8 mb-8"
        >
          <p className="text-muted-foreground leading-relaxed">
            By using GhostCall, you agree to these terms. Please read them carefully. GhostCall is an anonymous calling
            service designed to protect your privacy. We take our commitment to anonymity seriously, but this comes with
            responsibilities on both sides. These terms outline what you can expect from us and what we expect from you.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Questions about these terms? Contact us at <span className="text-primary">legal@ghostcall.io</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
