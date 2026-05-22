import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const caseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace Mode',
    type: 'Design Sprint',
    format: 'presentation',
    color: 'bg-yellow-100',
    coverImg: '/case-studies/mozilla/Meet Workspace Mode Cover photo.png',
    figmaLink: 'https://www.figma.com/make/gcFPcMtDKe6H8S8NVR0I7i/Version-2?fullscreen=1&t=dPpu64vBlcoizOau-1',
    tags: ['UX Design', 'Design Sprint', 'Prototyping', 'AI Integration'],
    description: 'A 2-week intensive design sprint proposing a context-aware, proactive AI browsing experience centered on transparency and privacy for Mozilla.',
  },
  {
    id: 'loblaws',
    title: 'Loblaws',
    type: 'Project Management',
    format: 'presentation',
    color: 'bg-orange-100',
    coverImg: '/case-studies/loblaws case study cover.png',
    tags: ['Project Management', 'Sprint Methodologies', 'Google Gemini'],
    description: 'A comprehensive project detailing design systems thinking and cross functional agile strategy, utilizing Google Gemini for deep strategic thinking.',
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    type: 'Feasibility Analysis',
    format: 'presentation',
    color: 'bg-gray-100',
    coverImg: '/case-studies/airbnb case study cover.png',
    tags: ['UX Research', 'Feasibility Analysis', 'Business Strategy'],
    description: 'A thorough feasibility analysis evaluating the viability and strategic implementation of new Airbnb features.',
  },
  {
    id: 'indigo',
    title: 'Indigo: New Book Club Community Feature',
    type: 'UI & Marketing',
    format: 'mobile',
    color: 'bg-blue-600',
    coverImg: '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/indigo cover.png',
    figmaLink: 'https://www.figma.com/proto/FdOTACSQ64baOtSdZ56Pfv/Indigo-Book-Club-UI-Prototype?node-id=1-4&p=f&t=RBDFBbfwdv5TGI0G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
    tags: ['UI Design', 'Interaction Design', 'Manual Ideation'],
    description: 'A comprehensive visual redesign leveraging original ideation and Design Systems Thinking for the Indigo Bookstore app experience.',
  }
];

function BentoCard({ study, span2 = false }: { study: typeof caseStudies[0], span2?: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  
  // Custom cursor logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 25, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        // Calculate position relative to the card container
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
        
        // Check if mouse is within the image container
        if (imageRef.current) {
          const imgRect = imageRef.current.getBoundingClientRect();
          if (
            e.clientX >= imgRect.left && 
            e.clientX <= imgRect.right && 
            e.clientY >= imgRect.top && 
            e.clientY <= imgRect.bottom
          ) {
            setIsImageHovered(true);
          } else {
            setIsImageHovered(false);
          }
        }
      }
    };
    
    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      setIsImageHovered(false);
    };
  }, [isHovered, cursorX, cursorY]);

  // Determine frame style based on format
  const isMobile = study.format === 'mobile';
  
  // Determine if it needs a browser frame (e.g., mozilla)
  const isBrowser = study.id === 'mozilla';
  
  // Tablet frame for others (loblaws, airbnb)
  const isTablet = study.id === 'loblaws' || study.id === 'airbnb';

  return (
    <Link 
      to={`/case-study/${study.id}`}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsImageHovered(false);
      }}
      className={`group relative block w-full bg-[#FAFAFA] border border-gray-200/60 rounded-[32px] overflow-hidden ${isImageHovered ? 'cursor-none' : 'cursor-pointer'} ${span2 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
      style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {/* Custom Hover Cursor Badge */}
      <AnimatePresence>
        {isHovered && isImageHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 pointer-events-none flex items-center justify-center bg-[#FF8CD1] text-black font-sans uppercase font-bold tracking-widest text-[9px] w-24 h-24 rounded-full shadow-2xl text-center leading-tight"
            style={{
              x: springX,
              y: springY,
              translateX: '-50%',
              translateY: '-50%'
            }}
          >
            View<br/>Case Study
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col h-full w-full">
        {/* Media Container (Fixed Height) */}
        <div 
          ref={imageRef}
          className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-gray-50 flex items-center justify-center p-8 md:p-12"
        >
          {isBrowser && (
            <div className="w-full h-full max-w-[800px] border border-gray-200 rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.1)] flex flex-col bg-white group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              {/* Browser Top Bar */}
              <div className="h-8 w-full bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <img src={study.coverImg} alt={study.title} className="w-full h-[calc(100%-32px)] object-cover object-top" />
            </div>
          )}

          {isTablet && (
            <div className="w-full h-full max-w-[600px] border-[12px] border-black rounded-[24px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex flex-col bg-white group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative">
              <img src={study.coverImg} alt={study.title} className="w-full h-full object-cover object-top" />
            </div>
          )}

          {isMobile && (
            <div className="h-full aspect-[9/19] max-h-[400px] border-[10px] border-black rounded-[36px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex flex-col bg-white group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-[16px] bg-black z-20 pointer-events-none"></div>
              <img src={study.coverImg} alt={study.title} className="w-full h-full object-cover object-top" />
            </div>
          )}
        </div>

        {/* High-Density Metadata Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 md:p-8 bg-white/50 backdrop-blur-sm border-t border-gray-100">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-serif text-[#111]">{study.title}</h3>
            <p className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-bold text-gray-400">
              {study.type}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-start md:justify-end max-w-[250px]">
            {study.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-[9px] uppercase tracking-widest font-bold rounded-md">
                {tag}
              </span>
            ))}
            {study.tags.length > 2 && (
              <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-[9px] uppercase tracking-widest font-bold rounded-md">
                +{study.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudiesSection() {
  return (
    <section id="projects" className="py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#111] mb-4">Selected <span className="italic text-[#FF8CD1]">Works</span></h2>
        </div>
        
        {/* Bento Grid Architecture */}
        <motion.div 
          layout 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto items-stretch"
        >
          {caseStudies.map((study, index) => {
            // Asymmetrical span logic:
            // Index 0 (Mozilla) spans 2, Index 1 (Loblaws) spans 1
            // Index 2 (Airbnb) spans 1, Index 3 (Indigo) spans 2
            const isSpan2 = index === 0 || index === 3;
            
            return (
              <BentoCard key={study.id} study={study} span2={isSpan2} />
            );
          })}
        </motion.div>
        
        <div className="pt-24 mt-16 border-t border-gray-100 flex justify-center">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center justify-center gap-3 bg-[#111] text-white rounded-full px-8 py-4 text-sm font-sans font-bold uppercase tracking-widest hover:bg-[#FF8CD1] transition-all shadow-lg">
            Let's build something
          </a>
        </div>
      </div>
    </section>
  );
}