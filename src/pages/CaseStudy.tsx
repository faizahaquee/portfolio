import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

type ContentSection = {
  heading?: string;
  subheading?: string;
  body?: string[];
  list?: string[];
  image?: string;
};

type CaseStudyData = {
  title: string;
  pdf?: string;
  images?: string[];
  description?: string;
  contentSections?: ContentSection[];
  figmaLink?: string;
  miroLink?: string;
  brand: {
    logo: string;
    gradient: string;
  };
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // const [activeMedia, setActiveMedia] = useState<{ type: 'image' | 'video' | 'figma' | 'pdf', src: string } | null>(null);

  const caseStudies: Record<string, CaseStudyData> = {
    'mozilla': {
      title: 'Mozilla Design Sprint: AI Workspace Mode',
      figmaLink: 'https://www.figma.com/make/gcFPcMtDKe6H8S8NVR0I7i/Version-2?fullscreen=1&t=dPpu64vBlcoizOau-1',
      miroLink: 'https://miro.com/app/live-embed/uXjVGkNPxTQ=/?embedMode=view_only_without_ui&moveToViewport=-10322%2C-5409%2C13848%2C6556&embedId=244032640937',
      images: [
        "/case-studies/mozilla/Full Video Walkthrough.mov",
        "/case-studies/mozilla/Rounf 1 Prototype User Testing.mp4",
        "/case-studies/mozilla/SWOT.png",
        "/case-studies/mozilla/KPI's.png",
        "/case-studies/mozilla/User Testing Overview.png"
      ],
      description: 'A 2-week intensive design sprint pitching a context-aware, proactive AI browsing experience centered on transparency and privacy for Mozilla.',
      contentSections: [
        // ... (content sections remain the same)
      ],
      brand: {
        logo: '/logos/mozilla_logo.png',
        gradient: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(255, 128, 0, 0.2), rgba(255, 255, 255, 0))'
      }
    },
    'loblaws': {
      title: 'Loblaws Project Management & Design Strategy',
      pdf: '/case-studies/updated loblaws slide.pdf',
      images: [
        '/case-studies/loblaws/2.png',
        '/case-studies/loblaws/4.png',
        '/case-studies/loblaws/5.png'
      ],
      description: 'A comprehensive project detailing design systems thinking interaction design and cross functional agile strategy for a physical to digital Loblaws initiative.',
      contentSections: [
         // ... (content sections remain the same)
      ],
      brand: {
        logo: '/logos/loblaws_logo.png',
        gradient: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(228, 0, 43, 0.15), rgba(255, 255, 255, 0))'
      }
    },
    'indigo': {
      title: 'Indigo Bookstore App',
      pdf: '/case-studies/Indigo Bookstore App - UI Marketing Case Study.pdf',
      figmaLink: 'https://www.figma.com/proto/FdOTACSQ64baOtSdZ56Pfv/Indigo-Book-Club-UI-Prototype?node-id=1-4&p=f&t=RBDFBbfwdv5TGI0G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
      images: [
        '/case-studies/Indigo Bookstore App – UI & Marketing Case Study (1)/indigo cover.png',
        '/case-studies/indigo-flow.png',
      ],
      description: 'UI & Marketing Case Study for the Indigo Bookstore App.',
      contentSections: [
        // ... (content sections remain the same)
      ],
      brand: {
        logo: '/logos/indigo_logo.png',
        gradient: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0, 70, 128, 0.15), rgba(255, 255, 255, 0))'
      }
    },
    'airbnb': {
      title: 'Airbnb Feasibility Analysis',
      pdf: '/case-studies/Feasibility Analysis (airbnb).pdf',
      description: 'A comprehensive feasibility analysis focusing on UX research and business strategy for Airbnb.',
      contentSections: [
        // ... (content sections remain the same)
      ],
      brand: {
        logo: '/logos/airbnb_logo.png',
        gradient: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(255, 90, 95, 0.15), rgba(255, 255, 255, 0))'
      }
    }
  };

  const caseStudy = id ? caseStudies[id] : null;

  // ... (useEffect and loading state remain the same)

  return (
    <div className="relative w-full min-h-screen bg-[var(--color-bg-base)] text-[#111] overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-x-0 top-0 h-[600px] -z-0"
        style={{ background: caseStudy?.brand.gradient }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-gray-400 text-xs font-sans uppercase tracking-widest font-bold mb-8 hover:text-[#FF8CD1] transition-colors cursor-pointer">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </button>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Brand Logo */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src={caseStudy?.brand.logo} 
            alt={`${caseStudy?.title} Logo`}
            className="absolute -top-10 right-0 w-24 h-24 object-contain opacity-50 hidden lg:block"
          />

          {/* Header Title Block */}
          <div className="flex flex-col gap-6 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tight">
              {caseStudy?.title}
            </h1>
            {caseStudy?.description && (
              <p className="text-lg md:text-xl font-serif text-gray-500 max-w-3xl leading-relaxed">
                {caseStudy.description}
              </p>
            )}
            
            {/* The rest of the component remains the same... */}
          </div>
          {/* ... */}
        </motion.div>
      </div>
    </div>
  );
}