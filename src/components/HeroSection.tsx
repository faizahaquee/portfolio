import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const skills = [
    { name: 'Deep Thinking', desc: 'Analyzing complex problems to uncover underlying patterns.' },
    { name: 'Opencode', desc: 'Accelerating development workflows with AI-driven coding.' },
    { name: 'Figma Make', desc: 'Rapidly prototyping layouts using generative UI tools.' },
    { name: 'Google Gemini', desc: 'Enhancing research and content strategy through AI.' },
    { name: 'Nanobanana', desc: 'Streamlining creative processes for faster iteration.' },
    { name: 'Google Stitch', desc: 'Seamlessly integrating tools and automating processes.' },
    { name: 'Manual Ideation', desc: 'Sketching and exploring foundational concepts by hand.' },
    { name: 'Problem Discovery', desc: 'Identifying true user needs before rushing to solutions.' },
    { name: 'Inclusive Design (AODA)', desc: 'Ensuring accessible digital experiences for all users.' },
    { name: 'Cross-Functional Collaboration', desc: 'Bridging the gap between engineering, product, and design.' }
];

const menuLinks = [
    { name: 'About', href: '#about' },
    { name: 'Selected Works', href: '#projects' },
    { name: 'Graphic Design', href: '#graphic-design' },
    { name: 'Photography', href: '#photography' },
    { name: 'Contact', href: '#contact' },
];

function TopNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNav = (href: string) => {
        setMenuOpen(false);
        if (location.pathname === '/') {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/${href}`);
        }
    };
    
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-6 px-6 md:px-12">
        <Link to="/" className="font-bold text-sm uppercase tracking-widest font-sans hover:text-[#FF8CD1] transition-colors">Faiza Haque</Link>
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-sm">
            <Menu className="w-5 h-5" />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 top-14 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl w-48 py-2 flex flex-col overflow-hidden"
              >
                {menuLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => handleNav(link.href)}
                    className="text-left px-5 py-2.5 hover:bg-[#FF8CD1] hover:text-white transition-colors text-black text-xs font-sans uppercase tracking-widest"
                  >
                    {link.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 550]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] bg-[var(--color-bg-base)] overflow-hidden flex flex-col pt-6 px-6 md:px-12">
      <TopNav />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img src="/stickers/sticker_1.png" alt="Sticker 1" style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-[80px] opacity-80" />
        <motion.img src="/stickers/sticker_2.png" alt="Sticker 2" style={{ y: y2 }} className="absolute top-[50%] left-[2%] w-[120px] opacity-80" />
        <motion.img src="/stickers/sticker_3.png" alt="Sticker 3" style={{ y: y3 }} className="absolute top-[20%] right-[5%] w-[100px] opacity-80" />
        <motion.img src="/stickers/sticker_4.png" alt="Sticker 4" style={{ y: y4 }} className="absolute bottom-[10%] right-[10%] w-[150px] opacity-80" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-start pt-24 max-w-7xl mx-auto w-full relative z-10 pb-10">
        
        {/* Huge Serif Typography */}
        <div className="relative z-10 mb-24 mt-16 flex flex-col items-center">
          <div className="flex flex-col text-center text-[16vw] md:text-[9rem] lg:text-[11.5rem] leading-[0.8] tracking-tight font-serif text-[#111] relative pointer-events-none selection:bg-[#FF8CD1] selection:text-white z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
            >
              <span>Product</span>
              <motion.div 
                whileHover={{ scale: 1.08, rotate: -4, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-[20vw] h-[20vw] md:w-[9rem] md:h-[9rem] lg:w-[11rem] lg:h-[11rem] rounded-full overflow-hidden border-[4px] lg:border-[6px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-auto bg-gray-100"
              >
                <img 
                  src="/me.png" 
                  alt="Faiza" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </motion.div>
              <span>Designer</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="z-10 italic text-[#FF8CD1] mt-4 md:mt-8"
            >
              Faiza Haque
            </motion.div>
          </div>
          
          {/* Value Prop (Moved under title) */}
          <div className="max-w-2xl font-serif text-2xl md:text-3xl leading-[1.3] relative z-20 p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] pointer-events-auto mt-12 text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-black mb-6"
            >
              I help product teams solve complex user challenges by creating scalable design systems and intuitive interfaces.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-600 text-xl"
            >
              Balancing functional needs with beautiful, crafted aesthetics to build inclusive, end-to-end digital experiences.
            </motion.p>
          </div>

          {/* Core Competencies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-2xl mt-8 relative z-20 pointer-events-auto flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {skills.map(skill => (
              <div key={skill.name} className="relative group">
                <span className="inline-block px-3 py-1.5 bg-white/60 backdrop-blur-md border border-white/50 text-gray-800 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-white hover:border-[#FF8CD1] transition-colors cursor-help shadow-sm">
                  {skill.name}
                </span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-[#111] text-white text-[10px] font-sans px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 text-center shadow-xl">
                  {skill.desc}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#111]"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
