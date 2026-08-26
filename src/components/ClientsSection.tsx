import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const clientData = {
  name: 'Xelune',
  description: "I've been driving the creative marketing and visual identity for Xelune, a new bar on St. Clair West. Partnering directly with the founders since November 2025, my role bridges strategic launch planning with hands-on content execution. By delivering high-fidelity commercial product photography and cinematic video, I translate the tactile, community-driven vibe of a real Toronto neighbourhood spot into a distinct, curated online presence.",
  videoSrc: '/clients/xelune/xelune-preview.mp4',
  logoSrc: '/clients/xelune/xelune logo.png',
};

export default function ClientsSection() {
  return (
    <section id="clients" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-4xl md:text-6xl font-serif tracking-tight text-[#111] text-center mb-20"
        >
          Clients
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] h-[600px] iphone-16-frame">
              <video 
                src={clientData.videoSrc} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={clientData.logoSrc} alt={`${clientData.name} logo`} className="h-12 object-contain" />
              <h3 className="text-2xl md:text-3xl font-serif text-black">{clientData.name}</h3>
            </div>
            <p className="font-sans text-gray-600 mb-6 max-w-md">{clientData.description}</p>
            <Link to="/client/xelune" className="inline-block bg-[#FF8CD1] text-black rounded-full px-6 py-3 text-xs font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
              View Client Details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
