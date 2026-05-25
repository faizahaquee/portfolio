import { motion } from 'framer-motion';

export default function HeroSection() {
  const floatingImages = [
    { src: '/stickers/sticker_0.png', className: 'w-24 md:w-32 rotate-[-8deg] top-[5%] left-[8%]' },
    { src: '/stickers/sticker_2.png', className: 'w-32 md:w-48 rotate-[12deg] top-[35%] right-[5%]' },
    { src: '/stickers/sticker_5.png', className: 'w-24 md:w-36 rotate-[-15deg] bottom-[25%] left-[30%]' },
    { src: '/stickers/sticker_8.png', className: 'w-28 md:w-40 rotate-[5deg] bottom-[10%] right-[15%]' },
    { src: '/stickers/adobe-cc.png', className: 'w-20 md:w-24 rotate-[10deg] top-[15%] right-[25%]' },
    { src: '/stickers/figma.png', className: 'w-16 md:w-20 rotate-[-12deg] top-[50%] left-[10%]' },
    { src: '/stickers/are-na.png', className: 'w-20 md:w-24 rotate-[8deg] bottom-[5%] left-[5%]' },
    { src: '/stickers/pinterest.png', className: 'w-20 md:w-24 rotate-[-10deg] top-[10%] left-[45%]' },
    { src: '/stickers/react.png', className: 'w-24 md:w-28 rotate-[15deg] bottom-[20%] right-[30%]' }
  ];

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#F8F7F3]">
      {/* Background Stickers */}
      {floatingImages.map((img, idx) => (
        <motion.img 
          key={idx}
          src={img.src} 
          alt={`Sticker ${idx}`}
          className={`absolute z-10 ${img.className}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
        />
      ))}

      <div className="relative z-20 flex flex-col items-center text-center px-4">
        {/* Main Content */}
        <motion.div 
          className="relative mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <img src="/faiza_haque_landing.png" alt="Faiza Haque" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg" />
        </motion.div>

        <motion.h1 
          className="font-serif text-5xl md:text-7xl text-black"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Faiza Haque
        </motion.h1>
        <motion.p 
          className="font-sans text-xs text-gray-500 uppercase tracking-[0.2em] mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          Product Designer
        </motion.p>

        <motion.div 
          className="max-w-xl font-serif text-xl md:text-2xl leading-[1.4] relative z-20 p-6 rounded-3xl mt-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <p className="text-black">
            "For me, design isn't just about making things look good. It's about figuring out how to build digital spaces that feel intuitive, inclusive, and trustworthy."
          </p>
        </motion.div>
        
        {/* Core Competencies */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        >
          {['UX Design', 'Interaction Design', 'Design Systems', 'Prototyping', 'AI Integration'].map((skill, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-[9px] uppercase tracking-widest font-bold rounded-md">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}