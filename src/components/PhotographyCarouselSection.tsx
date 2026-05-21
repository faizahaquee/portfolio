import { motion } from 'framer-motion';

export default function PhotographyCarouselSection() {
  const photos = [
    '/photography/IMG_8730.jpg',
    '/photography/IMG_8736.jpg',
    '/photography/IMG_8871.jpg',
    '/photography/001134100012.jpg',
    '/photography/001134100018.jpg',
    '/photography/001134100019.jpg',
    '/photography/IMG_8943.jpg',
    '/photography/IMG_8954.JPG'
  ];

  // Duplicate array to make seamless loop
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="py-24 bg-[var(--color-bg-base)] border-t border-gray-200 overflow-hidden" id="photography">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#111] mb-6">
              Visual <br /><span className="italic text-[#FF8CD1]">Photography</span>
            </h2>
            <div className="w-20 h-1 bg-[#FF8CD1]"></div>
          </div>
          <div className="max-w-md">
            <p className="text-base text-gray-500 font-sans font-light leading-relaxed">
              A curated collection highlighting my eye for composition, candid moments, and visual storytelling through the lens.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          className="flex gap-8 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedPhotos.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] md:w-[450px] aspect-[4/5] rounded-xl overflow-hidden shrink-0 shadow-lg cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Photography ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Frosted Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-sans uppercase tracking-widest text-xs font-bold border border-white/50 px-6 py-2 rounded-full backdrop-blur-md bg-black/20">
                  View Focus
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}