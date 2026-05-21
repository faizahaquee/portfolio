import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GraphicDesignSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const images = [
    { src: '/graphic-designs/CLUB AKIRA LOGO-02.png', className: 'w-40 md:w-56 -top-12 left-[10%]' },
    { src: '/graphic-designs/OPEN LETTER.png', className: 'w-48 md:w-64 top-1/4 right-[5%]' },
    { src: '/graphic-designs/Screenshot 2025-07-12 at 4.28.50 PM.png', className: 'w-36 md:w-48 bottom-1/4 left-[5%]' },
    { src: '/graphic-designs/Screenshot 2025-07-12 at 4.29.05 PM.png', className: 'w-56 md:w-80 -bottom-16 right-[20%]' },
    { src: '/graphic-designs/rose bday poster one.png', className: 'w-32 md:w-48 top-[10%] right-[30%]' },
    { src: '/graphic-designs/rose bday poster 2.png', className: 'w-40 md:w-52 bottom-[5%] left-[40%]' }
  ];

  return (
    <section ref={containerRef} className="py-48 bg-[#111] overflow-hidden relative min-h-[90vh] flex items-center justify-center" id="graphic-design">
      
      {/* Floating Posters with Parallax */}
      {images.map((img, idx) => {
        // Different scroll speeds for parallax effect
        const yOffset = useTransform(scrollYProgress, [0, 1], [100 * (idx % 2 === 0 ? 1 : -1), -100 * (idx % 2 === 0 ? 1 : -1)]);
        
        return (
          <motion.div
            key={idx}
            style={{ y: yOffset }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`absolute z-10 hover:z-30 transition-transform duration-500 hover:scale-110 cursor-pointer shadow-2xl rounded-sm ${img.className}`}
          >
            <div className="relative group w-full h-full">
              <img 
                src={img.src} 
                alt={`Graphic Design Poster ${idx + 1}`} 
                className="w-full h-auto object-cover rounded-sm border border-white/10"
              />
              {/* Frosted Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-sm">
                <span className="text-white font-sans uppercase tracking-widest text-[10px] font-bold border border-white/50 px-4 py-2 rounded-full">
                  View
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Central Text */}
      <div className="relative z-20 pointer-events-none text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-bold tracking-tighter text-white uppercase drop-shadow-2xl"
        >
          PORTFOLIO SHOWCASE
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-sm md:text-base text-gray-400 font-sans uppercase tracking-[0.3em] font-medium"
        >
          Graphic Design & Visual Explorations
        </motion.p>
      </div>

    </section>
  );
}