import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const backgroundStickers = [
    { src: '/sticker_1.png', className: 'w-24 md:w-32 rotate-[10deg] top-[10%] left-[5%]' },
    { src: '/sticker_3.png', className: 'w-32 md:w-40 rotate-[-15deg] top-[40%] right-[5%]' },
    { src: '/sticker_4.png', className: 'w-20 md:w-28 rotate-[25deg] bottom-[20%] left-[10%]' },
    { src: '/sticker_6.png', className: 'w-24 md:w-36 rotate-[-5deg] bottom-[10%] right-[20%]' },
    { src: '/sticker_10.png', className: 'w-16 md:w-24 rotate-[45deg] top-[20%] left-[45%]' },
  ];

  return (
    <section ref={containerRef} id="about" className="relative py-24 bg-[var(--color-bg-base)] border-t border-gray-100 overflow-hidden">
      
      {/* Background Draggable Stickers */}
      {backgroundStickers.map((img, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
          whileHover={{ scale: 1.05, cursor: 'grab' }}
          className={`absolute z-0 hidden lg:block ${img.className}`}
        >
          <img src={img.src} className="w-full h-full object-contain drop-shadow-lg pointer-events-none" alt="" />
        </motion.div>
      ))}

      {/* Full-screen Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Left Column (Sticky) */}
          <div className="flex flex-col space-y-6 sticky top-32 pb-12 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-[#111]">About Me</h2>
              <div className="w-20 h-1 bg-[#FF8CD1] mt-6"></div>
            </motion.div>
          </div>

          {/* Right Column (Scrolls) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-600 leading-relaxed font-sans font-light pointer-events-auto"
          >
            <p className="text-xl md:text-2xl text-black font-serif mb-8">
              Working with clients throughout the GTA and New York, I’ve developed a practice centred on how people navigate and interact with complex digital systems.
            </p>
            
            <div className="mb-8">
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-3">The Bigger Picture</h3>
              <p>
                When I take on a project, I always try to look at the bigger picture. I want to know why a feature matters to the business, and more importantly, how it impacts the real people using it. Whether I am testing the viability of a new idea or working closely with product and engineering teams in tight sprints, my goal is always to create systems that are scalable and actually make sense for the user.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-3">How I Work</h3>
              <p>
                To keep my focus on the human side of design, I’ve built a workflow that handles the heavy lifting. I use tools like Google Gemini, Figma Make, and Opencode to speed up research synthesis, early visual ideas, and rapid prototyping. By letting these tools handle the repetitive tasks, I can spend my time where it really matters: asking the right questions, refining the details, and testing my designs with real users to ensure I'm building the right thing.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col gap-4">
              <p className="text-lg font-serif">In my spare time, I am always creating, whether it be through graphic design work and photography. Feel free to check some of my work here!</p>
              <div className="flex gap-4">
                <button onClick={() => document.querySelector('#graphic-design')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block border border-black rounded-full px-6 py-2 text-xs font-sans font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  Graphic Design
                </button>
                <button onClick={() => document.querySelector('#photography')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block border border-black rounded-full px-6 py-2 text-xs font-sans font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  Photography
                </button>
              </div>
            </div>

            <div className="pt-12 mt-12 border-t border-gray-200">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center justify-center gap-3 bg-[#FF8CD1] text-black rounded-full px-8 py-4 text-sm font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg w-full md:w-auto">
                Get In Touch
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}