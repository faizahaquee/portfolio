import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mouse position for cursor glow
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150); // offset by half the width of the glow
      cursorY.set(e.clientY - 150);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  const floatingImages = [
    { src: '/sticker_0.png', className: 'w-24 md:w-32 rotate-[-8deg] top-[5%] left-[8%]' },
    { src: '/sticker_2.png', className: 'w-32 md:w-48 rotate-[12deg] top-[35%] right-[5%]' },
    { src: '/sticker_5.png', className: 'w-24 md:w-36 rotate-[-15deg] bottom-[25%] left-[30%]' },
    { src: '/sticker_8.png', className: 'w-28 md:w-40 rotate-[5deg] bottom-[10%] right-[15%]' }
  ];

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

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] bg-[var(--color-bg-base)] overflow-hidden flex flex-col pt-6 px-6 md:px-12">
      
      {/* Background Gray Wave Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div 
          animate={{ 
            x: ['-5%', '5%', '-5%'], 
            y: ['-5%', '10%', '-5%'],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gray-300 blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ 
            x: ['5%', '-5%', '5%'], 
            y: ['10%', '-5%', '10%'],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gray-400 blur-[120px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ 
            x: ['-10%', '10%', '-10%'], 
            y: ['-10%', '5%', '-10%'],
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-gray-200 blur-[150px] mix-blend-multiply"
        />
      </div>

      {/* Mouse Follow Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-pink-300/30 rounded-full blur-[80px] pointer-events-none z-50 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Top Nav - Now Sticky! */}
      <nav className="fixed top-6 left-6 right-6 md:left-12 md:right-12 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-widest font-sans font-bold z-[100] bg-white/50 backdrop-blur-md rounded-full shadow-lg p-2">
        <span className="text-[#111] z-10 drop-shadow-sm">©2026</span>
        <span className="hidden md:inline text-[#111] z-10 drop-shadow-sm">Faiza Haque</span>
        <span className="text-[#111] z-10 drop-shadow-sm">Product Designer</span>
        <div className="relative z-20">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="border border-[#111] backdrop-blur-sm rounded-full px-5 py-2 hover:bg-[#111] hover:text-white transition-colors text-[#111] font-semibold uppercase tracking-widest bg-white/80"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 top-12 bg-white border border-gray-200 shadow-2xl rounded-2xl w-48 py-4 flex flex-col overflow-hidden"
              >
                {menuLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => {
                      setMenuOpen(false);
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-left px-6 py-3 hover:bg-[#FF8CD1] hover:text-white transition-colors text-black text-xs font-sans uppercase tracking-widest"
                  >
                    {link.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-start pt-24 max-w-7xl mx-auto w-full relative z-10 pb-10">
        
        {/* Floating Images (Draggable) */}
        {floatingImages.map((img, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={containerRef}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
            whileHover={{ scale: 1.05, zIndex: 40, cursor: 'grab' }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
            className={`absolute z-10 hidden lg:block ${img.className}`}
          >
            <img src={img.src} className="w-full h-full object-contain pointer-events-none drop-shadow-xl" alt="Decorative Sticker" />
          </motion.div>
        ))}

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