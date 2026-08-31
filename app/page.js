import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-ink text-paper">
      <Nav />
      <Hero />
      <FeaturedProjects />
      <About />
      <Capabilities />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
