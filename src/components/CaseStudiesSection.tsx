import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const caseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace Mode',
    type: 'Imagining a fully integrated AI browser',
    coverImg: '/case-studies/mozilla/Meet Workspace Mode Cover photo.png',
    device: 'macbook',
    logo: {
      src: '/logos/Mozilla logo.png',
      size: '70px',
    }
  },
  {
    id: 'loblaws',
    title: 'Digital and Physical Shelf-Tagging Guide',
    type: 'Design Strategy',
    coverImg: '/case-studies/Loblaws cover.png',
    device: 'macbook',
    logo: {
      src: '/logos/Loblaws logo.png',
      size: '120px',
    }
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    type: 'Proposed Video Walkthrough Feature',
    coverImg: '/case-studies/airbnb cover.png',
    device: 'macbook',
    logo: {
      src: '/logos/Airbnb logo.png',
      size: '60px',
    }
  },
  {
    id: 'indigo',
    title: 'Indigo',
    type: 'Conceptual Community Book Club Feature',
    coverImg: '/case-studies/Indigo Bookstore App – UI & Marketing Case Study (1)/indigo cover.png',
    device: 'mobile-new',
    logo: {
      src: '/logos/Vector.png',
      size: '80px',
    }
  }
];

function StickerCard({ study }: { study: typeof caseStudies[0] }) {
  const deviceFrameClass = {
    macbook: 'macbook-frame desktop-browser-frame',
    'mobile-new': 'iphone-16-frame'
  }[study.device] || 'tablet-skeu-frame tablet-frame';

  const cardWidth = {
    macbook: '480px',
    'mobile-new': '220px'
  }[study.device] || '380px';

  return (
    <div
      className="group relative shrink-0"
      style={{ width: cardWidth }}
    >
      <Link to={`/case-study/${study.id}`} className="block cursor-pointer">
        <motion.div
          className={`relative bg-white shadow-xl transition-shadow duration-300 group-hover:shadow-2xl ${deviceFrameClass}`}
          whileHover={{ scale: 1.03, zIndex: 10 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <div className="w-full h-full bg-gray-900">
            <img src={study.coverImg} alt={study.title} className="w-full h-full object-cover object-top" />
          </div>
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
  const scrollRef = useRef(null);
  const x = useMotionValue(0);

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
      
      <div className="w-full overflow-x-auto cursor-grab active:cursor-grabbing" ref={scrollRef}>
        <motion.div
          className="flex w-max gap-12 px-8"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: -((caseStudies.length * 520) - window.innerWidth + 200),
            right: 0
          }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          {caseStudies.map((study) => (
            <StickerCard key={study.id} study={study} />
          ))}
        </motion.div>
      </div>
      
      <div className="text-center mt-24">
        <div className="flex justify-center items-center gap-8 mb-8">
          {caseStudies.map((study) => (
            <motion.img
              key={study.id}
              src={study.logo.src}
              alt={`${study.title} logo`}
              className="h-8 object-contain"
              style={{ height: parseFloat(study.logo.size) / 2 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </div>
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center justify-center gap-3 bg-[#FF8CD1] text-black rounded-full px-10 py-5 text-sm font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg">
          Let's Build Something
        </a>
      </div>
    </section>
  );
}