import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'mozilla',
    title: 'Mozilla Workspace Mode',
    type: 'Graduate Capstone',
    coverImg: '/case-studies/mozilla/Meet Workspace Mode Cover photo.png',
    tags: ['UX Design', 'Graduate Capstone', 'Prototyping', 'AI Integration'],
    rotation: -1.5,
    device: 'desktop',
    logo: {
      src: '/logos/mozilla_raw.png',
      className: 'w-[120px] h-[100px] -top-8 -right-8',
      crop: true,
    },
    glowColor: 'rgba(255, 195, 0, 0.3)'
  },
  {
    id: 'loblaws',
    title: 'Loblaws',
    type: 'Design Strategy',
    coverImg: '/case-studies/loblaws/7.png',
    tags: ['Design Systems', 'Interaction Design', 'Agile Strategy'],
    rotation: 2,
    device: 'tablet',
    logo: {
      src: '/logos/loblaws_raw.png',
      className: 'w-[150px] h-[35px] -bottom-5 -right-10',
      crop: true,
    },
    glowColor: 'rgba(228, 0, 43, 0.25)'
  },
  {
    id: 'indigo',
    title: 'Indigo Book Club',
    type: 'UI & Marketing',
    coverImg: '/case-studies/Indigo Bookstore App – UI & Marketing Case Study (1)/indigo cover.png',
    tags: ['UI Design', 'Interaction Design', 'Manual Ideation'],
    rotation: 1.5,
    device: 'mobile',
    logo: {
      src: '/logos/indigo_logo.png',
      className: 'w-[140px] h-[110px] -bottom-10 -left-8',
      crop: false,
    },
    glowColor: 'rgba(0, 70, 128, 0.25)'
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    type: 'Feasibility Analysis',
    coverImg: '/case-studies/airbnb case study cover.png',
    tags: ['UX Research', 'Feasibility Analysis', 'Business Strategy'],
    rotation: -2,
    device: 'tablet',
    logo: {
      src: '/logos/airbnb_logo.png',
      className: 'w-[90px] h-[90px] -top-10 -left-10',
      crop: false,
    },
    glowColor: 'rgba(255, 90, 95, 0.25)'
  }
];

function StickerCard({ study }: { study: typeof caseStudies[0] }) {
  const deviceFrameClass = {
    desktop: 'desktop-browser-frame',
    tablet: 'tablet-frame',
    mobile: 'mobile-frame'
  }[study.device];

  return (
    <Link 
      to={`/case-study/${study.id}`}
      className="group sticker-card relative w-[400px] max-w-[90vw] bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6"
      style={{ transform: `rotate(${study.rotation}deg)` }}
    >
      <div 
        className="absolute -inset-16 blur-3xl -z-10 rounded-full"
        style={{ background: study.glowColor }}
      ></div>

      <div className={`relative ${deviceFrameClass} w-full bg-gray-100 rounded-lg overflow-hidden shadow-inner`}>
        <img src={study.coverImg} alt={study.title} className="w-full h-full object-cover" />
      </div>

      <div className={`absolute ${study.logo.className} z-20`}>
        {study.logo.crop ? (
          <div className="w-full h-full overflow-hidden">
            <img src={study.logo.src} alt={`${study.title} logo`} className="w-auto h-auto max-w-none" />
          </div>
        ) : (
          <img src={study.logo.src} alt={`${study.title} logo`} className="w-full h-full" />
        )}
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-serif text-black">{study.title}</h3>
          <p className="font-sans text-sm text-gray-500">{study.type}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-start">
          {study.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-white/70 backdrop-blur-md border border-gray-200 text-gray-600 text-[9px] uppercase tracking-widest font-bold rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudiesSection() {
  return (
    <section id="projects" className="relative py-24 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
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
      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        {caseStudies.map((study) => (
          <StickerCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}