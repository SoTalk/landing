"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Shield,
  Wallet,
  Zap,
  Users,
  Lock,
  MessageSquare,
  Send,
  Sparkles,
  ChevronRight,
  Check,
  ArrowRight,
  Globe2,
  Fingerprint,
  Coins,
  Eye,
  Key,
  Layers,
} from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 50;
        const y = (e.clientY - rect.top - rect.height / 2) / 50;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative bg-black text-white antialiased overflow-x-hidden">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-2xl shadow-2xl shadow-cobalt/10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="sotalk logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-bold">sotalk</span>
            </div>
            <div className="hidden items-center gap-6 text-sm md:flex">
              <a
                href="#features"
                className="text-grey-300 transition-colors hover:text-white"
              >
                Features
              </a>
              <a
                href="#security"
                className="text-grey-300 transition-colors hover:text-white"
              >
                Security
              </a>
              <a
                href="#token"
                className="text-grey-300 transition-colors hover:text-white"
              >
                Token
              </a>
              <a
                href="#technology"
                className="text-grey-300 transition-colors hover:text-white"
              >
                Technology
              </a>
            </div>
            <button className="rounded-full bg-gradient-to-r from-cobalt to-laser px-6 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-cobalt/50">
              Download App
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Revolutionary Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pb-32"
      >
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <DottedGlowBackground
            className="absolute inset-0"
            gap={30}
            radius={1}
            color="rgba(255, 255, 255, 0.06)"
            glowColor="rgba(58, 26, 255, 0.9)"
            darkGlowColor="rgba(69, 250, 163, 0.7)"
            opacity={0.4}
            speedMin={0.1}
            speedMax={0.5}
          />

          {/* Morphing Gradient Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-cobalt/30 to-purple-500/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-laser/30 to-green-500/30 blur-3xl"
          />
        </div>

        <div className="container relative mx-auto px-6 max-w-7xl">
          {/* Hero Content - Diagonal Split Design */}
          <div className="relative grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left: Content with 3D Perspective */}
            <motion.div
              style={{
                rotateY: useTransform(smoothMouseX, [-20, 20], [-2, 2]),
                rotateX: useTransform(smoothMouseY, [-20, 20], [2, -2]),
              }}
              className="flex flex-col justify-center perspective-1000"
            >
              {/* Badge with animated border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 inline-flex items-center"
              >
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cobalt via-purple-500 to-laser opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2 rounded-full border border-cobalt/30 bg-black px-5 py-2.5">
                    <Users className="h-4 w-4 text-laser" />
                    <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-laser to-cobalt bg-clip-text text-transparent">
                      Community-Owned DAO
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Headline with Staggered Animation */}
              <div className="mb-8 overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-4 text-6xl font-bold leading-[1.05] tracking-tight lg:text-8xl"
                >
                  <span className="block">The First</span>
                  <span className="relative inline-block">
                    <motion.span
                      initial={{ backgroundPosition: "0% 50%" }}
                      animate={{ backgroundPosition: "100% 50%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="bg-gradient-to-r from-cobalt via-purple-500 via-laser to-cobalt bg-[length:200%_auto] bg-clip-text text-transparent"
                      style={{ backgroundSize: "200% auto" }}
                    >
                      DAO-Owned
                    </motion.span>
                    {/* Animated Underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cobalt via-purple-500 to-laser blur-sm"
                    />
                  </span>
                  <span className="block">Messenger</span>
                </motion.h1>
              </div>

              {/* Description with fade-in */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-10 max-w-xl text-lg leading-relaxed text-grey-400 lg:text-xl"
              >
                <span className="block mb-3">
                  <span className="bg-gradient-to-r from-laser to-green-400 bg-clip-text text-transparent font-bold">
                    Owned by users, not corporations.
                  </span>{" "}
                  Community-governed messaging platform powered by STK token holders.
                </span>
                End-to-end encrypted, token-gated rooms, instant SOL transfers.
                Decentralized infrastructure ensures censorship resistance.
                <span className="block mt-3 bg-gradient-to-r from-cobalt to-purple-400 bg-clip-text text-transparent font-semibold">
                  ✓ Free forever • ✓ No phone numbers • ✓ DAO governed
                </span>
              </motion.p>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button className="group flex h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 text-base font-semibold backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:scale-105">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-base font-bold -mt-1">App Store</div>
                  </div>
                </button>

                <button className="group flex h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 text-base font-semibold backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:scale-105">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-base font-bold -mt-1">Google Play</div>
                  </div>
                </button>
              </motion.div>

              {/* Animated Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-16"
              >
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { value: "100%", label: "DAO Owned", color: "laser" },
                    { value: "25K+", label: "STK Holders", color: "cobalt" },
                    { value: "$0", label: "Forever", color: "purple" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group cursor-default"
                    >
                      <div className="relative">
                        <div
                          className={`absolute -inset-1 rounded-lg bg-gradient-to-r from-${stat.color}/20 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100`}
                        />
                        <div className="relative">
                          <div className="mb-1 text-3xl font-bold lg:text-4xl">
                            {stat.value}
                          </div>
                          <div className="text-xs font-medium uppercase tracking-wider text-grey-400">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Messaging App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex items-center justify-center lg:scale-110"
            >
              <div className="relative w-full max-w-md">
                {/* Connection Lines */}
                <svg
                  className="absolute inset-0 -z-10 h-full w-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    x1="10%"
                    y1="20%"
                    x2="50%"
                    y2="30%"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.7 }}
                    x1="90%"
                    y1="40%"
                    x2="60%"
                    y2="50%"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.9 }}
                    x1="90%"
                    y1="70%"
                    x2="60%"
                    y2="65%"
                    stroke="url(#gradient3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#45FAA3" stopOpacity="0" />
                      <stop offset="100%" stopColor="#45FAA3" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3a1aff" stopOpacity="0" />
                      <stop offset="100%" stopColor="#3a1aff" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient
                      id="gradient3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#45FAA3" stopOpacity="0" />
                      <stop offset="100%" stopColor="#45FAA3" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Wallet Card - Top Left */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -left-20 top-8 z-10 hidden lg:block"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-grey-100/95 to-black/95 p-5 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-laser/20 to-green-500/10">
                        <Wallet className="h-5 w-5 text-laser" />
                      </div>
                      <span className="text-xs font-bold text-laser">
                        CONNECTED
                      </span>
                    </div>
                    <div className="mb-2 text-2xl font-bold">12.5 SOL</div>
                    <div className="mb-3 text-xs text-grey-400">
                      $2,475.00 USD
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 rounded-lg bg-white/5 px-2 py-1.5">
                        <div className="font-mono text-xs text-grey-300">
                          7xKF...p2Jm
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-laser/10"
                      >
                        <Zap className="h-4 w-4 text-laser" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Activity Card - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -right-20 bottom-24 z-10 hidden lg:block"
                >
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-56 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-grey-100/95 to-black/95 p-5 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-bold">Recent Activity</span>
                      <div className="flex h-2 w-2 animate-pulse rounded-full bg-laser" />
                    </div>
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                          <Users className="h-4 w-4 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium">NFT Group</div>
                          <div className="text-xs text-grey-400">Joined</div>
                        </div>
                        <div className="text-xs text-grey-400">2m</div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-laser/10">
                          <Coins className="h-4 w-4 text-laser" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium">
                            Received 2 SOL
                          </div>
                          <div className="text-xs text-grey-400">
                            From alice.sol
                          </div>
                        </div>
                        <Check className="h-4 w-4 text-laser" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Token-Gate Card - Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -right-16 top-32 z-10 hidden lg:block"
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-48 overflow-hidden rounded-2xl border border-cobalt/30 bg-gradient-to-br from-grey-100/95 to-black/95 p-4 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cobalt/20 to-purple-500/10">
                        <Shield className="h-4 w-4 text-cobalt" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold">VIP Access</div>
                        <div className="text-xs text-grey-400">Token Gated</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-cobalt/10 to-purple-500/5 p-3">
                      <div className="mb-2 text-xs font-medium text-cobalt">
                        Required Holdings
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-grey-300">DeGods NFT</span>
                        <Check className="h-3 w-3 text-laser" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Main Chat Interface */}
                <div className="relative z-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-grey-100 to-black shadow-2xl">
                  {/* Chat Header */}
                  <div className="border-b border-white/10 bg-black/50 px-6 py-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cobalt to-purple-500" />
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-laser" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">alice.sol</div>
                          <div className="flex items-center gap-1 text-xs text-grey-400">
                            <div className="h-1.5 w-1.5 rounded-full bg-laser" />
                            Online
                          </div>
                        </div>
                      </div>
                      <Shield className="h-5 w-5 text-laser" />
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4 p-6">
                    {/* Received Message */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="flex gap-3"
                    >
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-br from-cobalt to-purple-500" />
                      <div className="max-w-[70%]">
                        <div className="rounded-2xl rounded-tl-sm bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur-sm">
                          <p className="text-sm">
                            Hey! Ready to check out that new NFT collection?
                          </p>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-grey-400">
                          <span>2:30 PM</span>
                          <Lock className="h-3 w-3" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Sent Message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                      className="flex flex-row-reverse gap-3"
                    >
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-br from-laser to-green-500" />
                      <div className="max-w-[70%]">
                        <div className="rounded-2xl rounded-tr-sm bg-gradient-to-br from-cobalt/30 to-purple-500/20 p-4 backdrop-blur-sm">
                          <p className="text-sm">
                            Absolutely! Let me send you the SOL now 💰
                          </p>
                        </div>
                        <div className="mt-1 flex items-center justify-end gap-2 text-xs text-grey-400">
                          <Check className="h-3 w-3 text-laser" />
                          <span>2:31 PM</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Payment Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                      className="mx-auto"
                    >
                      <div className="overflow-hidden rounded-2xl border border-laser/30 bg-gradient-to-br from-laser/10 to-green-500/5 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-laser/20">
                              <Coins className="h-4 w-4 text-laser" />
                            </div>
                            <span className="text-xs font-bold text-laser">
                              PAYMENT SENT
                            </span>
                          </div>
                          <Check className="h-4 w-4 text-laser" />
                        </div>
                        <div className="mb-2 text-2xl font-bold">2.00 SOL</div>
                        <div className="text-xs text-grey-400">
                          Confirmed in 0.4s
                        </div>
                        <div className="mt-2 flex items-center gap-2 rounded-lg bg-black/30 px-2 py-1">
                          <div className="h-1 w-1 rounded-full bg-laser animate-pulse" />
                          <span className="font-mono text-xs text-grey-300">
                            5Gy7w...kY2p
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Typing Indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className="flex gap-3"
                    >
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-br from-cobalt to-purple-500" />
                      <div className="flex items-center gap-1 rounded-2xl bg-white/5 px-4 py-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="h-2 w-2 rounded-full bg-grey-400"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="h-2 w-2 rounded-full bg-grey-400"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="h-2 w-2 rounded-full bg-grey-400"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-white/10 bg-black/50 px-6 py-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 rounded-xl bg-white/5 px-4 py-3">
                        <div className="text-sm text-grey-400">
                          Type a message...
                        </div>
                      </div>
                      <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt to-laser">
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Security Badge - Mobile Visible */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute -bottom-6 left-1/2 z-30 -translate-x-1/2 lg:left-auto lg:right-8 lg:top-6 lg:translate-x-0"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-2xl border border-laser/30 bg-black/90 px-5 py-3 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Lock className="h-4 w-4 text-laser" />
                      </motion.div>
                      <span className="text-xs font-bold text-laser">
                        E2E Encrypted
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Ambient Glow */}
                <div className="absolute inset-0 -z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-cobalt/30 via-purple-500/20 to-laser/30 blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-tl from-laser/30 via-green-500/20 to-cobalt/30 blur-3xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-grey-400">
              Scroll to explore
            </div>
            <div className="relative h-8 w-5 rounded-full border-2 border-grey-400/50">
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-1/2 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-cobalt to-laser"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Security First - Enhanced Design */}
      <section
        id="security"
        className="relative border-t border-white/5 py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-laser/5 to-transparent" />

        <div className="container relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-laser/30 bg-laser/10">
              <Shield className="h-7 w-7 text-laser" />
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-laser to-green-400 bg-clip-text text-transparent">
                Security
              </span>{" "}
              first, always.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-grey-400">
              Battle-tested encryption using Signal Protocol with Double Ratchet.
              Client-side key derivation ensures zero-knowledge privacy.
              Your DAO conversations stay truly private.
            </p>
          </motion.div>

          {/* Enhanced Security Grid with Glowing Effect */}
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <SecurityGridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Lock className="h-5 w-5 text-laser" />}
              title="Signal Protocol / Double Ratchet"
              description="Industry-standard E2EE using Signal Protocol. Perfect Forward Secrecy ensures past messages stay secure even if keys are compromised."
            />

            <SecurityGridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Key className="h-5 w-5 text-cobalt" />}
              title="Ed25519 → X25519 Conversion"
              description="Client-side key derivation from your Solana wallet. Your private keys never leave your device."
            />

            <SecurityGridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Eye className="h-5 w-5 text-purple-400" />}
              title="Zero-Knowledge Architecture"
              description="No servers can read your messages or metadata. Token-gated access is verified on-chain without exposing conversation data."
            />

            <SecurityGridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Fingerprint className="h-5 w-5 text-laser" />}
              title="On-Chain Identity Verification"
              description="Wallet signatures prove membership without centralized databases. NFT/token holdings verified directly from Solana."
            />

            <SecurityGridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Globe2 className="h-5 w-5 text-cobalt" />}
              title="Open Source & Audited"
              description="Fully open source and audited by leading security firms. Trust through transparency."
            />
          </ul>

          {/* Enhanced Security Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {[
              { label: "256-bit AES Encryption", icon: Lock, color: "laser" },
              { label: "Security Audited", icon: Shield, color: "cobalt" },
              { label: "100% Private", icon: Eye, color: "purple-400" },
              {
                label: "GDPR Compliant",
                icon: Globe2,
                color: "laser",
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-laser/20 to-cobalt/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-sm">
                  <badge.icon className={`h-4 w-4 text-${badge.color}`} />
                  <span className="text-sm font-medium text-grey-300">
                    {badge.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section - Compact */}
      <section
        id="features"
        className="relative border-t border-white/5 py-16 px-6"
      >
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-laser to-green-400 bg-clip-text text-transparent">
                Community-Governed
              </span>{" "}
              Platform
            </h2>
            <p className="mx-auto max-w-xl text-base text-grey-400">
              STK token holders control the future of SoTalk through decentralized governance
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "DAO Governance",
                description: "Token holders vote on all platform decisions",
                color: "from-laser/20 to-green-500/10",
              },
              {
                icon: Shield,
                title: "Token-Gated Access",
                description: "NFT/SPL token verification for exclusive rooms",
                color: "from-cobalt/20 to-purple-500/10",
              },
              {
                icon: Coins,
                title: "Free Forever",
                description: "Token inflation pays infrastructure costs",
                color: "from-purple-500/20 to-pink-500/10",
              },
              {
                icon: Lock,
                title: "Censorship Resistant",
                description: "Distributed nodes, no single point of control",
                color: "from-cobalt/20 to-laser/10",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-grey-100/50 to-black p-5 transition-all hover:border-white/20"
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.color}`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                <p className="text-sm text-grey-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Section - Compact */}
      <section
        id="token"
        className="relative border-t border-white/5 py-16 px-6"
      >
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-laser/30 bg-laser/10">
              <Coins className="h-6 w-6 text-laser" />
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
              Ownership,{" "}
              <span className="bg-gradient-to-r from-laser to-green-400 bg-clip-text text-transparent">
                Not Just Usage
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-grey-400">
              STK token holders govern the entire platform. Every major decision goes through community voting.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {[
              {
                icon: Users,
                title: "Vote on Everything",
                description: "Node operators, fees, features, treasury",
              },
              {
                icon: Coins,
                title: "Node Operator Rewards",
                description: "Run infrastructure, earn STK tokens",
              },
              {
                icon: Zap,
                title: "Staking Benefits",
                description: "Unlock premium features, governance power",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-grey-100/50 to-black p-5 transition-all hover:border-laser/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-laser/10">
                  <item.icon className="h-5 w-5 text-laser" />
                </div>
                <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                <p className="text-sm text-grey-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { label: "Total Supply", value: "1B" },
              { label: "Market Cap", value: "$50M" },
              { label: "Holders", value: "25K+" },
              { label: "Exchanges", value: "5+" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="mb-1 text-2xl font-bold bg-gradient-to-r from-laser to-green-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-grey-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section - Compact */}
      <section
        id="technology"
        className="relative border-t border-white/5 py-16 px-6"
      >
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10">
              <Globe2 className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Decentralized
              </span>{" "}
              Infrastructure
            </h2>
            <p className="mx-auto max-w-xl text-base text-grey-400">
              Distributed node operators ensure no single point of control. Powered by Solana.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Block Time", value: "400ms", desc: "Lightning fast" },
              { label: "Throughput", value: "65K TPS", desc: "Massive scale" },
              { label: "Avg Fee", value: "$0.00025", desc: "Near-zero cost" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-grey-100/50 to-black p-5 transition-all hover:border-purple-400/30"
              >
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-grey-400">
                  {stat.label}
                </div>
                <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-grey-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Compact */}
      <section className="relative border-t border-white/5 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cobalt/5 to-laser/5 p-12 text-center"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt to-laser">
              <MessageSquare className="h-7 w-7" />
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="bg-gradient-to-r from-laser to-cobalt bg-clip-text text-transparent">
                Owned by the Community.
              </span>
              <br />
              Built for the Future.
            </h2>

            <p className="mx-auto mb-8 max-w-lg text-base text-grey-400">
              The first messaging platform governed by token holders. Free forever, censorship-resistant,
              and built on Solana. No corporations. No central control. Just pure community power.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-cobalt to-laser px-8 text-sm font-bold transition-all hover:scale-105">
                <Send className="h-4 w-4" />
                Launch sotalk
              </button>
              <button className="flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-bold transition-all hover:bg-white/10">
                View on GitHub
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="sotalk logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-bold">sotalk</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-grey-400">
              <a
                href="#security"
                className="transition-colors hover:text-white"
              >
                Security
              </a>
              <a
                href="#features"
                className="transition-colors hover:text-white"
              >
                Features
              </a>
              <a href="#token" className="transition-colors hover:text-white">
                Token
              </a>
              <a
                href="#technology"
                className="transition-colors hover:text-white"
              >
                Technology
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Docs
              </a>
              <a href="#" className="transition-colors hover:text-white">
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6 text-center">
            <p className="text-xs text-grey-400">
              © 2024 sotalk. The first community-owned messaging DAO.
              <span className="block mt-1">
                Governed by STK token holders. Built on Solana.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface SecurityGridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityGridItem = ({
  area,
  icon,
  title,
  description,
}: SecurityGridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-grey-100/50 to-black p-6 backdrop-blur-sm transition-all hover:border-laser/20 md:p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-laser/20 bg-laser/10 p-3">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-grey-400 md:text-base/[1.375rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
