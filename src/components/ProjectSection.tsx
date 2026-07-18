import { useState } from 'react';

export type Project = {
  id: string;
  title: string;
  category: string;
  status: string;
  desc: string;
  imageUrl: string;
};

const allProjects: Project[] = [
  { id: "01", 
    title: "VILLAGE ADMINISTRATION", 
    category: "WEB CORE", 
    status: "SUCCESSFUL", 
    desc: "Local resident records platform built using Laravel Framework.", 
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" },
  { id: "02", 
    title: "KBS RENT VEHICLE SYSTEM", 
    category: "WEB CORE", 
    status: "ACTIVE COVER", 
    desc: "Corporate fleet administrative database management.", 
    imageUrl: "https://images.unsplash.com/photo-1579373903281-420a7b456254?q=80&w=1000&auto=format&fit=crop" },
  { id: "03", 
    title: "ADI TOUR & TRAVEL PORTAL", 
    category: "CMS PORTAL", 
    status: "COMPLETED", 
    desc: "SEO-optimized travel booking portal with custom routing lanes.", 
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" },
  { id: "04", 
    title: "LOMBOK AZMI AGENCY", 
    category: "CMS PORTAL", 
    status: "SUCCESSFUL", 
    desc: "Modern dynamic booking application layout for island excursions.", 
    imageUrl: "https://images.unsplash.com/photo-1616440964820-c5f83865768a?q=80&w=1000&auto=format&fit=crop" },
  { id: "05", 
    title: "ORDER BACKUP SYSTEM", 
    category: "AUTOMATION", 
    status: "ACTIVE COVER", 
    desc: "Automated ESB API processing unit transferring order logs to sheets.", 
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" },
  { id: "06", 
    title: "BITBASE DIGITAL LANDING", 
    category: "WEB CORE", 
    status: "SUCCESSFUL", 
    desc: "High-performance marketing sitemaps structured via PHP Native.", 
    imageUrl: "https://images.unsplash.com/photo-1579373903281-420a7b456254?q=80&w=1000&auto=format&fit=crop" },
  { id: "07", 
    title: "SMPN 1 GUNUNG SARI PORTAL", 
    category: "CMS PORTAL", 
    status: "COMPLETED", 
    desc: "Educational facilities dashboard built with dynamic custom panels.", 
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" },
  { id: "08", 
    title: "SMKN 1 PRINGGABAYA HUB", 
    category: "WEB CORE", 
    status: "SUCCESSFUL", 
    desc: "Custom administrative widgets powered by Filament layout system.", 
    imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1000&auto=format&fit=crop" },
  { id: "09", 
    title: "TOURISM DATABASE EVAL", 
    category: "WEB CORE", 
    status: "COMPLETED", 
    desc: "Vocational evaluation model mapping intricate target queries.", 
    imageUrl: "https://images.unsplash.com/photo-1533035350251-aa8b34f68b19?q=80&w=1000&auto=format&fit=crop" },
  { id: "10", 
    title: "DEADLINE NOTIFIER TRUCKER", 
    category: "AUTOMATION", 
    status: "ACTIVE COVER", 
    desc: "Google Apps Script automation engine dispatching alerts.", 
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1000&auto=format&fit=crop" },
  { id: "11", 
    title: "PROJECT VALKYRIE EXT", 
    category: "OTHER", 
    status: "SUCCESSFUL", 
    desc: "High-stakes security validation modules mapping network perimeter.", 
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" },
  { id: "12", 
    title: "THORN GARDEN ASSULT", 
    category: "OTHER", 
    status: "COMPLETED", 
    desc: "Custom reactive media component library mirroring asset models.", 
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop" },
];

interface ProjectSectionProps {
  isScrolledDown: boolean;
}

export default function ProjectSection({ isScrolledDown }: ProjectSectionProps) {
  const [activeProjectFilter, setActiveProjectFilter] = useState('ALL');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  const filteredProjects = activeProjectFilter === 'ALL' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeProjectFilter);

  return (
    <>
      <section 
        id="project"
        className={`min-h-screen w-full relative z-30 flex flex-col justify-center py-24 px-4 sm:px-8 lg:px-24 transition-all duration-1000 ease-out bg-white border-t border-stone-200/50 ${
          isScrolledDown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32 pointer-events-none'
        }`}
      >
        <div className="mb-8 space-y-4 border-b border-stone-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-cyber tracking-[0.25em] text-[#FF2E16]">
            <span>// </span>OPERATIONAL DIRECTIVES 
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
            <h2 className="text-3xl sm:text-4xl font-cyber font-black tracking-tight text-[#111111]">
              CLASSIFIED PROJECTS
            </h2>
            
            {/* TABS CONTROLLER */}
            <div className="flex flex-wrap gap-2 font-cyber text-[9px] font-bold tracking-wider">
              {['ALL', 'WEB CORE', 'CMS PORTAL', 'AUTOMATION', 'OTHER'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectFilter(cat)}
                  className={`px-3 py-1 border transition-all duration-200 cursor-pointer ${
                    activeProjectFilter === cat 
                      ? 'bg-[#111111] text-white border-[#111111]' 
                      : 'border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dense Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group border border-stone-200 p-5 flex flex-col justify-between h-[210px] transition-all duration-300 hover:border-[#FF2E16] hover:shadow-lg bg-white relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-stone-200 group-hover:bg-[#FF2E16] transition-colors"></div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[9px] font-cyber">
                  <span className="text-stone-400 group-hover:text-[#FF2E16] transition-colors font-bold">
                    SYS.LOG//0{project.id}
                  </span>
                  <span className="text-stone-500 tracking-wider">
                    [{project.category}]
                  </span>
                </div>
                <div>
                  <h3 className="font-cyber font-black text-sm text-stone-950 tracking-tight uppercase group-hover:text-[#FF2E16] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed font-semibold sm:font-medium tracking-wide line-clamp-2">
                  {project.desc}
                </p>
              </div>

              <div className="border-t border-stone-100 pt-3 flex justify-between items-center text-[9px] font-cyber text-stone-400">
                <span className="font-bold text-emerald-600 tracking-widest">{project.status}</span>
                <button 
                  onClick={() => setSelectedProjectForModal(project)}
                  className="font-bold text-stone-900 group-hover:translate-x-1 transition-transform cursor-pointer group-hover:text-[#FF2E16]"
                >
                  VIEW DETAILS &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AESTHETIC PROJECT DETAIL MODAL ================= */}
      {selectedProjectForModal && (
        <div 
          className="fixed inset-0 z-50 flex justify-center items-center p-4 transition-all duration-300 ease-out"
          style={{ opacity: selectedProjectForModal ? 1 : 0, visibility: selectedProjectForModal ? 'visible' : 'hidden' }}
        >
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-lg" onClick={() => setSelectedProjectForModal(null)}></div>
          
          {/* Modal Container */}
          <div className="relative bg-white border-2 border-[#FF2E16] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-[#FF2E16]/30 animate-modal-zoom rounded-sm group">
            {/* Header Taktis */}
            <div className="flex justify-between items-center bg-stone-950 text-stone-100 p-4 border-b border-[#FF2E16]">
              <div className="flex items-center gap-3 font-cyber text-[10px] tracking-widest font-black uppercase text-stone-200">
                <span>[LOG ENTRY//0{selectedProjectForModal.id}]</span>
                <span>[{selectedProjectForModal.category}]</span>
              </div>
              <button 
                onClick={() => setSelectedProjectForModal(null)}
                className="text-stone-400 hover:text-[#FF2E16] text-xl font-bold transition-colors cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-8">
              <div className="md:col-span-7 h-[30vh] md:h-[50vh] overflow-hidden border border-stone-200 group-hover:border-[#FF2E16] transition-colors rounded-sm">
                <img 
                  src={selectedProjectForModal.imageUrl} 
                  alt={selectedProjectForModal.title} 
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="md:col-span-5 flex flex-col justify-between gap-6">
                <div className="space-y-6">
                  <span className="font-cyber text-[11px] font-bold text-[#FF2E16] tracking-[0.2em] block">// COMPILED DATA_VIEW //</span>
                  <h2 className="font-cyber font-black text-2xl text-stone-950 tracking-tight uppercase">{selectedProjectForModal.title}</h2>
                  <div className="w-16 h-[2px] bg-stone-900"></div>
                  <p className="text-sm text-stone-700 leading-relaxed font-semibold sm:font-medium tracking-wide">
                    {selectedProjectForModal.desc}
                    <br/><br/>
                    Detailed architectural deployment log: [ENCRYPTED DATA PATH]. This operational mandate was successfully validated via core systems protocols on secure network grids, fulfilling all strategic objectives without any discernible compromise to Garden infrastructure integrity models. Operational summary data remains classified.
                  </p>
                </div>
                
                <div className="border-t border-stone-100 pt-5 flex justify-between items-center text-[11px] font-cyber text-stone-400">
                  <span className="font-bold text-emerald-600 tracking-widest">{selectedProjectForModal.status}</span>
                  <a href="#" target="_blank" className="font-bold text-stone-900 hover:text-[#FF2E16] transition-colors cursor-pointer">LAUNCH PROJECT PAGE &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-0 w-2 h-24 bg-[#FF2E16] -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-2 h-24 bg-[#FF2E16] -translate-y-1/2"></div>
          </div>
        </div>
      )}
    </>
  );
}