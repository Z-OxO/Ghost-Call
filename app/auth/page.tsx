"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Key, ArrowRight, Shield, Loader2, Copy, Check, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { generateAccountId, validateAccountId } from "@/lib/account"

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "create">("login")
  const [accountId, setAccountId] = useState("")
  const [generatedId, setGeneratedId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")

  const handleGenerateAccount = async () => {
    setIsLoading(true)
    setError("")

    // Generate new account ID
    const newId = generateAccountId()
    setGeneratedId(newId)

    // TODO: API call to create account in Supabase
    // const { data, error } = await supabase.from('accounts').insert({ id: newId })

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formattedId = accountId.toUpperCase().replace(/[^A-Z0-9]/g, "")
    const formatted = formattedId.match(/.{1,4}/g)?.join("-") || ""

    if (!validateAccountId(formatted)) {
      setError("Invalid account ID format")
      setIsLoading(false)
      return
    }

    // TODO: API call to verify account exists
    // const { data, error } = await supabase.from('accounts').select().eq('id', formatted)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)

    // Redirect to dashboard on success
    // router.push('/credits')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <Phone className="h-9 w-9 sm:h-10 sm:w-10 text-primary" />
          <span className="text-xl sm:text-2xl font-bold text-foreground">
            Ghost<span className="text-primary text-glow">Call</span>
          </span>
        </Link>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 sm:p-8"
        >
          {/* Mode Tabs */}
          <div className="flex rounded-lg bg-secondary/50 p-1 mb-8">
            <button
              onClick={() => {
                setMode("login")
                setError("")
                setGeneratedId("")
              }}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                mode === "login" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Access Account
            </button>
            <button
              onClick={() => {
                setMode("create")
                setError("")
              }}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                mode === "create" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Create Account
            </button>
          </div>

          {mode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="text-center mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Enter your Account ID</h1>
                <p className="text-sm text-muted-foreground">Your unique 16-character identifier</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountId" className="text-foreground text-sm">
                  Account ID
                </Label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                  <Input
                    id="accountId"
                    type="text"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value.toUpperCase())}
                    className="pl-10 bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-200 font-mono tracking-wider text-center"
                    maxLength={19}
                    required
                  />
                </div>
                {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-sm hover:glow transition-all duration-300 py-5 sm:py-6 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Verifying...
                  </div>
                ) : (
                  <>
                    Access Account
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Generate Account</h1>
                <p className="text-sm text-muted-foreground">No email or password required. Just save your ID.</p>
              </div>

              {generatedId ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl">
                    <p className="text-xs text-muted-foreground text-center mb-2">Your Account ID</p>
                    <p className="text-xl sm:text-2xl font-mono font-bold text-primary text-center tracking-wider">
                      {generatedId}
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <p className="text-sm text-yellow-400 text-center font-medium">
                      Save this ID! It cannot be recovered if lost.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent"
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4 text-green-400" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy ID
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={handleGenerateAccount}
                      variant="outline"
                      className="flex-1 border-border hover:bg-secondary bg-transparent"
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      New ID
                    </Button>
                  </div>

                  <Button
                    onClick={() => {
                      setAccountId(generatedId)
                      setMode("login")
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-sm hover:glow transition-all duration-300 py-5 sm:py-6 group"
                  >
                    Continue to Account
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
              ) : (
                <Button
                  onClick={handleGenerateAccount}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-sm hover:glow transition-all duration-300 py-5 sm:py-6 group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Generating...
                    </div>
                  ) : (
                    <>
                      <Key className="mr-2 h-5 w-5" />
                      Generate Account ID
                    </>
                  )}
                </Button>
              )}
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              No personal data collected
            </div>
          </div>
        </motion.div>

        <p className="text-xs text-center text-muted-foreground mt-6">
          By creating an account, you agree to our{" "}
          <Link href="/tos" className="text-primary hover:underline">
            Terms of Service
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
