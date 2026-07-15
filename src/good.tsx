import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ================= DEWA GFX HIGH-QUALITY CHARACTER ASSETS =================
  const characterImages = {
   profile: "https://k.top4top.io/p_38489zc9b1.png", // Casual Clerk
    skills: "https://l.top4top.io/p_3848jmh3w2.png",  // Combat Vibe
    arsenal: "https://k.top4top.io/p_38488qktm1.png", // Weapons Ready
    garden: "https://k.top4top.io/p_38488qktm1.png"  // Shadow Guild
  };

  // Crop Strips exactly matching the UI elements
  const cropStripLeft = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=300&auto=format&fit=crop"; 
  const cropStripRight = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop";

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#111111] overflow-x-hidden select-none pb-16 lg:pb-0 font-sans">
      
      {/* Dynamic Google Fonts Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@600;800;900&family=Permanent+Marker&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-cyber { font-family: 'Orbitron', sans-serif; }
        .font-serif-brand { font-family: 'Cinzel', sans-serif; }
        .font-brush { font-family: 'Permanent Marker', cursive; }
        
        .text-glow-red {
          text-shadow: 0 0 1px rgba(255, 46, 22, 0.2);
        }
      `}</style>

      {/* ================= GFX DIAGONAL CORNER CUTS ================= */}
      <div 
        className="absolute top-0 left-0 w-[40%] h-[20%] bg-[#111111] z-30 hidden lg:block" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 45%)' }} 
      />
      <div 
        className="absolute bottom-0 right-0 w-[18%] h-[22%] bg-[#111111] z-30 hidden lg:block" 
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} 
      />

      {/* ================= GRID AXIS & SYSTEM LINES ================= */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Main Horizontal Axis Line */}
        <div className="w-full h-[1.2px] bg-stone-300/60 absolute top-[50%] left-0"></div>
        
        {/* Main Vertical Axis Lines */}
        <div className="w-[1px] h-full bg-stone-200 absolute top-0 left-[10%] hidden lg:block"></div>
        <div className="w-[1px] h-full bg-stone-200 absolute top-0 right-[15%] hidden lg:block"></div>
        
        {/* Decorative Grid Line Ticks */}
        <div className="absolute top-[35%] left-[35%] w-[1px] h-10 bg-stone-400/40"></div>
        <div className="absolute top-[60%] right-[30%] w-[1px] h-12 bg-stone-400/40"></div>
        <div className="absolute bottom-[25%] left-[23%] w-[1px] h-16 bg-stone-400/40"></div>

        {/* Technical Coordinate Indicators */}
        <div className="absolute bottom-16 left-6 lg:left-12 flex items-end gap-3 z-20">
          <span className="font-cyber font-bold text-sm tracking-wider text-[#111111]">2.7°</span>
          <div className="w-[1.2px] h-8 bg-stone-400/80"></div>
        </div>

        {/* ================= FLOATING RED PIXEL ART BLOCKS ================= */}
        <div className="absolute w-4 h-4 bg-[#FF2E16] top-[32%] left-[33%] opacity-90 animate-pulse"></div>
        <div className="absolute w-2.5 h-2.5 bg-[#FF2E16] bottom-[37%] right-[31%] opacity-80"></div>
        <div className="absolute w-1.5 h-1.5 bg-[#FF2E16] bottom-[42%] left-[29%]"></div>
        <div className="absolute w-2 h-2 bg-[#FF2E16] top-[62%] left-[29%]"></div>
        <div className="absolute w-3 h-3 bg-[#FF2E16] bottom-[28%] left-[32%] opacity-60"></div>
        <div className="absolute w-4.5 h-4.5 bg-[#FF2E16]/80 bottom-[20%] right-[33%]"></div>
      </div>

      {/* ================= HEADER BRANDING BAR ================= */}
      <div className="fixed top-0 left-0 w-full z-40 p-4 lg:p-6 flex justify-between items-center pointer-events-none select-none">
        <div className="flex items-center gap-6 pointer-events-auto">
          {/* Top Left: SPY x FAMILY Logo style */}
          <div className="text-[#111111] font-sans font-black text-[11px] sm:text-xs tracking-[0.35em] flex items-center gap-3 bg-white/60 px-3 py-1.5 backdrop-blur-xs border border-stone-100">
            <span>+</span> SPY×FAMILY <span>+</span>
          </div>
        </div>

        {/* Top Center: VENN Aesthetic Indicator */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] font-serif-brand tracking-[0.5em] text-[#111111] font-bold pl-20">
          <span>VENN</span> +
        </div>

        {/* Right Safe space spacer */}
        <div className="w-12 h-10"></div>
      </div>

      {/* ================= AESTHETIC INTERFACE TRIGGER ================= */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 lg:top-6 lg:right-6 z-50 bg-white border border-stone-200 p-3.5 rounded-sm shadow-xs flex flex-col gap-1.5 justify-center items-center transition-all duration-300 hover:border-[#FF2E16] group cursor-pointer"
        aria-label="Toggle Navigation"
      >
        <span className={`h-[1.5px] w-5 bg-[#111111] group-hover:bg-[#FF2E16] transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
        <span className={`h-[1.5px] w-5 bg-[#111111] group-hover:bg-[#FF2E16] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-[1.5px] w-5 bg-[#111111] group-hover:bg-[#FF2E16] transition-transform duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
      </button>

      {/* ================= NAVIGATION OVERLAY ================= */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="text-stone-400 text-[9px] font-cyber tracking-[0.4em] mb-12 animate-pulse text-center">
          — SECURE SYSTEM PATH —
        </div>
        <nav className="flex flex-col items-center gap-8">
          {['profile', 'skills', 'arsenal', 'garden'].map((sec, idx) => (
            <button
              key={sec}
              onClick={() => handleMenuClick(sec)}
              className="group text-3xl sm:text-4xl font-cyber font-black tracking-widest text-stone-400 hover:text-[#111111] transition-colors duration-300 relative py-2 px-6 cursor-pointer"
            >
              <span className="text-[#FF2E16] text-sm sm:text-base mr-3 font-medium">0{idx + 1}//</span>
              {sec.toUpperCase()}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#FF2E16] w-0 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>
      </div>

      {/* ================= PERFECTLY PROPORTIONED BACKGROUND TEXT LAYER ================= */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden px-4">
        <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8.5vw] xl:text-[8vw] max-w-[90%] text-center font-brush text-[#FF2E16] uppercase leading-none select-none tracking-tight text-glow-red whitespace-nowrap">
          YOR FORGER
        </h1>
      </div>

      {/* ================= THE MAIN HERO ARTWORK CONTAINER ================= */}
      <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none px-4 overflow-hidden mix-blend-multiply">
        <div key={activeSection} className="w-full h-[65vh] sm:h-[75vh] lg:h-[88vh] animate-float-char flex justify-center items-center">
          <img
            src={characterImages[activeSection]}
            alt={`Yor Artwork ${activeSection}`}
            className="h-full object-contain filter grayscale contrast-125 select-none transition-all duration-500"
          />
        </div>
      </div>

      {/* ================= MASTER INTERFACE CONTENT OVERLAY ================= */}
      <main key={activeSection} className="relative z-20 w-full min-h-screen pt-24 sm:pt-28 lg:pt-36 px-4 sm:px-8 lg:px-12 flex flex-col justify-between">
        
        {/* Mobile Spacing Fix to push elements naturally down */}
        <div className="lg:hidden h-[40vh] pointer-events-none"></div>

        {/* ================= SECTION 1: PROFILE ================= */}
        {activeSection === 'profile' && (
          <div className="animate-page-profile grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start w-full my-auto z-20">
            
            {/* Left Hand Column: Intel & Portrait Slices */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              
              {/* Top Crop Strip Indicator */}
              <div className="flex items-center gap-3">
                <div className="w-[1.2px] h-6 bg-stone-800"></div>
                <div className="border border-stone-200 p-0.5 bg-white inline-block w-44 shadow-xs">
                  <img src={cropStripLeft} alt="Portrait Strip Left" className="w-full h-10 object-cover grayscale contrast-125" />
                </div>
              </div>

              {/* Main Bio Text Block */}
              <div className="max-w-xs text-left">
                <p className="text-[11px] leading-relaxed text-stone-600 font-medium tracking-wide">
                  Yor lost her parents early. She raised her younger brother Yuri by herself, and became an assassin for the assassin group Garden at a young age to earn a living for the both of them. Neither she nor her brother are aware of each other's true jobs.
                </p>
              </div>

              {/* Left Sub-branding */}
              <div className="flex items-center gap-3 pt-2">
                <span className="font-cyber font-black text-[10px] tracking-wider text-stone-900">YOR FORGER</span>
                <div className="w-12 h-[1px] bg-stone-900"></div>
              </div>
            </div>
            
            {/* Right Hand Column: Clock & Alternative Story Blocks */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col items-start lg:items-end space-y-6 lg:text-right">
              
              {/* Cyber Digital Clock (Raw Typography) */}
              <div className="font-cyber font-black text-2xl sm:text-3xl tracking-widest text-[#111111] self-start lg:self-auto select-none pt-2">
                21:39
              </div>

              {/* SPY X FAMILY Sub-branding */}
              <div className="flex items-center gap-3 self-start lg:self-auto">
                <div className="w-12 h-[1px] bg-stone-900 hidden lg:block"></div>
                <span className="font-cyber font-black text-[10px] tracking-wider text-stone-900">SPY X FAMILY</span>
                <div className="w-12 h-[1px] bg-stone-900 block lg:hidden"></div>
              </div>

              {/* Right Portrait Thumbnail Frame */}
              <div className="flex items-center gap-3 justify-end self-start lg:self-auto">
                <div className="w-[1.2px] h-6 bg-stone-800 order-last lg:order-first"></div>
                <div className="border border-stone-200 p-0.5 bg-white inline-block w-12 shadow-xs">
                  <img src={cropStripRight} alt="Portrait Strip Right" className="w-full h-10 object-cover grayscale contrast-125" />
                </div>
              </div>

              {/* Secondary Bio Text Block */}
              <div className="max-w-xs text-left lg:text-right self-start lg:self-auto">
                <p className="text-[11px] leading-relaxed text-stone-600 font-medium tracking-wide">
                  She's always doing her best to be a great role model for Anya, even if she has to risk exposing her secrets to do it.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ================= SECTION 2: SKILLS ================= */}
        {activeSection === 'skills' && (
          <div className="animate-page-skills grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full my-auto z-20">
            <div className="col-span-12 lg:col-span-4 space-y-4 max-w-xs bg-white/80 backdrop-blur-xs p-4 border border-stone-100 shadow-xs">
              <span className="text-[9px] font-cyber text-[#FF2E16] font-black tracking-widest block">// CAPABILITY METRICS</span>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-cyber font-bold">
                  <span>OVERWHELMING STRENGTH</span>
                  <span className="text-[#FF2E16]">99%</span>
                </div>
                <div className="w-full bg-stone-200 h-[1.5px]">
                  <div className="bg-[#FF2E16] h-full w-[99%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-cyber font-bold">
                  <span>STEALTH SPEED</span>
                  <span className="text-[#FF2E16]">95%</span>
                </div>
                <div className="w-full bg-stone-200 h-[1.5px]">
                  <div className="bg-[#FF2E16] h-full w-[95%]"></div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 max-w-xs lg:text-right bg-white/80 backdrop-blur-xs p-4 border border-stone-100 shadow-xs ml-auto lg:ml-0">
              <span className="text-[9px] font-cyber text-stone-400 font-black tracking-widest block mb-1">RECORDED ANOMALIES</span>
              <p className="text-[11px] text-stone-600 leading-relaxed font-medium">
                Capable of cleanly deflecting high-velocity kinetic projectiles and taking down heavily armored forces without external weapons.
              </p>
            </div>
          </div>
        )}

        {/* ================= SECTION 3: ARSENAL ================= */}
        {activeSection === 'arsenal' && (
          <div className="animate-page-arsenal grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full my-auto z-20">
            <div className="col-span-12 lg:col-span-4 space-y-3 max-w-xs">
              <div className="border-l-2 border-[#FF2E16] pl-3 py-1 bg-white/80 backdrop-blur-xs">
                <h3 className="font-cyber font-black text-xs text-stone-900">GOLDEN NEEDLE BLADES</h3>
                <p className="text-[11px] text-stone-500 mt-0.5 font-medium">Dual custom long needle alloy spikes crafted for target pressure point neutralization.</p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-3 max-w-xs lg:text-right ml-auto lg:ml-0">
              <div className="border-r-2 border-stone-900 pr-3 py-1 bg-white/80 backdrop-blur-xs text-right">
                <h3 className="font-cyber font-black text-xs text-stone-900">TACTICAL VANITY AMBUSH</h3>
                <p className="text-[11px] text-stone-500 mt-0.5 font-medium">Concealed blade system fitted perfectly inside standard cosmetic items for close ambushes.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTION 4: GARDEN ================= */}
        {activeSection === 'garden' && (
          <div className="animate-page-garden grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full my-auto z-20">
            <div className="col-span-12 lg:col-span-4 bg-stone-950 text-stone-300 p-4 border border-stone-900 shadow-xl space-y-2 max-w-xs">
              <div className="text-[9px] font-cyber text-[#FF2E16] tracking-widest font-bold">// CLASSIFIED OPERATIONS //</div>
              <p className="text-[11px] font-mono leading-relaxed">
                An elite shadow syndicate purging anti-government elements to ensure internal nation-wide peace.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 max-w-xs bg-white/80 backdrop-blur-xs p-4 border border-stone-100 text-left lg:text-right ml-auto lg:ml-0">
              <span className="text-[9px] font-cyber text-[#FF2E16] font-black tracking-widest block mb-1">SYSTEM WARNING</span>
              <p className="text-[11px] text-stone-500 font-medium">Encryption active. Any attempts to export Garden agency log databases will trigger a manual system wipe.</p>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}

export default App;