import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace Mode',
    type: 'Imagining a fully integrated AI browser',
    coverImg: '/case-studies/mozilla/Meet Workspace Mode Cover photo.png',
    device: 'macbook',
    layout: {
      width: '35%',
      zIndex: 2,
      transform: 'rotate(-2.5deg) translateX(-5%)',
    },
    logo: {
      src: '/logos/Mozilla logo.png',
      position: { top: '-50px', right: '-60px' },
      size: '140px',
      rotate: -10
    }
  },
  {
    id: 'loblaws',
    title: 'Digital and Physical Shelf-Tagging Guide',
    type: 'Design Strategy',
    coverImg: '/case-studies/loblaws_cover.png',
    device: 'tablet',
     layout: {
      width: '32%',
      zIndex: 1,
      transform: 'rotate(3deg) translateX(-20%) translateY(-5%)',
    },
    logo: {
      src: '/logos/Loblaws logo.png',
      position: { top: '20px', left: '-80px' },
      size: '200px',
      rotate: 5
    }
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    type: 'Proposed Video Walkthrough Feature',
    coverImg: '/case-studies/airbnb_cover.png',
    device: 'tablet',
    layout: {
      width: '32%',
      zIndex: 2,
      transform: 'rotate(-2deg) translateX(-18%) translateY(5%)',
    },
    logo: {
      src: '/logos/Airbnb logo.png',
      position: { top: '0px', right: '-50px' },
      size: '120px',
      rotate: -5
    }
  },
  {
    id: 'indigo',
    title: 'Indigo',
    type: 'Conceptual Community Book Club Feature',
    coverImg: '/case-studies/Indigo Bookstore App – UI & Marketing Case Study (1)/indigo cover.png',
    device: 'mobile',
    layout: {
      width: '18%',
      zIndex: 3,
      transform: 'rotate(4deg) translateX(-45%) translateY(15%)',
    },
    logo: {
      src: '/logos/Vector.png',
      position: { bottom: '60px', right: '-120px' },
      size: '280px',
      rotate: 10
    }
  }
];

function StickerCard({ study }: { study: typeof caseStudies[0] }) {
  const deviceFrameClass = {
    macbook: 'macbook-frame desktop-browser-frame rounded-[18px]',
    tablet: 'tablet-frame rounded-[18px]',
    mobile: 'mobile-frame rounded-[28px]'
  }[study.device];

  return (
    <motion.div
      className="group relative"
      style={{
        width: study.layout.width,
        zIndex: study.layout.zIndex,
      }}
      initial={{ transform: study.layout.transform, scale: 1 }}
      whileHover={{ scale: 1.03, zIndex: 20 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <Link to={`/case-study/${study.id}`} className="block cursor-pointer">
        <motion.div
          className={`relative bg-white shadow-xl transition-shadow duration-300 group-hover:shadow-2xl ${deviceFrameClass}`}
        >
          <div className="w-full h-full bg-gray-900 overflow-hidden rounded-b-[18px]">
            <img src={study.coverImg} alt={study.title} className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-serif text-black leading-tight">{study.title}</h3>
          <p className="font-sans text-xs text-gray-500 mt-1">{study.type}</p>
        </div>
      </Link>
      
      <motion.img 
        src={study.logo.src}
        className="absolute z-[-1] drop-shadow-md pointer-events-none"
        style={{ 
          ...study.logo.position,
          width: study.logo.size,
          height: 'auto'
        }}
        initial={{ rotate: study.logo.rotate, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      />
    </motion.div>
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
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-row justify-center items-center w-full min-h-[500px]">
          {caseStudies.map((study) => (
            <StickerCard key={study.id} study={study} />
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