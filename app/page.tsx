"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, ArrowRight, Activity, Code2, Rocket, CheckCircle2 } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Handle the loading screen timer (1.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      title: "Web Development",
      description: "Blazing fast, SEO-optimized web applications. We build resilient Web2 platforms that handle massive scale from day one.",
      link: "#web-development"
    },
    {
      title: "Python Backtesting & Algo Trading",
      description: "Institutional-grade backtesting architecture for the stock market. We automate your trading strategies to focus on generating alpha.",
      link: "#algo-trading"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile experiences that feel native. High engagement, smooth performance, and zero compromise.",
      link: "#mobile-development"
    },
    {
      title: "Low-Level Systems (Rust)",
      description: "Memory-safe, high-performance backend systems. When milliseconds matter, we engineer solutions close to the metal.",
      link: "#rust-systems"
    },
    {
      title: "AI Agents & Automation",
      description: "Automate complex workflows. We deploy intelligent agents that handle support, data pipelines, and internal operations.",
      link: "#ai-automation"
    },
    {
      title: "Solana Development",
      description: "High-throughput, low-fee Web3 infrastructure. Smart contracts and full dApps engineered for the decentralized future.",
      link: "#solana-development"
    }
  ];

  const techStack = [
    "Next.js", "Python", "Rust", "Solana", "TypeScript", "React", "Node.js", "MERN Stack", "Docker", "AWS", "PostgreSQL"
  ];

  const faqs = [
    {
      q: "Do you work with early-stage startups?",
      a: "Yes. We act as the elite engineering wing for founders who have the vision but need technical execution to get to market and scale fast."
    },
    {
      q: "Who owns the code and IP?",
      a: "You do. 100%. Upon final delivery and payment, all intellectual property, source code, and infrastructure is transferred entirely to your company."
    },
    {
      q: "How do you handle pricing?",
      a: "We offer both milestone-based project pricing for clear scopes, and monthly retainer models if you need ongoing, dedicated engineering bandwidth."
    },
    {
      q: "How fast can we start?",
      a: "Once we map your architecture and agree on the scope, our team can typically spin up infrastructure and begin shipping code within 48 to 72 hours."
    }
  ];

  return (
    <>
      {/* Premium Loading Screen Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-50 dark:bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white"
            >
              epocH<span className="text-neutral-400 dark:text-neutral-600">.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-600 dark:text-neutral-300 selection:bg-black/10 dark:selection:bg-white/20 overflow-hidden font-sans transition-colors duration-300">
        
        {/* Sleek Floating Animated Navbar */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 1.2 : 0 }}
          className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50 rounded-full border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-md px-6 py-3 flex items-center gap-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          {/* Logo Button - Clicks to top smoothly */}
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold text-neutral-900 dark:text-white tracking-tighter hover:opacity-70 transition-opacity focus:outline-none"
          >
            epocH<span className="text-neutral-400 dark:text-neutral-500">.</span>
          </button>
          
          <div className="flex gap-4 sm:gap-6 items-center border-l border-neutral-200 dark:border-white/10 pl-4 sm:pl-6">
            <Link href="#process" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors hidden md:block">
              Process
            </Link>
            <Link href="#services" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors hidden sm:block">
              Arsenal
            </Link>
            <Link 
              href="https://wa.me/919356274667" 
              target="_blank" 
              className="text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Get an Audit
            </Link>
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/20 transition-all shrink-0"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 block dark:hidden" />
            </button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-50 dark:bg-black px-4 transition-colors duration-300">
          <div className="absolute inset-0 opacity-80 dark:opacity-100 mix-blend-multiply dark:mix-blend-normal pointer-events-auto">
            <BackgroundRippleEffect />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isLoading ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            className="relative z-10 flex flex-col items-center mt-20 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-widest backdrop-blur-sm shadow-sm">
              General Software Engineering & Architecture
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-neutral-900 dark:text-white text-center max-w-5xl leading-[1.1]">
              You scale the business. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-800 dark:from-neutral-200 dark:to-neutral-600">
                We build the engine.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl text-center mt-6 mb-10 font-light leading-relaxed">
              epocH is a specialized technical agency. Whether you need high-scale Web2 infrastructure, automated Python trading pipelines, or systems built close to the metal, we ship production-ready code.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pointer-events-auto">
              <Link 
                href="https://wa.me/919356274667" 
                className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-105 w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-lg dark:shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] group"
              >
                Book a Free Tech Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full bg-white/50 dark:bg-transparent border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-white/5 transition-all w-full sm:w-auto text-center backdrop-blur-md"
              >
                See how we work
              </button>
            </div>
          </motion.div>
        </section>

        {/* Infinite Tech Stack Marquee */}
        <section className="relative z-10 py-10 border-y border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex flex-none gap-12 pr-12"
          >
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="text-xl md:text-2xl font-bold text-neutral-400 dark:text-neutral-600 tracking-tight">
                {tech}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Trust & Metrics Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="py-12 px-6 border-b border-neutral-200 dark:border-white/5 bg-neutral-100/50 dark:bg-neutral-900/20"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">100%</h4>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">IP Ownership</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-neutral-300 dark:bg-white/10"></div>
            <div>
              <h4 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">0 to MVP</h4>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">In Record Time</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-neutral-300 dark:bg-white/10"></div>
            <div>
              <h4 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">Direct</h4>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Engineer Access</p>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <section id="process" className="py-32 px-6 max-w-7xl mx-auto relative z-10 border-b border-neutral-200 dark:border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">How We Operate</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light text-lg max-w-2xl mx-auto">
              We don&apos;t do endless discovery phases. We audit, we plan, and we execute.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-neutral-200 dark:bg-white/10"></div>
            
            {[
              { icon: <Activity className="w-6 h-6 text-neutral-900 dark:text-white" />, title: "01. Architecture Audit", desc: "We get on a call, dissect your business goals, and identify the exact technical stack and database schema needed to scale without tech debt." },
              { icon: <Code2 className="w-6 h-6 text-neutral-900 dark:text-white" />, title: "02. The Blueprint", desc: "We provide a clear, phased roadmap. Whether it's setting up an automated Python backtesting rig or building a MERN SaaS, you know exactly what happens when." },
              { icon: <Rocket className="w-6 h-6 text-white dark:text-black" />, title: "03. Ruthless Execution", desc: "We act as your internal heavy-hitters. We write the code, set up the CI/CD pipelines, and deploy the infrastructure while you focus on selling the product.", isSolid: true }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative pt-8 text-center md:text-left z-10"
              >
                <div className={`w-16 h-16 mx-auto md:mx-0 rounded-full flex items-center justify-center mb-6 shadow-sm border-2 
                  ${step.isSolid ? 'bg-neutral-900 dark:bg-white border-neutral-900 dark:border-white' : 'bg-white dark:bg-black border-neutral-200 dark:border-white/10'}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy / Code execution section */}
        <section id="philosophy" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">
                You focus on the product.<br />We handle the complexity.
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                We don&apos;t just write code; we architect systems. We know that as a startup, your runway is limited and speed is your only moat. 
              </p>
              <ul className="space-y-4 mb-8">
                {['Zero BS execution', 'Scalable architecture from Day 1', 'Direct communication with engineers'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-neutral-900 dark:text-white" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="https://wa.me/919356274667" 
                className="inline-flex items-center gap-2 font-bold text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
              >
                Stop wrestling with tech. Let&apos;s talk <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-sm dark:shadow-none"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-100 dark:bg-white/5 blur-[100px] rounded-full"></div>
               <pre className="text-sm text-neutral-600 dark:text-neutral-400 overflow-x-auto font-mono relative z-10">
                 <code>
{`// epocH Execution Model

async function scaleStartup(idea) {
  try {
    const architecture = await Epoch.design(idea);
    const mwp = await Epoch.buildFast(architecture);
    
    return mwp.deploy({
      scale: "infinite",
      bugs: 0,
      techDebt: "managed"
    });
  } catch (competitors) {
    return "Outpaced.";
  }
}`}
                 </code>
               </pre>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-neutral-200 dark:border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">Our Arsenal</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light text-lg max-w-2xl mx-auto">
              We are generalists who master the hard stuff. Full-stack, algorithmic pipelines, and everything in between.
            </p>
          </motion.div>
          <HoverEffect items={services} className="max-w-6xl mx-auto" />
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 max-w-4xl mx-auto relative z-10 border-t border-neutral-200 dark:border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">Common Questions</h2>
          </motion.div>
          <div className="grid gap-8">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02]"
              >
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Heavy Bottom CTA */}
        <section className="py-32 px-6 relative z-10 overflow-hidden border-t border-neutral-200 dark:border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(0,0,0,0.02)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center relative z-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white tracking-tighter mb-8">
              Ready to build?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 font-light max-w-2xl mx-auto">
              Skip the agency fluff. Let&apos;s get on a call, look at your architecture, and figure out how to build it better and faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="https://wa.me/919356274667" 
                className="px-10 py-5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-105 shadow-xl dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-2 group"
              >
                Claim your Free Tech Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-neutral-200 dark:border-white/10 flex flex-col items-center justify-center text-neutral-500 dark:text-neutral-600 text-sm gap-4">
          <span className="text-2xl font-bold text-neutral-300 dark:text-white tracking-tighter dark:opacity-50">epocH.</span>
          <p>© {new Date().getFullYear()} epocH Agency. Engineered for scale.</p>
        </footer>
      </main>
    </>
  );
}