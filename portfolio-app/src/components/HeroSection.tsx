import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* Top Nav - Now Sticky! */}
      <nav className="fixed top-6 left-6 right-6 md:left-12 md:right-12 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-widest font-sans font-bold z-[100]">
        <span className="text-[#111] z-10 drop-shadow-sm">©2026</span>
        <span className="hidden md:inline text-[#111] z-10 drop-shadow-sm">Faiza Haque</span>
        <span className="text-[#111] z-10 drop-shadow-sm">UX Researcher</span>
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
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-3 hover:bg-[#FF8CD1] hover:text-white transition-colors text-black text-xs"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

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
        <div className="relative z-10 mb-24">
          <div className="flex flex-col text-center md:text-left text-[16vw] md:text-[9rem] lg:text-[11.5rem] leading-[0.8] tracking-tight font-serif text-[#111] relative pointer-events-none selection:bg-[#FF8CD1] selection:text-white z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:ml-[8%]"
            >
              Creative
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:-ml-[2%] z-10"
            >
              UX Researcher
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:ml-[20%] z-10"
            >
              <span className="italic text-[#FF8CD1]">Systems</span> Designer
            </motion.div>
          </div>
        </div>

        {/* Bottom Text Block with Frosted Glass */}
        <div className="max-w-2xl font-serif text-3xl md:text-[2.75rem] leading-[1.15] md:ml-[8%] relative z-20 p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] border border-white/50 pointer-events-none">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-black mb-8"
          >
            I'm Faiza, a Waterloo-based multidisciplinary designer specializing in Systems Thinking and Interaction Design.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-600 mb-8"
          >
            Holding a Master's in Digital Experience Innovation at the University of Waterloo, I focus on building inclusive, end-to-end digital experiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
}