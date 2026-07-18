import { useState, useEffect } from 'react';
import ProjectSection from './components/ProjectSection'; 
import { HeroArtwork } from './components/HeroArtwork'; 

type SectionKey = 'profile' | 'project' | 'tech_stack' | 'contact';

// Metadata Dekripsi Elemen Kanan Bawah
const sectionMetadata: Record<SectionKey, { match: string; alias: string; directive: string; code: string }> = {
  profile: {
    match: "YOR_FORGER",
    alias: "THORN_PRINCESS",
    directive: "PROTECT_ANYA",
    code: "NO. 002-3848-CHYY"
  },
  project: {
    match: "LOID_FORGER",
    alias: "TWILIGHT",
    directive: "OPERATION_STRIX",
    code: "NO. 001-7110-CHYY"
  },
  tech_stack: {
    match: "ANYA_FORGER",
    alias: "SUBJECT_007",
    directive: "SECURE_PEANUTS",
    code: "NO. 007-9912-CHYY"
  },
  contact: {
    match: "FIONA_FROST",
    alias: "NIGHTFALL",
    directive: "SUPPORT_TWILIGHT",
    code: "NO. 009-4410-CHYY"
  }
};

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const characterImages: Record<SectionKey, string> = {
    profile: "https://k.top4top.io/p_38489zc9b1.png",    
    project: "https://l.top4top.io/p_3848jmh3w2.png",    
    tech_stack: "https://k.top4top.io/p_38488tk011.png", 
    contact: "https://k.top4top.io/p_38488qktm1.png"     
  };

  const cropStripLeft = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=300&auto=format&fit=crop"; 
  const cropStripRight = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop";

  const sectionKeys: SectionKey[] = ['profile', 'project', 'tech_stack', 'contact'];
  const navItems: Array<{ id: SectionKey; label: string }> = [
    { id: 'profile', label: 'PROFILE' },
    { id: 'project', label: 'PROJECT' },
    { id: 'tech_stack', label: 'TECH STACK' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (section: SectionKey) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    
    if (isScrolledDown) {
      const element = document.getElementById(section === 'profile' || section === 'tech_stack' ? 'hero-top' : section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="hero-top" className="relative min-h-screen bg-[#FFFFFF] text-[#111111] overflow-x-hidden select-none font-sans scroll-smooth flex flex-col justify-between">
      
      {/* Safe Custom Styles Injection via dangerouslySetInnerHTML */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-cyber { font-family: 'Orbitron', sans-serif; }
        .font-serif-brand { font-family: 'Cinzel', sans-serif; }
        .font-brush { font-family: 'Permanent Marker', cursive; }
        
        .text-glow-red {
          text-shadow: 0 0 1px rgba(255, 46, 22, 0.2);
        }

        .char-shadow-filter {
          filter: grayscale(100%) contrast(125%) brightness(95%) drop-shadow(0 8px 16px rgba(255, 46, 22, 0.55));
        }

        .char-mask-fade {
          -webkit-mask-image: linear-gradient(to bottom, black 65%, transparent 98%);
          mask-image: linear-gradient(to bottom, black 65%, transparent 98%);
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
        
      `}} />

      {/* ================= GFX DIAGONAL CORNER CUTS ================= */}
      <div 
        className={`fixed top-0 left-0 w-[30%] h-[60%] bg-[#111111] z-30 hidden lg:block transition-all duration-700 ease-in-out ${
          isScrolledDown ? '-translate-x-full -translate-y-full opacity-0' : 'translate-x-0 translate-y-0 opacity-100'
        }`} 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 45%)' }} 
      />
      <div 
        className={`fixed bottom-0 right-0 w-[18%] h-[22%] bg-[#111111] z-30 hidden lg:block transition-all duration-700 ease-in-out ${
          isScrolledDown ? 'translate-x-full translate-y-full opacity-0' : 'translate-x-0 translate-y-0 opacity-100'
        }`} 
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} 
      />

      {/* ================= GRID AXIS & SYSTEM LINES (REVISED & MULTIPLIED) ================= */}
      <div className={`fixed inset-0 pointer-events-none z-10 overflow-hidden transition-all duration-700 ${isScrolledDown ? 'opacity-10' : 'opacity-100'}`}>
        {/* Main Grid Lines */}
        <div className="w-full h-[1.2px] bg-stone-300/60 absolute top-[50%] left-0"></div>
        <div className="w-[1px] h-full bg-stone-200 absolute top-0 left-[10%] hidden lg:block"></div>
        <div className="w-[1px] h-full bg-stone-200 absolute top-0 right-[15%] hidden lg:block"></div>
        
        {/* Decorative Inner Grid Lines */}
        <div className="w-[1px] h-full bg-stone-100 absolute top-0 left-[30%] hidden lg:block"></div>
        <div className="w-[1px] h-full bg-stone-100 absolute top-0 right-[35%] hidden lg:block"></div>
        <div className="w-full h-[1px] bg-stone-100 absolute top-[25%] left-0 hidden lg:block"></div>
        <div className="w-full h-[1px] bg-stone-100 absolute bottom-[30%] left-0 hidden lg:block"></div>

        {/* Vertical Anchor Lines */}
        <div className="absolute top-[35%] left-[35%] w-[1px] h-10 bg-stone-400/40"></div>
        <div className="absolute top-[60%] right-[30%] w-[1px] h-12 bg-stone-400/40"></div>
        <div className="absolute bottom-[25%] left-[23%] w-[1px] h-16 bg-stone-400/40"></div>

        {/* Anchor Lines for added details */}
        <div className="absolute top-[18%] left-[62%] w-[1px] h-14 bg-stone-300/60 hidden lg:block"></div>
        <div className="absolute top-[45%] left-[18%] w-[1px] h-10 bg-stone-300/60 hidden lg:block"></div>
        <div className="absolute bottom-[35%] right-[22%] w-[1px] h-16 bg-stone-300/60 hidden lg:block"></div>
        <div className="absolute top-[28%] right-[42%] w-[1px] h-12 bg-stone-300/60 hidden lg:block"></div>

        {/* Red Pixel Art Blocks */}
        <div className="absolute w-4 h-4 bg-[#FF2E16] top-[32%] left-[33%] opacity-90 animate-pulse"></div>
        <div className="absolute w-2.5 h-2.5 bg-[#FF2E16] bottom-[37%] right-[31%] opacity-80"></div>
        <div className="absolute w-1.5 h-1.5 bg-[#FF2E16] bottom-[42%] left-[29%]"></div>
        <div className="absolute w-2.5 h-2.5 bg-[#FF2E16] top-[62%] left-[29%]"></div>

        <div className="absolute w-3.5 h-3.5 bg-[#FF2E16] top-[16%] left-[61.4%] opacity-85 hidden lg:block animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-[#FF2E16] top-[43.5%] left-[17.6%] opacity-70 hidden lg:block"></div>
        <div className="absolute w-3.5 h-3.5 bg-[#FF2E16] bottom-[33%] right-[21.6%] opacity-90 hidden lg:block animate-bounce [animation-duration:4s]"></div>
        <div className="absolute w-2.5 h-2.5 bg-[#FF2E16] top-[26.5%] right-[41.6%] opacity-80 hidden lg:block"></div>

        {/* ================== TOP-RIGHT SIGNAL MONITOR & WAVEFORM ================== */}
        <div className="absolute top-[18%] right-[8%] hidden lg:flex flex-col gap-2 p-3.5 border border-stone-200/50 bg-[#FFFFFF]/50 backdrop-blur-xs w-56 font-mono text-[9px] text-stone-500 shadow-xs">
          <div className="flex justify-between items-center border-b border-stone-200 pb-1.5">
            <span className="text-stone-800 font-bold tracking-wider">[ SIGNAL_MONITOR ]</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2E16] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2E16]"></span>
            </span>
          </div>
          {/* Animated Waveform Bars */}
          <div className="flex items-end justify-between h-9 px-1">
            <div className="w-[3px] bg-stone-900/60 h-3 animate-[pulse_1s_infinite]"></div>
            <div className="w-[3px] bg-[#FF2E16]/75 h-6 animate-[pulse_1.5s_infinite_0.1s]"></div>
            <div className="w-[3px] bg-stone-900/60 h-4 animate-[pulse_0.8s_infinite_0.3s]"></div>
            <div className="w-[3px] bg-stone-900/60 h-7 animate-[pulse_1.2s_infinite_0.2s]"></div>
            <div className="w-[3px] bg-[#FF2E16]/75 h-2 animate-[pulse_1.8s_infinite_0.4s]"></div>
            <div className="w-[3px] bg-stone-900/60 h-5 animate-[pulse_1.1s_infinite_0.5s]"></div>
            <div className="w-[3px] bg-stone-900/60 h-8 animate-[pulse_1.4s_infinite_0.1s]"></div>
            <div className="w-[3px] bg-[#FF2E16]/75 h-4 animate-[pulse_0.9s_infinite_0.2s]"></div>
          </div>
          <div className="flex justify-between text-[7.5px] text-stone-400 pt-1.5 border-t border-stone-100">
            <span>FREQ: 433.92 MHz</span>
            <span>SECURE LINK</span>
          </div>
        </div>

        {/* ================== BOTTOM-RIGHT DYNAMIC DECRYPTION KEY & BARCODE ================== */}
        <div className="absolute bottom-[24%] right-[8%] hidden lg:flex flex-col gap-2.5 p-3.5 border-l-2 border-[#FF2E16] bg-[#FFFFFF]/50 backdrop-blur-xs w-60 font-mono text-[9px] text-stone-500 shadow-xs">
          <div className="text-[10px] text-stone-900 font-bold tracking-widest">[ TARGET_DECRYPTION ]</div>
          <div className="space-y-1 text-stone-500">
            <p className="flex justify-between"><span>&gt; ID:</span> <span className="text-stone-800 font-bold">{sectionMetadata[activeSection].match}</span></p>
            <p className="flex justify-between"><span>&gt; ALIAS:</span> <span className="text-stone-800 font-bold">{sectionMetadata[activeSection].alias}</span></p>
            <p className="flex justify-between"><span>&gt; DIRECTIVE:</span> <span className="text-[#FF2E16] font-bold">{sectionMetadata[activeSection].directive}</span></p>
          </div>
          {/* Aesthetic Brutalist Barcode */}
          <div className="flex items-center gap-[2px] h-6 opacity-75 pt-1.5 border-t border-stone-100">
            <div className="w-[1px] h-full bg-[#111111]"></div>
            <div className="w-[3px] h-full bg-[#111111]"></div>
            <div className="w-[1px] h-full bg-[#111111]"></div>
            <div className="w-[1px] h-full bg-[#111111]"></div>
            <div className="w-[4px] h-full bg-[#FF2E16]"></div>
            <div className="w-[1px] h-full bg-[#111111]"></div>
            <div className="w-[2px] h-full bg-[#111111]"></div>
            <div className="w-[1px] h-full bg-[#111111]"></div>
            <div className="w-[3px] h-full bg-[#111111]"></div>
            <div className="w-[1px] h-full bg-[#FF2E16]"></div>
            <div className="w-[2px] h-full bg-[#111111]"></div>
          </div>
          <div className="text-[7.5px] text-stone-400 tracking-[0.15em] flex justify-between">
            <span>{sectionMetadata[activeSection].code}</span>
            <span>SYS_V2.6</span>
          </div>
        </div>

        {/* Technical HUD Labels */}
        <span className="absolute text-[8px] font-cyber text-stone-300/80 top-[14%] left-[11%] hidden lg:block tracking-widest">[GRID_01_SYS_NAV]</span>
        <span className="absolute text-[8px] font-cyber text-stone-300/80 bottom-[22%] right-[17%] hidden lg:block tracking-widest">[SECURE_NODE_CHYY]</span>
      </div>

      {/* ================= HEADER BRANDING BAR & DESKTOP NAV ================= */}
      <div className="fixed top-0 left-0 w-full z-40 p-4 lg:p-6 flex justify-between items-center pointer-events-none select-none">
        <div className="flex items-center gap-10 pointer-events-auto">
          <div className="text-[#111111] font-sans font-black text-[11px] sm:text-xs tracking-[0.35em] flex items-center gap-3 bg-white/60 px-3 py-1.5 backdrop-blur-xs border border-stone-100">
            <span>+</span> SPY×FAMILYxCHYY <span>+</span>
          </div>

          {/* ================= DESKTOP NAVIGATION BAR ================= */}
          <nav className="hidden lg:flex items-center gap-8 pl-10 text-[11px] font-cyber font-black tracking-[0.25em] backdrop-blur-xs">
            {navItems.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleMenuClick(sec.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-300 hover:text-[#FF2E16] ${
                  activeSection === sec.id ? 'text-[#FF2E16]' : 'text-[#111111]'
                }`}
              >
                {sec.label}
                {activeSection === sec.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FF2E16] animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-[11px] font-serif-brand tracking-[0.5em] text-[#111111] font-bold">
          <span>VENN</span> +
        </div>
      </div>

      {/* ================= RELOCATED MOBILE CHARACTER SELECTION ================= */}
      <div className={`fixed top-18 right-6 z-50 flex flex-col items-center gap-3 pointer-events-auto transition-all duration-700 block lg:hidden ${
        isScrolledDown ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'
      }`}>
        {sectionKeys.map((key) => {
          const isSelected = activeSection === key;
          return (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`w-10 h-13 border-2 bg-stone-50 overflow-hidden transition-all duration-300 ease-out relative group cursor-pointer ${
                isSelected 
                  ? 'border-[#FF2E16] scale-115 opacity-100 z-10 shadow-lg shadow-[#FF2E16]/35' 
                  : 'border-stone-300 scale-90 opacity-40 blur-[0.2px] hover:scale-95 hover:opacity-85 hover:border-stone-500'
              }`}
            >
              <img 
                src={characterImages[key]} 
                alt={`Thumb ${key}`} 
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#FF2E16]/15 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          );
        })}
      </div>

      {/* ================= MOBILE NAVIGATION TRIGGER ================= */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 bg-white border border-stone-200 p-3.5 rounded-sm shadow-xs flex flex-col gap-1.5 justify-center items-center lg:hidden group cursor-pointer"
        aria-label="Toggle Navigation"
      >
        <span className={`h-[1.5px] w-5 bg-[#111111] group-hover:bg-[#FF2E16] transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
        <span className={`h-[1.5px] w-5 bg-[#111111] group-hover:bg-[#FF2E16] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-[1.5px] w-5 bg-[#111111] group-hover:bg-[#FF2E16] transition-transform duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
      </button>

      {/* ================= MOBILE NAVIGATION OVERLAY ================= */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out lg:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center gap-8">
          {sectionKeys.map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)}
              className="group text-3xl sm:text-4xl font-cyber font-black tracking-widest text-stone-400 hover:text-[#111111] transition-colors duration-300 relative py-2 px-6 cursor-pointer"
            >
              {item.toUpperCase().replace('_', ' ')}
            </button>
          ))}
        </nav>
      </div>

      {/* ================= HERO STAGE ================= */}
      <div className="relative min-h-screen w-full flex flex-col justify-between flex-1">
        
        {/* Giant Brush Title Behind */}
        <div className={`absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden px-4 transition-all duration-1000 ease-in-out ${
          isScrolledDown ? '-translate-y-[35vh] opacity-0 scale-95' : 'translate-y-0 opacity-95 scale-100'
        }`}>
          <h1 className="font-assassin text-[8vw] tracking-[0.1em] text-[#C23B22] italic uppercase select-none drop-shadow-[0_4px_12px_rgba(194,59,34,0.15)]">
            ROSI SAMHARI
          </h1>
        </div>

        {/* THE MAIN HERO ARTWORK (REVISED WITH HIGH-AESTHETIC BRUTALIST & CYBER-NOIR BACKDROP) */}
        <HeroArtwork 
          activeSection={activeSection} 
          isScrolledDown={isScrolledDown} 
          characterImages={characterImages} 
        />

        {/* ================= DESKTOP CHARACTER SELECTION ONLY ================= */}
        <div className={`absolute bottom-8 left-[12%] z-30 flex items-center gap-4 pointer-events-auto transition-all duration-700 hidden lg:flex ${
          isScrolledDown ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}>
          {sectionKeys.map((key) => {
            const isSelected = activeSection === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-14 h-[18.5vh] border-2 bg-stone-50 overflow-hidden transition-all duration-300 ease-out relative group cursor-pointer ${
                  isSelected 
                    ? 'border-[#FF2E16] scale-115 rotate-0 opacity-100 z-10 shadow-lg shadow-[#FF2E16]/35' 
                    : 'border-stone-300 scale-90 -rotate-2 opacity-40 blur-[0.2px] hover:scale-95 hover:opacity-85 hover:rotate-0'
                }`}
              >
                <img 
                  src={characterImages[key]} 
                  alt={`Thumb ${key}`} 
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#FF2E16]/15 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            );
          })}
        </div>

        {/* Content Interface Overlay */}
        <main className={`relative z-20 w-full min-h-screen pt-24 sm:pt-28 lg:pt-36 px-4 sm:px-8 lg:px-12 flex flex-col justify-between transition-all duration-700 ease-in-out ${
          isScrolledDown ? '-translate-y-12 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}>
          
          <div className="lg:hidden h-[45vh] pointer-events-none"></div>

          {/* SECTION 1: PROFILE */}
          {activeSection === 'profile' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full my-auto z-20 pb-20 lg:pb-0">
              <div className="col-span-12 lg:col-span-4 space-y-4 bg-white/90 sm:bg-transparent backdrop-blur-xs p-4 sm:p-0 border border-stone-200/60 sm:border-0 shadow-xs sm:shadow-none rounded-sm">
                <div className="flex items-center gap-3">
                  <div className="w-[1.2px] h-6 bg-stone-800"></div>
                  <div className="border border-stone-200 p-0.5 bg-white inline-block w-44 shadow-xs">
                    <img src={cropStripLeft} alt="Strip Left" className="w-full h-12 object-cover grayscale contrast-125" />
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-stone-600 font-semibold sm:font-medium tracking-wide">
                  Yor lost her parents early. She raised her younger brother Yuri by herself, and became an assassin for the assassin group Garden at a young age to earn a living for the both of them.
                </p>
              </div>

              <div className="hidden lg:block lg:col-span-4 pointer-events-none"></div>
              
              <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end space-y-4 lg:text-right sm:bg-transparent p-4 sm:p-0 border border-stone-200/60 sm:border-0 shadow-xs sm:shadow-none rounded-sm">
                {/* Jam Digital Fungsional */}
                <div className="font-cyber font-black text-2xl sm:text-3xl tracking-widest text-[#111111]">
                  {currentTime || '00:00'}
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <div className="border border-stone-200 p-0.5 bg-white inline-block w-12 shadow-xs">
                    <img src={cropStripRight} alt="Strip Right" className="w-full h-10 object-cover grayscale contrast-125" />
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-stone-600 lg:text-right font-semibold sm:font-medium tracking-wide">
                  She's always doing her best to be a great role model for Anya, even if she has to risk exposing her secrets to do it.
                </p>
              </div>
            </div>
          )}

          {/* SECTION 2: PROJECT INFO */}
          {activeSection === 'project' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full my-auto z-20 pb-20 lg:pb-0">
              <div className="col-span-12 lg:col-span-4 space-y-2 max-w-xs bg-white/90 backdrop-blur-xs p-4 border border-stone-200/60 shadow-xs rounded-sm">
                <span className="text-[9px] font-cyber text-[#FF2E16] font-black tracking-widest block">// CORE MISSIONS</span>
                <h3 className="font-cyber font-black text-xs text-stone-900">20+ RECORDS DETECTED</h3>
                <p className="text-[11px] text-stone-500 leading-relaxed font-semibold sm:font-medium">
                  Sistem grid enkripsi di bawah dikonfigurasi menggunakan filter taktis agar repositori kode tetap terstruktur dengan rapi.
                </p>
              </div>
              <div className="hidden lg:block lg:col-span-4 pointer-events-none"></div>
              <div className="col-span-12 lg:col-span-4 max-w-xs lg:text-right bg-white/90 backdrop-blur-xs p-4 border border-stone-200/60 shadow-xs ml-auto lg:ml-0 rounded-sm">
                <span className="text-[9px] font-cyber text-[#FF2E16] font-black tracking-widest block mb-1">SCROLL DOWN</span>
                <p className="text-[11px] text-stone-600 leading-relaxed font-semibold sm:font-medium">
                  Gulir ke bawah untuk mengeksplorasi arsip data kompilasi proyek berskala besar secara komprehensif.
                </p>
              </div>
            </div>
          )}

          {/* SECTION 3: TECH STACK */}
          {activeSection === 'tech_stack' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full my-auto z-20 pb-20 lg:pb-0">
              <div className="col-span-12 lg:col-span-4 space-y-4 max-w-xs bg-white/90 backdrop-blur-xs p-4 border border-stone-200/60 shadow-xs rounded-sm">
                <span className="text-[9px] font-cyber text-[#FF2E16] font-black tracking-widest block">// CORE WEAPONRY</span>
                {[['LARAVEL', '92%'], ['REACT', '88%'], ['JAVASCRIPT', '90%']].map(([name, val]) => (
                  <div key={name} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-cyber font-bold"><span>{name}</span><span className="text-[#FF2E16]">{val}</span></div>
                    <div className="w-full bg-stone-200 h-[1.5px]"><div className="bg-[#FF2E16] h-full" style={{ width: val }}></div></div>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block lg:col-span-4 pointer-events-none"></div>
              <div className="col-span-12 lg:col-span-4 space-y-4 max-w-xs bg-white/90 backdrop-blur-xs p-4 border border-stone-200/60 shadow-xs ml-auto lg:ml-0 rounded-sm">
                <span className="text-[9px] font-cyber text-stone-400 font-black tracking-widest block">// CMS & ALTERNATES</span>
                {[['NUXT', '80%'], ['WORDPRESS', '85%'], ['WIX', '75%']].map(([name, val]) => (
                  <div key={name} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-cyber font-bold"><span>{name}</span><span className="text-[#111111]">{val}</span></div>
                    <div className="w-full bg-stone-200 h-[1.5px]"><div className="bg-[#111111] h-full" style={{ width: val }}></div></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* {SECTION 4: CONTACT INFO } */}
          {activeSection === 'contact' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full my-auto z-20 pb-20 lg:pb-0">
              <div className="col-span-12 lg:col-span-4 bg-stone-950 text-stone-300 p-4 border border-stone-900 shadow-xl space-y-2 max-w-xs rounded-sm">
                <div className="text-[9px] font-cyber text-[#FF2E16] tracking-widest font-bold">// SECURE LOG LINK //</div>
                <p className="text-[11px] font-mono leading-relaxed">
                  Semua pintu gerbang komunikasi aman diletakkan secara terpusat di barisan penutup paling bawah halaman ini.
                </p>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ================= CLASSIFIED PROJECTS SECTION WITH NEW VIEW DETAILS ================= */}
      <ProjectSection isScrolledDown={isScrolledDown} />

      {/* ================= AESTHETIC TACTICAL CONTACT ================= */}
     <section 
        id="contact" 
        className={`w-full relative z-30 bg-[#111111] text-[#E5E5E5] border-t border-stone-850 py-24 px-4 sm:px-8 lg:px-24 transition-all duration-1000 overflow-hidden 
          ${
          isScrolledDown ? 
          'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
  
  {/* ================= BACKGROUND DECORATIVE GRID ================= */}
  <div className="absolute inset-0 pointer-events-none opacity-20">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-800"></div>
    <div className="absolute top-[20%] left-[15%] w-[1px] h-full bg-stone-850"></div>
    <div className="absolute top-[40%] right-[25%] w-[1px] h-full bg-stone-850"></div>
  </div>

  {/* ================= 1. INFINITE RUNNING TICKER (MARQUEE) ================= */}
  <div className="absolute top-0 left-0 w-full bg-[#FF2E16] text-[#111111] overflow-hidden py-2.5 font-cyber text-[9px] font-black tracking-[0.3em] z-10 border-b border-[#FF2E16]/30">
    <div className="animate-marquee whitespace-nowrap flex gap-12">
      <span>[ COMMS FREQUENCY SECURE ] /// INITIALIZING ENCRYPTED HANDSHAKE // ADDR: 0x7FFF08C2 /// STATUS: ACTIVE </span>
      <span>[ COMMS FREQUENCY SECURE ] /// INITIALIZING ENCRYPTED HANDSHAKE // ADDR: 0x7FFF08C2 /// STATUS: ACTIVE </span>
      <span>[ COMMS FREQUENCY SECURE ] /// INITIALIZING ENCRYPTED HANDSHAKE // ADDR: 0x7FFF08C2 /// STATUS: ACTIVE </span>
      <span>[ COMMS FREQUENCY SECURE ] /// INITIALIZING ENCRYPTED HANDSHAKE // ADDR: 0x7FFF08C2 /// STATUS: ACTIVE </span>
    </div>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-6">
    
    {/* ================= 2. LEFT SIDE: TERMINAL CONSOLE LOG ================= */}
    <div className="lg:col-span-5 flex flex-col justify-between space-y-8 border-l border-stone-800 pl-6 lg:pl-10">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#FF2E16] animate-ping"></span>
          <span className="font-cyber text-[10px] tracking-[0.3em] text-[#FF2E16] font-bold">ESTABLISH_CONNECTION_V2</span>
        </div>
        
        <h2 className="text-4xl font-cyber font-black tracking-tight text-white leading-none">
          SECURE <br className="hidden lg:block"/>
          <span className="text-[#FF2E16]">COMMS</span> SIGNAL
        </h2>
        
        <p className="text-xs text-stone-400 font-medium leading-relaxed max-w-sm">
          Jaringan transmisi terbuka. Silakan hubungi operator kami melalui salah satu port enkripsi eksternal di samping.
        </p>
      </div>

      {/* Simulated Server Console */}
      <div className="bg-[#181818] border border-stone-800/80 p-4 rounded-sm font-mono text-[9px] text-stone-500 space-y-2 relative shadow-inner">
        <div className="absolute top-2 right-2 flex gap-1">
          <span className="w-1.5 h-1.5 bg-stone-700 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-stone-700 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-[#FF2E16] rounded-full animate-pulse"></span>
        </div>
        <div className="text-stone-300 font-bold border-b border-stone-800 pb-1.5 mb-1.5">// SYSTEM_LOGS</div>
        <p className="text-[#FF2E16]/80">&gt; npm run connect --agent=YOR_FORGER</p>
        <p className="text-stone-400">&gt; [INFO] Routing via secure node: 8.6500° S, 115.2167° E</p>
        <p className="text-stone-500">&gt; [SUCCESS] Secure connection channel verified.</p>
        <div className="flex items-center gap-1.5 pt-1 text-[#FF2E16]">
          <span>&gt;</span>
          <span className="h-3 w-1.5 bg-[#FF2E16] animate-pulse"></span>
        </div>
      </div>
    </div>

    {/* ================= 3. RIGHT SIDE: HIGH-AESTHETIC KEYCARDS OHOK OHOK ================= */}
    <div className="lg:col-span-7 flex flex-col gap-4">
      {[ 
        { 
          name: 'INSTAGRAM', 
          username: '@_rzmhr', 
          port: 'PORT_8080', 
          ping: '14ms',
          desc: 'Primary visual transmission & direct dispatch.',
          link: 'https://www.instagram.com/_rzmhr/', 
          icon: (
            <svg className="w-6 h-6 text-[#FF2E16]" viewBox="0 0 24 24">
              <path d="M7 2 17 2C19.7614 2 22 4.23858 22 7L22 17C22 19.7614 19.7614 22 17 22L7 22C4.23858 22 2 19.7614 2 17L2 7C2 4.23858 4.23858 2 7 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          ) 
        }, 
        { 
          name: 'WHATSAPP', 
          username: '+62 81779****49', 
          port: 'PORT_443', 
          ping: '8ms',
          desc: 'Instant priority hotline for rapid tactical support.',
          link: 'https://wa.me/6281779802449', 
          icon: (
            <svg className="w-6 h-6 text-[#FF2E16]" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          ) 
        }, 
        { 
          name: 'GITHUB', 
          username: 'nottrzz', 
          port: 'PORT_22', 
          ping: '20ms',
          desc: 'Legacy routing and secondary backup dispatch portal.',
          link: 'https://github.com/nottrzz', 
          icon: (
            <svg className="w-6 h-6 text-[#FF2E16]" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd"></path>
            </svg>
          ) 
        } 
      ].map((soc) => (
        <a 
          key={soc.name} 
          href={soc.link}
          target="_blank" 
          rel="noreferrer" 
          className="group relative border border-stone-800 bg-[#141414] p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-300 rounded-xs hover:border-[#FF2E16]/80 hover:bg-[#1C1C1C] overflow-hidden"
        >
          {/* Subtle Hover Scanline Effect */}
          <div className="absolute inset-0 bg-linear-to-b from-[#FF2E16]/5 to-transparent h-1/2 opacity-0 group-hover:opacity-100 pointer-events-none animate-scanline"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            {/* Hologram Box */}
            <div className="border border-stone-800 bg-[#1C1C1C] p-3 transition-colors duration-300 group-hover:border-[#FF2E16] group-hover:bg-[#FF2E16]/5">
              {soc.icon}
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-cyber text-xs font-black tracking-widest text-white">{soc.name}</span>
                <span className="text-[7.5px] font-mono text-stone-600 bg-stone-900 border border-stone-850 px-1 py-[1px]">{soc.port}</span>
              </div>
              <p className="font-mono text-[10px] text-[#FF2E16] font-bold tracking-wider">{soc.username}</p>
              <p className="text-[10px] text-stone-500 max-w-xs sm:max-w-md hidden sm:block">{soc.desc}</p>
            </div>
          </div>

          {/* Aesthetic Tactical Details on the Right side */}
          <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto border-t border-stone-850 sm:border-0 pt-3 sm:pt-0 font-mono text-[9px] text-stone-500 gap-1.5 relative z-10">
            <span className="hidden sm:inline">[STABLE_SECURE]</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>PING: <strong className="text-emerald-400">{soc.ping}</strong></span>
            </div>
            <span className="text-stone-600 font-bold group-hover:text-[#FF2E16] transition-colors duration-300">ACTIVATE_LINK &rarr;</span>
          </div>

          {/* Tech/Corner Cut Accent */}
          <div className="absolute top-0 right-0 w-2 h-2 bg-stone-800 transition-colors duration-300 group-hover:bg-[#FF2E16]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
        </a>
      ))}
    </div>

  </div>
</section>

      {/* ================= TACTICAL SYSTEM FOOTER ================= */}
      <footer className="relative z-30 w-full bg-[#111111] text-stone-400 border-t border-stone-900 py-8 px-4 sm:px-8 lg:px-12 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono">
          <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#FF2E16] animate-pulse"></div><p className="font-cyber tracking-[0.2em] uppercase text-stone-300">© 2026 ROSIZAMHARI. ALL RIGHTS RESERVED.</p></div>
          <div className="font-cyber tracking-[0.3em] text-stone-500 hidden md:block">STATUS: OPERATIONAL // ALIAS: OCHYY x YORR</div>
          <div className="flex items-center gap-4"><span className="text-[#FF2E16]">SYS_V2.6.2</span><div className="w-[1px] h-3 bg-stone-800"></div><span className="text-stone-500">LOC: 8.6500° S, 115.2167° E</span></div>
        </div>
      </footer>

    </div>
  );
}

export default App;