import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const menuLinks = [
    { name: 'About', href: '#about' },
    { name: 'Selected Works', href: '#projects' },
    { name: 'Graphic Design', href: '#graphic-design' },
    { name: 'Photography', href: '#photography' },
    { name: 'Contact', href: '#contact' },
  ];

function TopNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNav = (href: string) => {
        setMenuOpen(false);
        if (location.pathname === '/') {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/${href}`);
        }
    };
    
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center pt-6 px-6 md:px-12">
        <Link to="/" className="font-bold text-sm uppercase tracking-widest font-sans hover:text-[#FF8CD1] transition-colors">Faiza Haque</Link>
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-sm">
            <Menu className="w-5 h-5" />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 top-14 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl w-48 py-2 flex flex-col overflow-hidden"
              >
                {menuLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => handleNav(link.href)}
                    className="text-left px-5 py-2.5 hover:bg-[#FF8CD1] hover:text-white transition-colors text-black text-xs font-sans uppercase tracking-widest"
                  >
                    {link.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 550]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] bg-[var(--color-bg-base)] overflow-hidden flex flex-col pt-6 px-6 md:px-12">
      <TopNav />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img src="/stickers/sticker_1.png" alt="Sticker 1" style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-[80px] opacity-80" />
        <motion.img src="/stickers/sticker_2.png" alt="Sticker 2" style={{ y: y2 }} className="absolute top-[50%] left-[2%] w-[120px] opacity-80" />
        <motion.img src="/stickers/sticker_3.png" alt="Sticker 3" style={{ y: y3 }} className="absolute top-[20%] right-[5%] w-[100px] opacity-80" />
        <motion.img src="/stickers/sticker_4.png" alt="Sticker 4" style={{ y: y4 }} className="absolute bottom-[10%] right-[10%] w-[150px] opacity-80" />
      </div>
      {/* ... rest of the component */}
    </section>
  );
}
