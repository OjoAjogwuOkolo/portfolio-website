import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Stats from '../components/stats';
import Projects from '../components/projects';
import Skills from '../components/skills';
import About from '../components/about';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-amber-500 selection:text-zinc-950">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}