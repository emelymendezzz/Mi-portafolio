import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Skills from './components/Skills';
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </main>
  );
}