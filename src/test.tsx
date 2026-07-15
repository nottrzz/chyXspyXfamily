import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ================= DYNAMIC CHARACTER IMAGES =================
  const characterImages = {
    profile: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop", 
    skills: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop",  
    arsenal: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", 
    garden: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"  
  };

  const thumbnail1 = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=300&auto=format&fit=crop"; 
  const thumbnail2 = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop";

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#F6F6F6] font-spybody text-stone-900 overflow-x-hidden select-none pb-16 lg:pb-0">
      
      {/* ================= FIXED TOP SYSTEM BRANDING ================= */}
      <div className="fixed top-0 left-0 w-full z-40 p-4 lg:p-6 flex justify-between items-center pointer-events-none select-none">
        <div className="flex items-center gap-4 sm:gap-8 pointer-events-auto">
          {/* Logo Brand Kiri */}
          <div className="text-stone-950 font-cyber font-black text-xs tracking-[0.25em] flex items-center gap-1.5 bg-white/40 px-3 py-1.5 backdrop-blur-sm border border-stone-200/40">
            <span>+</span> SPY×FAMILY <span>+</span>
          </div>
          {/* Node Active State */}
          <div className="text-stone-400 font-cyber text-[10px] sm:text-[11px] tracking-widest hidden sm:block uppercase">
            SYS.LOC // <span className="text-spyred font-black">{activeSection}</span>
          </div>
        </div>

        {/* Center Aesthetic Marker (VERNY Indicator) */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] font-cyber tracking-[0.4em] text-stone-950 font-bold pl-32">
          + <span className="pt-0.5">VERNY</span> +
        </div>

        {/* Spacer for Hamburger */}
        <div className="w-12 h-10"></div>
      </div>

      {/* ================= AESTHETIC HAMBURGER BUTTON ================= */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 lg:top-6 lg:right-6 z-50 bg-white border border-stone-300 p-3.5 rounded-sm shadow-sm flex flex-col gap-1.5 justify-center items-center transition-all duration-300 hover:border-spyred group cursor-pointer"
        aria-label="Toggle Menu"
      >
        <span className={`h-[1.5px] w-5 bg-stone-950 group-hover:bg-spyred transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
        <span className={`h-[1.5px] w-5 bg-stone-950 group-hover:bg-spyred transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-[1.5px] w-5 bg-stone-950 group-hover:bg-spyred transition-transform duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
      </button>

      {/* ================= FULLSCREEN INTERFACE NAV OVERLAY ================= */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="text-stone-400 text-[9px] font-cyber tracking-[0.4em] mb-12 animate-pulse text-center">
          — ROUTING TERMINAL INDEX —
        </div>
        <nav className="flex flex-col items-center gap-8">
          {['profile', 'skills', 'arsenal', 'garden'].map((sec, idx) => (
            <button
              key={sec}
              onClick={() => handleMenuClick(sec)}
              className="group text-3xl sm:text-4xl font-cyber font-black tracking-widest text-stone-400 hover:text-stone-950 transition-colors duration-300 relative py-2 px-6 cursor-pointer"
            >
              <span className="text-spyred text-sm sm:text-base mr-3 font-medium">0{idx + 1}//</span>
              {sec.toUpperCase()}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-spyred w-0 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>
      </div>

      {/* ================= FINE TECHNICAL SUMBU LINES (Crosshair Grid Layout) ================= */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Horizontal Main Axis */}
        <div className="w-full h-[1px] bg-stone-300/50 absolute top-[48%] left-0"></div>
        {/* Vertical Center Axis Lines */}
        <div className="w-[1px] h-full bg-stone-300/40 absolute top-0 left-[23%] hidden lg:block"></div>
        <div className="w-[1px] h-full bg-stone-300/40 absolute top-0 right-[25%] hidden lg:block"></div>
        
        {/* Technical Coordinate Info Box (Bottom Left Accent) */}
        <div className="absolute bottom-8 left-6 lg:left-12 font-cyber text-[11px] tracking-widest text-stone-500 flex flex-col gap-1">
          <span className="text-stone-950 font-black">2.7°</span>
          <div className="w-8 h-[1px] bg-stone-400"></div>
          <span className="text-[9px] text-stone-400">SYS_LOC_X</span>
        </div>

        {/* Floating Red Interface Blocks */}
        <div className="w-3 h-3 bg-spyred absolute top-[38%] left-[32%] opacity-85 animate-pulse"></div>
        <div className="w-2 h-2 bg-spyred absolute bottom-[35%] right-[34%] opacity-70"></div>
        <div className="w-4 h-4 bg-spyred absolute bottom-[22%] left-[27%] opacity-40"></div>
      </div>

      {/* ================= BIG CANVAS TITLE LAYER (Placed Precisely Behind Character) ================= */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[14vw] sm:text-[16vw] font-black italic tracking-tighter text-spyred uppercase leading-none select-none opacity-95 animate-pulse">
          YOR <span className="text-transparent stroke-text">FORGER</span>
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-12 h-[1px] bg-stone-950/60"></div>
          <span className="font-cyber text-xs tracking-[0.4em] text-stone-950 font-black">YOR FORGER</span>
          <div className="w-12 h-[1px] bg-stone-950/60"></div>
        </div>
      </div>

      {/* ================= MAGNIFICENT CENTERPIECE CHARACTER IMAGE ================= */}
      <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none px-4 overflow-hidden mix-blend-multiply">
        <div key={activeSection} className="w-full h-[65vh] sm:h-[75vh] lg:h-[88vh] animate-float-char flex justify-center items-center">
          <img
            src={characterImages[activeSection]}
            alt={`Yor Artwork ${activeSection}`}
            className="h-full object-contain filter grayscale contrast-125 select-none transition-all duration-500"
          />
        </div>
      </div>

      {/* ================= TECHNICAL FLOATING TEXT & CONTENT OVERLAY ================= */}
      <main key={activeSection} className="relative z-20 w-full min-h-screen pt-24 sm:pt-28 lg:pt-36 px-4 sm:px-8 lg:px-12 flex flex-col justify-between">
        
        {/* Mobile Spacer to push content dynamically below main image line */}
        <div className="lg:hidden h-[40vh] pointer-events-none"></div>

        {/* ================= SECTION 1: PROFILE ================= */}
        {activeSection === 'profile' && (
          <div className="animate-page-profile grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start w-full my-auto z-20">
            
            {/* Left Column Content */}
            <div className="col-span-12 lg:col-span-4 space-y-5">
              {/* Profile Crop Frame Thumbnail */}
              <div className="flex items-start gap-2">
                <div className="w-[1px] h-6 bg-stone-800"></div>
                <div className="border border-stone-300 p-0.5 bg-white inline-block w-28 shadow-sm">
                  <img src={thumbnail1} alt="Intel Preview" className="w-full h-11 object-cover grayscale contrast-115" />
                </div>
              </div>
              
              {/* Paragraph without heavy container box */}
              <div className="max-w-xs text-left">
                <p className="text-[11px] sm:text-xs leading-relaxed text-stone-600 font-medium tracking-wide">
                  Yor lost her parents early. She raised her younger brother Yuri by herself, and became an assassin for the assassin group Garden at a young age to earn a living for the both of them. Neither she nor her brother are aware of each other's true jobs.
                </p>
              </div>
            </div>
            
            {/* Right Column Content */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col items-start lg:items-end space-y-5 lg:text-right">
              
              {/* Raw Aesthetic Floating Clock Component */}
              <div className="text-xl sm:text-2xl font-cyber font-black tracking-widest text-stone-950 self-start lg:self-auto">
                21:39
              </div>

              {/* Right Profile Crop Frame Thumbnail */}
              <div className="flex items-start gap-2 justify-end">
                <div className="w-[1px] h-6 bg-stone-800 order-last lg:order-first"></div>
                <div className="border border-stone-300 p-0.5 bg-white inline-block w-16 shadow-sm">
                  <img src={thumbnail2} alt="Focus Preview" className="w-full h-11 object-cover grayscale contrast-115" />
                </div>
              </div>

              {/* Right Paragraph Block */}
              <div className="max-w-xs text-left lg:text-right">
                <p className="text-[11px] sm:text-xs leading-relaxed text-stone-600 font-medium tracking-wide">
                  She's always doing her best to be a great role model for Anya, even if she has to risk exposing her secrets to do it.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ================= SECTION 2: SKILLS ================= */}
        {activeSection === 'skills' && (
          <div className="animate-page-skills grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full my-auto z-20">
            <div className="col-span-12 lg:col-span-4 space-y-4 max-w-xs bg-white/70 backdrop-blur-sm p-4 border border-stone-200/60 shadow-sm">
              <span className="text-[9px] font-cyber text-spyred font-black tracking-widest block">// CAPABILITY ANALYSIS</span>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-cyber font-bold">
                  <span>OVERWHELMING STRENGTH</span>
                  <span className="text-spyred">99%</span>
                </div>
                <div className="w-full bg-stone-200 h-[2px]">
                  <div className="bg-spyred h-full w-[99%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-cyber font-bold">
                  <span>STEALTH AGILITY</span>
                  <span className="text-spyred">95%</span>
                </div>
                <div className="w-full bg-stone-200 h-[2px]">
                  <div className="bg-spyred h-full w-[95%]"></div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 max-w-xs lg:text-right bg-white/70 backdrop-blur-sm p-4 border border-stone-200/60 shadow-sm ml-auto lg:ml-0">
              <span className="text-[9px] font-cyber text-stone-400 font-black tracking-widest block mb-1">CRITICAL RECORD</span>
              <p className="text-[11px] text-stone-600 leading-relaxed font-medium">
                Neutralizes high-priority armored hostiles flawlessly without sustained structural failure or counter-strikes.
              </p>
            </div>
          </div>
        )}

        {/* ================= SECTION 3: ARSENAL ================= */}
        {activeSection === 'arsenal' && (
          <div className="animate-page-arsenal grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full my-auto z-20">
            <div className="col-span-12 lg:col-span-4 space-y-3 max-w-xs">
              <div className="border-l-2 border-spyred pl-3 py-1 bg-white/60 backdrop-blur-sm">
                <h3 className="font-cyber font-black text-xs text-stone-950">GOLDEN STILETTO AWLS</h3>
                <p className="text-[11px] text-stone-500 mt-0.5 font-medium">Dual customized needle-style alloy daggers.</p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-3 max-w-xs lg:text-right ml-auto lg:ml-0">
              <div className="border-r-2 border-stone-950 pr-3 py-1 bg-white/60 backdrop-blur-sm text-right">
                <h3 className="font-cyber font-black text-xs text-stone-950">LIPSTICK CONCEALED BLADE</h3>
                <p className="text-[11px] text-stone-500 mt-0.5 font-medium">Emergency piercing apparatus for close ambushes.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTION 4: GARDEN ================= */}
        {activeSection === 'garden' && (
          <div className="animate-page-garden grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full my-auto z-20">
            <div className="col-span-12 lg:col-span-4 bg-stone-950 text-stone-300 p-4 border border-stone-900 shadow-xl space-y-2 max-w-xs">
              <div className="text-[9px] font-cyber text-spyred tracking-widest font-bold">// OPERATIONS //</div>
              <p className="text-[11px] font-mono leading-relaxed">
                An elite shadow syndicate executing domestic state elements to clear "weeds" threatening peace.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 max-w-xs bg-white/70 backdrop-blur-sm p-4 border border-stone-200/60 text-left lg:text-right ml-auto lg:ml-0">
              <span className="text-[9px] font-cyber text-spyred font-black tracking-widest block mb-1">FACTION CLASSIFICATION</span>
              <p className="text-[11px] text-stone-500 font-medium">All structural logs and internal operative lists inside this terminal block are encrypted.</p>
            </div>
          </div>
        )}

      </main>

      {/* ================= INLINE STROKE EFFECTS ================= */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #D60A18;
        }
      `}</style>
    </div>
  );
}

export default App;