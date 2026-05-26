import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allCaseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace Mode',
    type: 'Imagining a fully integrated AI browser',
    description: 'A 2-week intensive design sprint pitching a context-aware, proactive AI browsing experience centered on transparency and privacy for Mozilla.',
    coverImg: '/case-studies/mozilla/Meet Workspace Mode Cover photo.png',
    device: 'macbook',
    logo: {
      src: '/logos/Mozilla logo.png',
      size: '40px',
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
      size: '80px',
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
      size: '35px',
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
      size: '50px',
    }
  }
];

const featuredStudy = allCaseStudies.find(cs => cs.id === 'mozilla');
const carouselStudies = allCaseStudies.filter(cs => cs.id !== 'mozilla');
const duplicatedCarouselStudies = [...carouselStudies, ...carouselStudies];

function CarouselCard({ study }: { study: typeof allCaseStudies[0] }) {
  const deviceFrameClass = {
    macbook: 'macbook-frame desktop-browser-frame rounded-[18px]',
    'mobile-new': 'iphone-16-frame'
  }[study.device] || 'tablet-skeu-frame tablet-frame';

  const cardWidth = {
    macbook: '420px',
    'mobile-new': '200px'
  }[study.device] || '360px';

  return (
    <div className="group relative shrink-0" style={{ width: cardWidth }}>
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
        <div className="text-center mt-4 flex items-center justify-center gap-3">
          <img src={study.logo.src} alt={`${study.title} logo`} style={{ height: study.logo.size }} className="object-contain" />
          <div>
            <h3 className="text-lg font-serif text-black leading-tight text-left">{study.title}</h3>
            <p className="font-sans text-xs text-gray-500 mt-1 text-left">{study.type}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function CaseStudiesSection() {
  if (!featuredStudy) return null;

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

      {/* Tier 1: Featured Project */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Link to={`/case-study/${featuredStudy.id}`} className="block cursor-pointer group">
            <div className="relative macbook-frame desktop-browser-frame bg-white shadow-2xl rounded-[18px]">
              <div className="w-full h-full bg-gray-900 rounded-b-[18px]">
                <img src={featuredStudy.coverImg} alt={featuredStudy.title} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left"
        >
          <div className="flex items-center gap-4 mb-4">
            <img src={featuredStudy.logo.src} alt={`${featuredStudy.title} logo`} style={{ height: featuredStudy.logo.size }} className="object-contain" />
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-black">{featuredStudy.title}</h3>
              <p className="font-sans text-sm text-gray-500">{featuredStudy.type}</p>
            </div>
          </div>
          <p className="font-sans text-gray-600 mb-6 max-w-md">{featuredStudy.description}</p>
          <Link to={`/case-study/${featuredStudy.id}`} className="inline-block bg-[#FF8CD1] text-black rounded-full px-6 py-3 text-xs font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            View Case Study
          </Link>
        </motion.div>
      </div>

      {/* Tier 2: Supporting Projects Carousel */}
      <div className="w-full overflow-x-auto cursor-grab active:cursor-grabbing group">
        <div className="flex w-max gap-12 px-8 animate-carousel group-hover:[animation-play-state:paused]">
          {duplicatedCarouselStudies.map((study, index) => (
            <CarouselCard key={`${study.id}-${index}`} study={study} />
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