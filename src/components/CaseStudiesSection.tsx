import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace Mode',
    type: 'Imagining a fully integrated AI browser',
    coverImg: '/case-studies/mozilla/Meet Workspace Mode Cover photo.png',
    device: 'macbook',
    logo: {
      src: '/logos/Mozilla logo.png',
      position: { top: '35px', right: '15px' },
      size: '60px',
    }
  },
  {
    id: 'loblaws',
    title: 'Digital and Physical Shelf-Tagging Guide',
    type: 'Design Strategy',
    coverImg: '/case-studies/loblaws_cover.png',
    device: 'tablet',
    logo: {
      src: '/logos/Loblaws logo.png',
      position: { top: '25px', left: '25px' },
      size: '100px',
    }
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    type: 'Proposed Video Walkthrough Feature',
    coverImg: '/case-studies/airbnb_cover.png',
    device: 'tablet',
    logo: {
      src: '/logos/Airbnb logo.png',
      position: { top: '25px', left: '25px' },
      size: '50px',
    }
  },
  {
    id: 'indigo',
    title: 'Indigo',
    type: 'Conceptual Community Book Club Feature',
    coverImg: '/case-studies/Indigo Bookstore App – UI & Marketing Case Study (1)/indigo cover.png',
    device: 'mobile',
    logo: {
      src: '/logos/Vector.png',
      position: { bottom: '25px', right: '25px' },
      size: '100px',
    }
  }
];

// Duplicate for seamless scroll
const duplicatedCaseStudies = [...caseStudies, ...caseStudies];

function StickerCard({ study }: { study: typeof caseStudies[0] }) {
  const deviceFrameClass = {
    macbook: 'macbook-frame desktop-browser-frame',
    tablet: 'tablet-skeu-frame tablet-frame',
    mobile: 'iphone-frame mobile-frame'
  }[study.device];

  const cardWidth = {
    macbook: '450px',
    tablet: '380px',
    mobile: '220px'
  }[study.device];

  return (
    <div
      className="group relative shrink-0"
      style={{ width: cardWidth }}
    >
      <Link to={`/case-study/${study.id}`} className="block cursor-pointer">
        <motion.div
          className={`relative bg-white shadow-xl transition-shadow duration-300 group-hover:shadow-2xl ${deviceFrameClass}`}
          whileHover={{ scale: 1.03, zIndex: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <div className="w-full h-full bg-gray-900 overflow-hidden rounded-b-[18px]">
            <img src={study.coverImg} alt={study.title} className="w-full h-full object-cover object-top" />
          </div>
           <motion.img 
            src={study.logo.src}
            className="absolute z-[10] drop-shadow-md pointer-events-none"
            style={{ 
              ...study.logo.position,
              width: study.logo.size,
              height: 'auto'
            }}
          />
        </motion.div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-serif text-black leading-tight">{study.title}</h3>
          <p className="font-sans text-xs text-gray-500 mt-1">{study.type}</p>
        </div>
      </Link>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-4xl md:text-6xl font-serif tracking-tight text-[#111] text-center"
        >
          Selected Works
        </motion.h2>
      </div>
      
      <div className="w-full flex overflow-hidden group">
        <div className="flex w-max gap-24 px-12 animate-carousel hover:[animation-play-state:paused]">
          {duplicatedCaseStudies.map((study, index) => (
            <StickerCard key={`${study.id}-${index}`} study={study} />
          ))}
        </div>
      </div>

      <div className="text-center mt-24">
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center justify-center gap-3 bg-[#FF8CD1] text-black rounded-full px-10 py-5 text-sm font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg">
          Let's Build Something
        </a>
      </div>
    </section>
  );
}