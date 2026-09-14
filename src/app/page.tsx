import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Signal from "@/components/sections/Signal";
import Idea from "@/components/sections/Idea";
import SystemModules from "@/components/sections/SystemModules";
import Services from "@/components/sections/Services";
import Missions from "@/components/sections/Missions";
import Origin from "@/components/sections/Origin";
import Process from "@/components/sections/Process";
import EngineRoom from "@/components/sections/EngineRoom";
import Philosophy from "@/components/sections/Philosophy";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Signal />
        <Idea />
        <SystemModules />
        <Services />
        <Missions />
        <Origin />
        <Process />
        <EngineRoom />
        <Philosophy />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
