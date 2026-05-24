import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type LightboxProps = {
  images: string[];
  initialIndex: number | null;
  onClose: () => void;
};

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (initialIndex !== null) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (initialIndex === null) return;
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [initialIndex, images.length, onClose]);

  return (
    <AnimatePresence>
      {initialIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[200] flex items-center justify-center p-4"
        >
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            src={images[currentIndex]}
            alt="Lightbox"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
          
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-50"
            aria-label="Close"
          >
            &times;
          </motion.button>

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-white hover:text-black rounded-full w-12 h-12 flex items-center justify-center transition-colors cursor-pointer z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-white hover:text-black rounded-full w-12 h-12 flex items-center justify-center transition-colors cursor-pointer z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
