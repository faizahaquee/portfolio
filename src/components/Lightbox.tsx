import { motion, AnimatePresence } from 'framer-motion';

type LightboxProps = {
  src: string | null;
  onClose: () => void;
};

export default function Lightbox({ src, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[200] flex items-center justify-center p-4"
        >
          <motion.img
            layoutId={src}
            src={src}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
            aria-label="Close"
          >
            &times;
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
