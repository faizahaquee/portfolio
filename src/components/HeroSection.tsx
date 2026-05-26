import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const floatingStarStickers = [
    { src: '/stickers/sticker_0.png', className: 'w-24 md:w-32 rotate-[-8deg] top-[5%] left-[8%]' },
    { src: '/stickers/sticker_2.png', className: 'w-32 md:w-48 rotate-[12deg] top-[35%] right-[5%]' },
    { src: '/stickers/sticker_5.png', className: 'w-24 md:w-36 rotate-[-15deg] bottom-[25%] left-[30%]' },
    { src: '/stickers/sticker_8.png', className: 'w-28 md:w-40 rotate-[5deg] bottom-[10%] right-[15%]' }
  ];

  const toolStickers = [
    { src: '/stickers/react.png', name: 'React' },
    { src: '/stickers/figma.png', name: 'Figma' },
    { src: '/stickers/adobe-cc.png', name: 'Adobe CC' },
    { src: '/stickers/pinterest.png', name: 'Pinterest' },
    { src: '/stickers/are-na.png', name: 'Are.na' }
  ];

  const skills = [
    { name: 'AI INTEGRATION', desc: 'Leveraging AI tools to accelerate research, ideation, and development.' },
    { name: 'SYSTEMS THINKING', desc: 'Creating scalable and cohesive design systems for consistent user experiences.' },
    { name: 'PRODUCT DEVELOPMENT', desc: 'Guiding projects from initial concept through to final launch and iteration.' },
    { name: 'DESIGN THINKING', desc: 'Applying a human-centered approach to solve complex user problems.' },
    { name: 'UX RESEARCH', desc: 'Conducting in-depth research to inform data-driven design decisions.' },
    { name: 'RAPID PROTOTYPING', desc: 'Quickly building and testing interactive mockups to validate ideas.' }
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
        
        {/* Floating Star Stickers */}
        {floatingStarStickers.map((img, i) => (
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

        {/* Typography and Central Content */}
        <div className="relative z-10 mb-24 mt-16 flex flex-col items-center">
          
            <div className="max-w-2xl font-serif text-2xl md:text-3xl leading-[1.3] relative z-20 p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] pointer-events-auto mt-12 text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-black"
            >
              "For me, design isn't just about making things look good. It's about figuring out how to build digital spaces that feel intuitive, inclusive, and trustworthy."
            </motion.p>
          </div>

          {/* Core Competencies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-2xl mt-8 relative z-20 pointer-events-auto flex flex-wrap gap-2 justify-center"
          >
            {skills.map(skill => (
              <div key={skill.name} className="relative group">
                <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md border border-white/50 text-gray-800 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-white hover:border-[#FF8CD1] transition-colors cursor-help shadow-sm">
                  {skill.name}
                </span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-[#111] text-white text-[10px] font-sans px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 text-center shadow-xl">
                  {skill.desc}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#111]"></div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tool Stickers Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            {toolStickers.map(tool => (
              <motion.div key={tool.name} whileHover={{ scale: 1.1, y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <img src={tool.src} alt={tool.name} className="h-8 md:h-10 object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}