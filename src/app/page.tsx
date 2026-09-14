import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Technology from "@/components/sections/Technology";
import Stats from "@/components/sections/Stats";
import Philosophy from "@/components/sections/Philosophy";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Services />
        <Process />
        <WhyUs />
        <Projects />
        <Technology />
        <Stats />
        <Philosophy />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
