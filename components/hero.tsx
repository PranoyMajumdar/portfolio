"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { cn } from "@/lib/utils";
import {
  availableForWork,
  heroDescription,
  heroSubtitle,
  heroTitle,
  resumeLink,
  scheduleMeetingLink,
  socialLinks,
} from "@/constants/hero";
import { LucideCalendar, LucideFileText } from "lucide-react";
export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-muted/50 backdrop-blur-sm border border-border/50 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                {availableForWork
                  ? "Available for work"
                  : "Not available for work"}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-primary">{heroTitle}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold">
              {heroSubtitle}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href={scheduleMeetingLink}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <LucideCalendar className="mr-2 h-4 w-4" />
              Schedule a meeting
            </Link>
            <Link
              href={resumeLink}
              className={cn(buttonVariants({ variant: "glow", size: "lg" }))}
            >
              <LucideFileText className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex gap-6 items-center"
          >
            {socialLinks.map((social, i) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5 + i * 0.1,
                }}
              >
                <Link
                  href={social.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
