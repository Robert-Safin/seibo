import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="bg-theme-black min-h-screen">
      <Hero/>
      <Services/>
      <Projects/>
    </main>
  );
}
