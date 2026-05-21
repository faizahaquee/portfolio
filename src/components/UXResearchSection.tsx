import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: 'loblaws',
    title: 'Loblaws',
    type: 'Project Management',
    coverImg: '/case-studies/loblaws case study cover.png',
    tags: ['Project Management', 'Sprint Methodologies', 'Google Gemini'],
    description: 'A comprehensive project detailing design systems thinking and cross functional agile strategy, utilizing Google Gemini for deep strategic thinking.',
  },
  {
    id: 'partiful',
    title: 'Partiful App',
    type: 'UX Audit',
    coverImg: '/case-studies/partiful case study cover.png',
    tags: ['UX Research', 'Deep Thinking', 'Heuristic Evaluation'],
    description: 'A comprehensive UX audit and heuristic evaluation of the Partiful app, analyzing user mental models and accessibility.',
  },
  {
    id: 'airbnb',
    title: 'Airbnb Feasibility Analysis',
    type: 'Feasibility Analysis',
    coverImg: '/case-studies/airbnb case study cover.png',
    tags: ['UX Research', 'Feasibility Analysis', 'Business Strategy'],
    description: 'A thorough feasibility analysis evaluating the viability and strategic implementation of new Airbnb features.',
  }
];

const ALL_TAGS = ['All', ...Array.from(new Set(caseStudies.flatMap(s => s.tags)))];

export default function UXResearchSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(activeFilter));

  return (
    <section id="ux-research" className="py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#111] mb-4">UX Research &<br/><span className="italic text-[#FF8CD1]">Project</span> Management</h2>
          </div>
          
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
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto justify-items-center">
          <AnimatePresence>
            {filteredStudies.map((study) => (
              <motion.div 
                layout
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col items-center"
              >
                {/* Minimalist Presentation Mockup Frame */}
                <Link to={`/case-study/${study.id}`} className="block w-full aspect-[4/3] rounded-3xl border-[12px] border-black bg-black overflow-hidden relative shadow-2xl transition-transform duration-300 group-hover:-translate-y-4 group-hover:ring-4 group-hover:ring-[#FF8CD1]/50">
                  {study.coverImg ? (
                    <div className="w-full h-full bg-white relative">
                      <img src={study.coverImg} alt={study.title} className="w-full h-full object-contain p-2 relative z-10" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <h3 className="text-4xl font-serif text-center">{study.title}</h3>
                    </div>
                  )}
                </Link>
                
                <div className="mt-8 text-center max-w-md">
                  <h3 className="text-2xl font-serif mb-3">{study.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-sans font-bold text-gray-500 tracking-widest border border-gray-200 px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-base font-sans text-gray-500 mb-6 h-16">{study.description}</p>
                  <Link to={`/case-study/${study.id}`} className="inline-block border-b border-black pb-1 text-sm font-sans font-medium hover:text-[#FF8CD1] hover:border-[#FF8CD1] transition-colors uppercase tracking-widest">
                    Read Case Study
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}