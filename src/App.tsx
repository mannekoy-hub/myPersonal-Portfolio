import { useEffect } from 'react';
import { Home } from './pages/home';
import { About } from './pages/about.';
import { Project } from './pages/projects';
import { Contact } from './pages/contact';
import { Header } from './header/header';
import './App.css'

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.motion-reveal');
    let previousScrollY = window.scrollY;
    let isScrollingDown = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isScrollingDown) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    );

    const revealVisibleElements = () => {
      if (!isScrollingDown) {
        return;
      }

      revealElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingDown = currentScrollY > previousScrollY;
      previousScrollY = currentScrollY;
      revealVisibleElements();
    };

    revealElements.forEach((element) => observer.observe(element));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
     <>
     <Header></Header>
     <section id='home'><Home/></section>
     <section id='about'><About/></section>
     <section id='projects'><Project/></section>
     <section id='contact'><Contact/></section>
     </>
  );
}

export default App
