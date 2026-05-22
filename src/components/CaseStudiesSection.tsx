import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace AI',
    type: 'Design Sprint',
    format: 'presentation',
    color: 'bg-yellow-100',
    coverImg: '/case-studies/mozilla/Brainstorming.png',
    figmaLink: 'https://www.figma.com/make/gcFPcMtDKe6H8S8NVR0I7i/Version-2?fullscreen=1&t=dPpu64vBlcoizOau-1',
    tags: ['UX Design', 'Design Sprint', 'Prototyping', 'AI Integration'],
    description: 'A 2-week intensive design sprint proposing a context-aware, proactive AI browsing experience centered on transparency and privacy for Mozilla.',
  },
  {
    id: 'indigo',
    title: 'Indigo Bookstore',
    type: 'UI & Marketing',
    format: 'mobile',
    color: 'bg-blue-600',
    coverImg: '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/indigo cover.png',
    figmaLink: 'https://www.figma.com/proto/FdOTACSQ64baOtSdZ56Pfv/Indigo-Book-Club-UI-Prototype?node-id=1-4&p=f&t=RBDFBbfwdv5TGI0G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
    tags: ['UI Design', 'Interaction Design', 'Manual Ideation'],
    description: 'A comprehensive visual redesign leveraging original ideation and Design Systems Thinking for the Indigo Bookstore app experience.',
  },
  {
    id: 'airbnb',
    title: 'Airbnb Feasibility Analysis',
    type: 'Feasibility Analysis',
    format: 'presentation',
    color: 'bg-gray-100',
    coverImg: '/case-studies/airbnb case study cover.png',
    tags: ['UX Research', 'Feasibility Analysis', 'Business Strategy'],
    description: 'A thorough feasibility analysis evaluating the viability and strategic implementation of new Airbnb features.',
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
  }
];

const ALL_TAGS = ['All', ...Array.from(new Set(caseStudies.flatMap(s => s.tags)))];

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  if (study.format === 'mobile') {
    return (
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className="group flex flex-col items-center"
      >
        {/* Smartphone Mockup Frame */}
        <Link 
          to={`/case-study/${study.id}`}
          className="block w-full max-w-[280px] aspect-[9/19] rounded-[36px] border-[10px] border-black overflow-hidden relative shadow-2xl transition-transform duration-300 group-hover:-translate-y-4 hover:ring-4 hover:ring-[#FF8CD1]/50 bg-black"
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 rounded-b-[16px] bg-black z-20 pointer-events-none"></div>
          
          {/* Screen Content */}
          <img 
            src={study.coverImg} 
            alt={`${study.title} App Screen`}
            className="w-full h-full relative z-10 transition-opacity duration-300 object-cover bg-white"
          />
        </Link>
        <CardContent study={study} />
      </motion.div>
    );
  }

  // Presentation Format (Aspect 4/3)
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col items-center w-full"
    >
      <Link 
        to={`/case-study/${study.id}`} 
        className="block w-full aspect-[4/3] max-w-[400px] rounded-3xl border-[12px] border-black bg-black overflow-hidden relative shadow-2xl transition-transform duration-300 group-hover:-translate-y-4 group-hover:ring-4 group-hover:ring-[#FF8CD1]/50"
      >
        <div className="w-full h-full bg-white relative">
          <img src={study.coverImg} alt={study.title} className="w-full h-full object-contain p-2 relative z-10" />
        </div>
      </Link>
      <CardContent study={study} />
    </motion.div>
  );
}

function CardContent({ study }: { study: typeof caseStudies[0] }) {
  return (
    <div className="mt-8 text-center max-w-xs flex-1 flex flex-col w-full">
      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
      <div className="flex flex-wrap gap-1 justify-center mb-4">
        {study.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-6 flex-1 flex items-start justify-center line-clamp-3">{study.description}</p>
      
      <div className="mt-auto flex flex-col items-center gap-3">
        <Link to={`/case-study/${study.id}`} className="inline-block border-2 border-black rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors w-full">
          Read Case Study
        </Link>
        {study.figmaLink && (
          <a 
            href={study.figmaLink} 
            target="_blank" 
            rel="noreferrer" 
            className="text-[10px] font-sans uppercase tracking-widest font-bold text-gray-400 hover:text-[#FF8CD1] transition-colors"
          >
            Interactive Prototype ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#111] mb-4">Selected <span className="italic text-[#FF8CD1]">Works</span></h2>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 max-w-xl">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-sans font-medium transition-colors ${
                  activeFilter === tag 
                    ? 'bg-[#111] text-white border-2 border-[#111]' 
                    : 'bg-transparent text-gray-500 border-2 border-gray-200 hover:border-gray-800 hover:text-gray-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto justify-items-center items-start">
          <AnimatePresence>
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="pt-24 mt-12 border-t border-gray-100 flex justify-center">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center justify-center gap-3 bg-[#111] text-white rounded-full px-8 py-4 text-sm font-sans font-bold uppercase tracking-widest hover:bg-[#FF8CD1] transition-all shadow-lg">
            Let's build something
          </a>
        </div>
      </div>
    </section>
  );
}