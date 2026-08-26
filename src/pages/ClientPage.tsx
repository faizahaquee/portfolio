import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const clientData = {
  xelune: {
    name: 'Xelune',
    description: "I've been driving the creative marketing and visual identity for Xelune, a new bar on St. Clair West. Partnering directly with the founders since November 2025, my role bridges strategic launch planning with hands-on content execution. By delivering high-fidelity commercial product photography and cinematic video, I translate the tactile, community-driven vibe of a real Toronto neighbourhood spot into a distinct, curated online presence.",
    logoSrc: '/clients/xelune/xelune logo.png',
    images: [
      '/clients/xelune/clientphoto1.JPG',
      '/clients/xelune/clientphoto2.JPG',
      '/clients/xelune/clientphoto3.JPG',
      '/clients/xelune/clientphoto4.JPEG',
      '/clients/xelune/IMG_9448.JPG',
      '/clients/xelune/IMG_9461.JPG',
      '/clients/xelune/IMG_9496.JPG',
      '/clients/xelune/IMG_9526.JPG',
    ]
  }
};

export default function ClientPage() {
  const { id } = useParams<{ id: 'xelune' }>();
  const navigate = useNavigate();
  const client = id ? clientData[id] : null;

  if (!client) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-base)] font-sans">
        <h1 className="text-3xl font-serif mb-4">Client Not Found</h1>
        <button onClick={() => navigate(-1)} className="text-[#FF8CD1] font-medium hover:underline tracking-widest uppercase text-sm">Return Home</button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-base)] text-[#111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-gray-400 text-xs font-sans uppercase tracking-widest font-bold mb-8 hover:text-[#FF8CD1] transition-colors cursor-pointer">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <img src={client.logoSrc} alt={`${client.name} logo`} className="h-16 object-contain" />
              <h1 className="text-4xl md:text-6xl font-serif leading-none tracking-tight">
                {client.name}
              </h1>
            </div>
          </div>

          <p className="text-lg font-serif text-gray-500 max-w-3xl leading-relaxed mb-16">
            {client.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {client.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img src={image} alt={`Client work ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
