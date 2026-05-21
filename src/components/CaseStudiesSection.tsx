import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: 'lost-in-place',
    title: 'Lost In Place',
    type: 'Game App UI',
    color: 'bg-yellow-500',
    coverImg: '/case-studies/Lost in place game app/map-new.png',
    figmaLink: 'https://www.figma.com/proto/1JwHQnWc4GZj3SYduGA6fN/DEI616-Branding-Guideline?node-id=133-1677&p=f&t=FRqCCLac3MkAzvTz-1&scaling=scale-down&content-scaling=fixed&page-id=72%3A2&starting-point-node-id=176%3A964',
    tags: ['UI Design', 'Figma Make', 'Google Stitch'],
    description: 'A platform where place and personal narratives collide, allowing users to experience culture from the inside.',
  },
  {
    id: 'indigo',
    title: 'Indigo Bookstore',
    type: 'UI & Marketing',
    color: 'bg-blue-600',
    coverImg: '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/indigo cover.png',
    figmaLink: 'https://www.figma.com/proto/FdOTACSQ64baOtSdZ56Pfv/Indigo-Book-Club-UI-Prototype?node-id=1-4&p=f&t=RBDFBbfwdv5TGI0G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
    tags: ['UI Design', 'Interaction Design', 'Manual Ideation'],
    description: 'A comprehensive visual redesign leveraging original ideation and Design Systems Thinking for the Indigo Bookstore app experience.',
  },
  {
    id: 'waterloo-library',
    title: 'Waterloo Library',
    type: 'UX/UI Prototype',
    color: 'bg-teal-500',
    coverImg: '/case-studies/Home Screen.png',
    figmaLink: 'https://www.figma.com/proto/kG9s2zxmrjHX5M5WcevSza/DEI613-A2-Assignment?node-id=55-1970&p=f&t=dt1mYgqenvuulneh-1&scaling=scale-down&content-scaling=fixed&page-id=52%3A1667&starting-point-node-id=55%3A1970&show-proto-sidebar=1',
    tags: ['Inclusive Design', 'Accessibility'],
    description: 'A digital interface applying Inclusive Design to improve navigation and accessibility in the Waterloo Public Library.',
  }
];

const ALL_TAGS = ['All', ...Array.from(new Set(caseStudies.flatMap(s => s.tags)))];

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
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
        className={`block w-full max-w-[280px] rounded-[36px] border-[10px] border-black overflow-hidden relative shadow-2xl transition-transform duration-300 group-hover:-translate-y-4 hover:ring-4 hover:ring-[#FF8CD1]/50 ${study.id === 'lost-in-place' ? 'aspect-[390/844] bg-[#111] border-[12px] !rounded-[42px]' : 'aspect-[9/19] bg-black'}`}
      >
        {/* Notch */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${study.id === 'lost-in-place' ? 'w-24 h-[22px] rounded-b-[18px]' : 'w-28 h-5 rounded-b-[16px]'} bg-black z-20 pointer-events-none`}></div>
        
        {/* Screen Content */}
        <img 
          src={study.coverImg} 
          alt={`${study.title} App Screen`}
          className={`w-full h-full relative z-10 transition-opacity duration-300 ${study.id === 'lost-in-place' ? 'object-cover object-top bg-[#111]' : 'object-cover bg-white'}`}
        />
      </Link>
      
      <div className="mt-8 text-center max-w-xs flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
        <div className="flex flex-wrap gap-1 justify-center mb-4">
          {study.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-6 flex-1 flex items-center justify-center">{study.description}</p>
        
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
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#111] mb-4">UI <span className="italic text-[#FF8CD1]">Prototypes</span> & Case Studies</h2>
          
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
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto justify-items-center">
          <AnimatePresence>
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}