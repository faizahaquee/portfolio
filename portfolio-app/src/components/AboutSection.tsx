import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const skills = [
    'Deep Thinking', 'Opencode', 'Figma Make', 'Google Gemini', 'Nanobanana', 
    'Google Stitch', 'Manual Ideation', 'Problem Discovery', 
    'Inclusive Design (AODA)', 'Cross-Functional Collaboration'
  ];

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

            {/* Me PNG (Oblong Frame Design) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 relative flex justify-center md:justify-start"
            >
              <div className="relative group">
                <div className="w-56 md:w-64 aspect-[3/4] bg-white rounded-[4rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 p-3 relative z-10 overflow-hidden mt-0 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-full h-full rounded-[3.2rem] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 bg-gray-100">
                    <img 
                      src="/me.png" 
                      alt="Faiza Haque" 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
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
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-3">A Curated Perspective</h3>
              <p>
                What sets my work apart is a visual vocabulary that extends beyond standard technical logic. I view projects as a form of worldbuilding, where my goal is to make digital tools more inclusive and easier to navigate. This allows me to create cohesive, functional environments where every design decision is backed by intentional research and cross-industry inspiration.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-3">Workflow & Efficiency</h3>
              <p>
                I’ve refined a high-level workflow that integrates AI tools for rapid UI ideation and technical prototyping. By using tools like Gemini, Figma Make, Opencode, and Nanobanana, I can focus more on critical problem-solving and less on manual execution. I’m always looking to learn and optimize my workflow, while staying focused on the entire end-to-end process and the research that informs my design choices.
              </p>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#F8F7F3] border border-gray-200 text-gray-700 text-xs uppercase tracking-widest font-semibold rounded-full hover:border-black transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-col gap-4">
              <p className="text-lg font-serif">In my spare time, I am always creating, whether it be through graphic design work and photography. Feel free to check some of my work here!</p>
              <div className="flex gap-4">
                <a href="#graphic-design" className="inline-block border border-black rounded-full px-6 py-2 text-xs font-sans font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  Graphic Design
                </a>
                <a href="#photography" className="inline-block border border-black rounded-full px-6 py-2 text-xs font-sans font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  Photography
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}