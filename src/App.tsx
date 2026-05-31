import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, CalendarRange } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import ArtistLineup from './components/ArtistLineup';
import Timeline from './components/Timeline';
import PosterEvolution from './components/PosterEvolution';
import MarketingSponsors from './components/MarketingSponsors';
import MediaGallery from './components/MediaGallery';
import Contact from './components/Contact';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  // Track scroll position to update active header indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const sections = [
        { id: 'hero-section', name: 'home' },
        { id: 'line-up', name: 'performers' },
        { id: 'poster-evolution', name: 'visuals' },
        { id: 'gallery', name: 'gallery' },
        { id: 'about', name: 'ideology' },
        { id: 'metrics', name: 'metrics' },
        { id: 'marketing-and-sponsors', name: 'marketing' },
        { id: 'timeline', name: 'timeline' }
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on section positioning
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSegment(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: '项目首页', section: 'hero-section', segment: 'home' },
    { label: '演出阵容', section: 'line-up', segment: 'performers' },
    { label: '宣传视觉', section: 'poster-evolution', segment: 'visuals' },
    { label: '现场纪实', section: 'gallery', segment: 'gallery' },
    { label: '核心内核', section: 'about', segment: 'ideology' },
    { label: '数字成果', section: 'metrics', segment: 'metrics' },
    { label: '营销赞助', section: 'marketing-and-sponsors', segment: 'marketing' },
    { label: '推进时间轴', section: 'timeline', segment: 'timeline' }
  ];

  return (
    <div className="relative min-h-screen bg-pure-black text-[#f4f4f5] font-sans antialiased selection:bg-neon-pink selection:text-white">
      
      {/* 1. Global Animated Film Grain Overlay (The requested documentary aesthetic) */}
      <div className="film-grain" />

      {/* 2. Global Sticky Header with custom Glass-filter blur */}
      <header className="fixed top-0 left-0 w-full z-40 bg-pure-black/85 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          
          {/* Logo element with neon spotlight detail */}
          <button 
            onClick={() => navigateToSection('hero-section')}
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <div className="w-8 h-8 rounded-none border-2 border-neon-pink group-hover:border-white transition-colors flex items-center justify-center font-mono text-sm font-black text-white bg-black">
              R
            </div>
            <div>
              <span className="text-xs font-mono font-black text-white hover:text-neon-pink transition-colors tracking-tight flex items-center gap-1 leading-none uppercase">
                HEAR HER ROAR
              </span>
              <span className="text-[9px] font-mono text-neutral-500 font-normal select-none uppercase tracking-widest block mt-0.5">
                GRAD_PORTFOLIO 2025
              </span>
            </div>
          </button>

          {/* Desktop editorial navigation bar with accent line margins */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isAccent = activeSegment === link.segment;
              return (
                <button
                  key={link.segment}
                  onClick={() => navigateToSection(link.section)}
                  className={`px-3 py-1.5 uppercase transition-all relative cursor-pointer tracking-wider ${
                    isAccent ? 'text-neon-pink font-bold border-b border-neon-pink' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Hire status banner button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigateToSection('contact')}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-neon-pink/10 border border-neon-pink/30 hover:border-neon-pink hover:bg-neon-pink text-neon-pink hover:text-white rounded-none font-mono text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer"
            >
              直接建立对话 / Contact
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburguer selector */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* 3. Mobile Expandable Menu Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 bg-pure-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 border-t border-grit-gray lg:hidden animate-fade-in text-left">
          <nav className="flex flex-col gap-4 text-lg font-bold uppercase tracking-tight text-left">
            {navLinks.map((link) => (
              <button
                key={link.segment}
                onClick={() => navigateToSection(link.section)}
                className={`text-left transition-colors flex justify-between items-center py-2 border-b border-dashed border-white/5 cursor-pointer ${
                  activeSegment === link.segment ? 'text-neon-pink font-black pl-2 border-l-2 border-l-neon-pink border-b-transparent' : 'text-neutral-400'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-neutral-600">[{link.segment.toUpperCase()}]</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-neutral-900 pt-8 mt-6 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <CalendarRange className="w-4 h-4 text-neon-pink" />
              <span>现场演绎：2025年6月4日（星期三）</span>
            </div>
            <button
              onClick={() => {
                navigateToSection('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 bg-neon-pink text-white font-mono text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              直接建立对话 / Contact
            </button>
          </div>
        </div>
      )}

      {/* 4. Sequential Portfolio Sheets Sections */}
      <main className="relative pt-4 text-left">
        <Hero onNavigateToSection={navigateToSection} />
        <ArtistLineup />
        <PosterEvolution />
        <MediaGallery />
        <About />
        <Metrics />
        <MarketingSponsors />
        <Timeline />
      </main>

      {/* 5. Minimalist sleed contact footer */}
      <Contact />

    </div>
  );
}
