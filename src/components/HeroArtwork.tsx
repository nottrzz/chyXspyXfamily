import React from 'react';
// Mengimport gambar pedang yang sudah lu simpan di folder assets
import swordImg from '../assets/sword.png';

interface HeroArtworkProps {
  activeSection: string;
  isScrolledDown: boolean;
  characterImages: Record<string, string>;
}

export const HeroArtwork: React.FC<HeroArtworkProps> = ({
  activeSection,
  isScrolledDown,
  characterImages,
}) => {
  return (
    <div
      className={`absolute inset-0 z-10 flex justify-center items-start pt-[5vh] sm:items-center sm:pt-0 pointer-events-none px-6 overflow-hidden transition-all duration-1000 ease-in-out ${
        isScrolledDown ? '-translate-y-[100vh] opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="relative w-[95vw] sm:w-auto h-[66vh] mt-16 sm:mt-0 sm:h-[75vh] lg:h-[88vh] bg-transparent p-0 border-0 shadow-none animate-float-char flex justify-center items-center origin-center scale-115 sm:scale-100">
        
        {/* ==================== LAYER 1: DECORATIVE BACKDROP ELEMENTS (Z-0) ==================== */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none select-none">
          
          {/* "CLASSIFIED" Vintage Ink Stamp */}
          <div className="absolute top-[15%] right-[10%] sm:right-[15%] rotate-[15deg] border-2 border-[#C23B22]/70 px-3 py-1 font-mono text-[10px] sm:text-xs text-[#C23B22]/80 uppercase tracking-[0.25em] font-extrabold select-none pointer-events-none rounded opacity-75">
            CLASSIFIED // 極秘
          </div>

          {/* Vintage Typewriter Dossier Text */}
          {/* <div className="absolute bottom-[10%] left-[5%] sm:left-[10%] text-left font-mono text-[9px] sm:text-[11px] text-stone-500/80 dark:text-stone-400/80 uppercase tracking-widest leading-relaxed">
            <div>[ CODE NAME: TWILIGHT'S RECRUIT ]</div>
            <div>[ TARGET: ROSI SAMHARI ]</div>
            <div>[ MISSION: WEB_ARCHITECTURE ]</div>
            <div className="text-[#C23B22]/70 font-semibold">[ STATUS: ACTIVE EYE ]</div>
          </div> */}

          {/* Huge Vertical Typography Outline (Behind Everything) */}
          <div className="absolute inset-0 flex justify-between items-center px-6 sm:px-16 opacity-[0.05] sm:opacity-[0.08]">
            <div className="font-sans font-black text-[18vh] sm:text-[24vh] text-stone-900 dark:text-white uppercase leading-none tracking-tighter" style={{ writingMode: 'vertical-rl' as any }}>
              SPY
            </div>
            <div className="font-sans font-black text-[18vh] sm:text-[24vh] text-stone-900 dark:text-white uppercase leading-none tracking-tighter" style={{ writingMode: 'vertical-rl' as any }}>
              FAMILY
            </div>
          </div>

        </div>

        {/* ==================== LAYER 2: THE DEMONIC SWORD (Z-10 - HIGHER BACK-SLUNG) ==================== */}
        {/* translate-y diubah ke -14% agar pedang bergeser naik ke atas pundak, dan efek animate-pulse diaktifkan kembali */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
          <img 
            src={swordImg} 
            alt="Demonic Sword" 
            className="absolute w-[85%] sm:w-[720px] lg:w-[820px] object-contain rotate-[5deg] translate-y-[2%] translate-x-[1%] opacity-95 transition-all duration-500 filter drop-shadow-[0_15px_35px_rgba(194,59,34,0.35)] animate-pulse [animation-duration:3s]"
          />
        </div>

        {/* ==================== LAYER 3: THE RETRO OVERLAY SCREEN-TONE (Z-15) ==================== */}
        {activeSection === 'profile' && (
          <div 
            className="absolute inset-0 z-15 pointer-events-none mix-blend-multiply dark:mix-blend-overlay opacity-[0.12] char-mask-fade" 
            style={{
              backgroundImage: 'radial-gradient(rgba(30, 46, 40, 0.4) 12%, transparent 13%)',
              backgroundSize: '8px 8px'
            }} 
          />
        )}

        {/* ==================== LAYER 4: YOUR CUTOUT IMAGE (Z-20 - FOREGROUND) ==================== */}
        <img
          src={characterImages[activeSection]}
          alt={`Artwork ${activeSection}`}
          className="relative z-20 h-full w-full sm:w-auto object-contain char-shadow-filter char-mask-fade select-none transition-all duration-500 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
        />

        {/* ==================== LAYER 5: WISE BADGE PIN (Z-30 - TOPMOST) ==================== */}
        {activeSection === 'profile' && (
          <div 
            className="absolute top-[43.5%] left-[45.8%] z-30 pointer-events-none hidden sm:block drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] animate-pulse [animation-duration:5s]" 
            title="WISE Spy Pin"
          >
            <svg width="15" height="24" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L19 14H5L12 1Z" fill="#D4AF37" stroke="#111111" strokeWidth="1" />
              <path d="M12 35L19 16H5L12 35Z" fill="#C23B22" stroke="#111111" strokeWidth="1" />
              <circle cx="12" cy="15" r="5.5" fill="#1E2E28" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="12" cy="15" r="2.5" fill="#FFFFFF" />
              <circle cx="12" cy="15" r="1" fill="#C23B22" />
            </svg>
          </div>
        )}

      </div>
    </div>
  );
};