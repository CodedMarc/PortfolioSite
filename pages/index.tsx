import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showKeyboardHint, setShowKeyboardHint] = useState(false);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.section-slide');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Show keyboard hint briefly on first load
    setTimeout(() => {
      setShowKeyboardHint(true);
      setTimeout(() => setShowKeyboardHint(false), 4000);
    }, 2000);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const sections = document.querySelectorAll('.section-slide');
      const totalSections = sections.length;
      
      // Find which section is currently in view
      let currentSectionIndex = 0;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionIndex = index;
        }
      });

      switch (e.key) {
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          const nextSection = Math.min(currentSectionIndex + 1, totalSections - 1);
          scrollToSection(nextSection);
          break;
        case 'ArrowUp':
          e.preventDefault();
          const prevSection = Math.max(currentSectionIndex - 1, 0);
          scrollToSection(prevSection);
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(totalSections - 1);
          break;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Update progress bar
  useEffect(() => {
    const progressBar = document.querySelector('.slides-container::before') as HTMLElement;
    if (progressBar) {
      progressBar.style.transform = `scaleX(${scrollProgress / 100})`;
    }
  }, [scrollProgress]);

  return (
    <div id='index'>
      <Navbar />
      <div className="slides-container" style={{ '--scroll-progress': `${scrollProgress}%` } as React.CSSProperties}>
        <div className="section-slide">
          <Hero />
        </div>
        <div className="section-slide">
          <Skills />
        </div>
        <div className="section-slide">
          <About />
        </div>
        <div className="section-slide">
          <Contact />
        </div>
      </div>
      
      {/* Keyboard navigation hint */}
      <div className={`keyboard-hint ${showKeyboardHint ? 'show' : ''}`}>
        <span>Navigate with <span className="key">↑</span><span className="key">↓</span> or <span className="key">Space</span></span>
      </div>
    </div>
  )
}

export default Home
