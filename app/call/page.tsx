"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX, Delete, Shield, Clock, Wallet, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CallSkeleton } from "@/components/skeletons/call-skeleton"

export default function CallPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isCallActive, setIsCallActive] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [assignedNumber] = useState("+1 (555) 842-9173")
  const [credits] = useState(125.5)

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isCallActive])

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const dialPad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ]

  const handleDial = (digit: string) => {
    if (phoneNumber.length < 15) {
      setPhoneNumber((prev) => prev + digit)
    }
  }

  const handleDelete = () => {
    setPhoneNumber((prev) => prev.slice(0, -1))
  }

  const handleCall = async () => {
    if (phoneNumber.length >= 10) {
      setIsConnecting(true)
      // Simulate API call to initiate connection
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsConnecting(false)
      setIsCallActive(true)
      setCallDuration(0)
    }
  }

  const handleEndCall = () => {
    setIsCallActive(false)
    setCallDuration(0)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 w-full max-w-md px-4">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-6 px-2"
          >
            <div className="flex items-center gap-2 text-sm">
              <Wallet className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Balance:</span>
              <span className="text-foreground font-semibold">${credits.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Encrypted</span>
            </div>
          </motion.div>

          {/* Call Interface */}
          {isLoading ? (
            <CallSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-6 sm:p-8"
            >
              {/* Caller ID Display */}
              <div className="text-center mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Calling From</p>
                <p className="text-sm font-mono text-primary">{assignedNumber}</p>
              </div>

              {/* Number Display */}
              <div className="mb-8">
                <motion.div
                  className={`min-h-[80px] flex items-center justify-center rounded-2xl bg-secondary/50 transition-all duration-300 ${isCallActive ? "glow" : ""}`}
                  animate={
                    isCallActive
                      ? {
                          boxShadow: [
                            "0 0 20px rgba(0,200,200,0.2)",
                            "0 0 40px rgba(0,200,200,0.3)",
                            "0 0 20px rgba(0,200,200,0.2)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {isConnecting ? (
                    <div className="text-center">
                      <Loader2 className="h-8 w-8 text-primary animate-spin mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Connecting...</p>
                    </div>
                  ) : isCallActive ? (
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-foreground font-mono mb-1">{phoneNumber}</p>
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        />
                        <Clock className="h-4 w-4" />
                        <span className="font-mono">{formatDuration(callDuration)}</span>
                      </div>
                    </div>
                  ) : (
                    <Input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter number to call"
                      className="text-xl sm:text-2xl font-mono text-center bg-transparent border-none focus:ring-0 placeholder:text-muted-foreground/50"
                    />
                  )}
                </motion.div>
              </div>

              {/* Dial Pad */}
              <AnimatePresence>
                {!isCallActive && !isConnecting && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-3 gap-2 sm:gap-3 mb-8"
                  >
                    {dialPad.flat().map((digit, index) => (
                      <motion.button
                        key={digit}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        onClick={() => handleDial(digit)}
                        whileTap={{ scale: 0.95 }}
                        className="h-14 sm:h-16 rounded-xl bg-secondary/50 hover:bg-secondary text-xl sm:text-2xl font-medium text-foreground transition-all duration-200"
                      >
                        {digit}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Call Controls */}
              <AnimatePresence>
                {isCallActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center gap-6 mb-8"
                  >
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMuted(!isMuted)}
                      className={`p-4 rounded-full transition-all duration-200 ${
                        isMuted ? "bg-red-500/20 text-red-400" : "bg-secondary hover:bg-secondary/80 text-foreground"
                      }`}
                    >
                      {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                      className={`p-4 rounded-full transition-all duration-200 ${
                        isSpeakerOn
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary hover:bg-secondary/80 text-foreground"
                      }`}
                    >
                      {isSpeakerOn ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-4">
                {!isCallActive && !isConnecting && (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDelete}
                    className="p-4 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-200"
                  >
                    <Delete className="h-6 w-6" />
                  </motion.button>
                )}

                {isCallActive ? (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleEndCall}
                    className="p-6 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50"
                  >
                    <PhoneOff className="h-8 w-8" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCall}
                    disabled={phoneNumber.length < 10 || isConnecting}
                    className="p-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 glow hover:glow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                  >
                    <Phone className="h-8 w-8" />
                  </motion.button>
                )}
              </div>

              {/* Rate Info */}
              <p className="text-center text-xs text-muted-foreground mt-6">
                Rate: $0.05/min (US) | $0.15/min (International)
              </p>
            </motion.div>
          )}

          {/* Security Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span>End-to-end encrypted | No call logs stored</span>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
