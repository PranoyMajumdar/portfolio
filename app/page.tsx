'use client';

import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
