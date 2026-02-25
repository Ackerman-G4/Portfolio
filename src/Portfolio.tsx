import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LearningGrowth from './components/LearningGrowth';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const Portfolio = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-enter page-bg text-gray-900 dark:text-gray-100 selection:bg-[#D4AF37]/20 selection:text-[#006039] dark:selection:text-emerald-400 transition-colors duration-500">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-60">
        <div ref={progressRef} className="scroll-progress" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Projects />
      <Experience />
      <LearningGrowth />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Portfolio;
