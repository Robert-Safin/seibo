import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="bg-theme-black min-h-screen">
      <Suspense fallback={<div className="text-white text-3xl">Loading...</div>}>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  );
}
