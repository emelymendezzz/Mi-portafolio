import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <Projects />
      <Reviews />
      <Contact />
    </main>
  );
}