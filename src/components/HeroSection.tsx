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

  const menuLinks = [
    { name: 'About', href: '#about' },
    { name: 'UI Prototypes', href: '#projects' },
    { name: 'UX Research', href: '#ux-research' },
    { name: 'Graphic Design', href: '#graphic-design' },
    { name: 'Photography', href: '#photography' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section ref={containerRef} className="relative w-full min-h-[110vh] bg-[var(--color-bg-base)] overflow-hidden flex flex-col pt-6 px-6 md:px-12">
      
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

      {/* Top Nav (Restored to original absolute position with correct layout) */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-6 px-6 md:px-12">
        <span className="font-bold text-sm uppercase tracking-widest font-sans hover:text-[#FF8CD1] transition-colors cursor-pointer">Faiza Haque</span>
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
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
                    onClick={() => {
                      setMenuOpen(false);
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-start pt-32 max-w-7xl mx-auto w-full relative z-10 pb-20">
        
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
        </div>

      </div>
    </section>
  );
}