import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const caseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace Mode',
    type: 'Imagining a fully integrated AI browser',
    coverImg: '/case-studies/mozilla/Meet Workspace Mode Cover photo.png',
    tags: ['UX Design', 'Prototyping', 'AI Integration'],
    rotation: -1.5,
    device: 'macbook',
    flexBasis: '38%',
    logo: {
      src: '/logos/mozilla_logo.png',
      position: { top: '-40px', right: '-40px' },
      size: '120px'
    },
    gradient: 'radial-gradient(ellipse 40% 50% at 20% -10%, rgba(255, 128, 0, 0.2), transparent, transparent)'
  },
  {
    id: 'loblaws',
    title: 'Loblaws Digital and Physical shelving experience',
    type: 'Design Strategy',
    coverImg: '/case-studies/loblaws/7.png',
    tags: ['Design Systems', 'Agile Strategy'],
    rotation: 2,
    device: 'tablet',
    flexBasis: '24%',
    logo: {
      src: '/logos/loblaws_logo.png',
      position: { top: '-30px', left: '-30px' },
      size: '120px'
    },
    gradient: 'radial-gradient(ellipse 40% 50% at 20% -10%, rgba(228, 0, 43, 0.15), transparent, transparent)'
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    type: 'Proposed Video Walkthrough Feature',
    coverImg: '/case-studies/airbnb case study cover.png',
    tags: ['UX Research', 'Business Strategy'],
    rotation: -2,
    device: 'tablet',
    flexBasis: '24%',
    logo: {
      src: '/logos/airbnb_logo.png',
      position: { bottom: '-40px', right: '-35px' },
      size: '110px'
    },
    gradient: 'radial-gradient(ellipse 40% 50% at 80% 90%, rgba(255, 90, 95, 0.15), transparent, transparent)'
  },
  {
    id: 'indigo',
    title: 'Indigo Book Club',
    type: 'UI & Marketing',
    coverImg: '/case-studies/Indigo Bookstore App – UI & Marketing Case Study (1)/indigo cover.png',
    tags: ['UI Design', 'Interaction Design'],
    rotation: 1.5,
    device: 'mobile',
    flexBasis: '14%',
    logo: {
      src: '/logos/indigo_logo.png',
      position: { bottom: '-35px', left: '-30px' },
      size: '120px'
    },
    gradient: 'radial-gradient(ellipse 40% 50% at 80% 90%, rgba(0, 70, 128, 0.15), transparent, transparent)'
  }
];

function StickerCard({ study, onHoverStart, onHoverEnd }: { study: typeof caseStudies[0], onHoverStart: () => void, onHoverEnd: () => void }) {
  const deviceFrameClass = {
    macbook: 'macbook-frame desktop-browser-frame rounded-[18px]',
    tablet: 'tablet-frame rounded-[18px]',
    mobile: 'mobile-frame rounded-[28px]'
  }[study.device];

  return (
    <motion.div
      style={{ flex: `0 0 ${study.flexBasis}` }}
      initial={{ transform: `rotate(${study.rotation}deg)` }}
      whileHover={{ transform: 'rotate(0deg) scale(1.02)', zIndex: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group sticker-card relative cursor-pointer"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <div 
        className="absolute -inset-10 -z-20 w-full h-full opacity-70"
        style={{ background: study.gradient }}
      />
      <Link to={`/case-study/${study.id}`} className="block group">
        <div className={`relative bg-white shadow-lg transition-shadow duration-300 group-hover:shadow-2xl ${deviceFrameClass}`}>
          <div className="w-full h-full bg-gray-900 overflow-hidden rounded-b-[18px]">
            <img src={study.coverImg} alt={study.title} className="w-full h-full object-cover object-top" />
          </div>
          <div className="sticker-text-overlay absolute inset-0 glass-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[18px] flex items-center justify-center text-center p-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {study.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-[9px] uppercase tracking-widest font-bold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
      <div className="text-center mt-4">
        <h3 className="text-lg font-serif text-black leading-tight">{study.title}</h3>
        <p className="font-sans text-xs text-gray-500 mt-1">{study.type}</p>
      </div>
      <motion.img 
        src={study.logo.src}
        className="absolute -z-10"
        style={{ 
          ...study.logo.position,
          width: study.logo.size,
          height: 'auto'
        }}
        initial={{ y: 0, rotate: study.rotation }}
        whileHover={{ y: -10, rotate: 0 }}
      />
    </motion.div>
  );
}

function CustomCursor({ isVisible }: { isVisible: boolean }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-[#FF8CD1] rounded-full z-50 pointer-events-none flex items-center justify-center text-black text-[8px] font-bold uppercase tracking-widest"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      View
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <CustomCursor isVisible={isHovering} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
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
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex flex-row justify-center items-stretch gap-6 w-full overflow-visible">
          {caseStudies.map((study) => (
            <StickerCard 
              key={study.id} 
              study={study}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            />
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