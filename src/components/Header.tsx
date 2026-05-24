import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

const menuLinks = [
  { name: 'About', href: '#about' },
  { name: 'Selected Works', href: '#projects' },
  { name: 'Graphic Design', href: '#graphic-design' },
  { name: 'Photography', href: '#photography' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    setMenuOpen(false);
    
    // If we're already on the homepage, smooth scroll
    if (location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate to the homepage with the hash
      // The browser will handle scrolling to the element with that ID
      navigate(`/${href}`);
    }
  };
  
  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center pt-6 px-6 md:px-12">
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
    </header>
  );
}
