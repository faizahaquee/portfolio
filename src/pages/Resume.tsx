import { useEffect } from 'react';
import { Download, Share, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Faiza Haque - Resume',
          url: window.location.href,
        });
      } else {
        // Fallback to copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Resume link copied to clipboard!');
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[#111] pt-12 pb-24 font-sans">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Top Navigation Bar */}
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#FF8CD1] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              <Share className="w-4 h-4" />
              Share
            </button>
            <a 
              href="/faiza_resume_ux_ui.pdf" 
              download
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#111] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#FF8CD1] transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 border border-gray-100 print:shadow-none print:p-0 print:border-none"
        >
          {/* Header */}
          <div className="border-b border-gray-200 pb-12 mb-12">
            <h1 className="text-5xl md:text-7xl font-serif text-[#111] mb-4">Faiza Haque</h1>
            <p className="text-xl text-gray-500 mb-6 font-light">Product Designer & Systems Thinker</p>
            <div className="flex flex-wrap gap-4 text-sm font-sans font-medium text-gray-600">
              <a href="mailto:faizahaquee@gmail.com" className="hover:text-[#FF8CD1] transition-colors">faizahaquee@gmail.com</a>
              <span>•</span>
              <span>Waterloo, ON</span>
              <span>•</span>
              <a href="https://linkedin.com/in/faiza-haque/" target="_blank" rel="noreferrer" className="hover:text-[#FF8CD1] transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
            {/* Sidebar (Skills & Education) */}
            <div className="space-y-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Education</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Master of Digital Experience Innovation</h3>
                    <p className="text-sm text-gray-500 mb-2">University of Waterloo</p>
                    <p className="text-xs text-gray-400">2024 - Present</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Bachelor of Arts</h3>
                    <p className="text-sm text-gray-500 mb-2">University of Waterloo</p>
                    <p className="text-xs text-gray-400">2019 - 2023</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Core Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['UX Research', 'Interaction Design', 'Inclusive Design', 'Prototyping', 'Agile/Scrum', 'Design Systems', 'Usability Testing', 'Figma', 'HTML/CSS'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-[10px] uppercase tracking-widest font-bold rounded-md text-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Main Content (Experience) */}
            <div className="space-y-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Experience</h2>
                
                <div className="space-y-10">
                  {/* Experience Item 1 */}
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-1.5 w-2 h-2 rounded-full bg-[#FF8CD1] hidden md:block"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-gray-900">Product Designer</h3>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">2023 - Present</span>
                    </div>
                    <p className="text-lg text-[#FF8CD1] font-serif italic mb-4">Freelance / Contract</p>
                    <ul className="space-y-3 text-gray-600 font-light leading-relaxed list-none">
                      <li className="relative pl-5"><span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Spearheaded end-to-end product design for diverse clients, transforming complex business requirements into intuitive user interfaces.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Developed comprehensive design systems to ensure visual consistency and scalable UI components across platforms.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Facilitated cross-functional workshops to align stakeholders on product vision and UX strategy.</li>
                    </ul>
                  </div>

                  {/* Experience Item 2 */}
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-1.5 w-2 h-2 rounded-full bg-gray-300 hidden md:block"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-gray-900">UX Researcher & Strategist</h3>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">2022 - 2023</span>
                    </div>
                    <p className="text-lg text-gray-500 font-serif italic mb-4">University Projects & Case Studies</p>
                    <ul className="space-y-3 text-gray-600 font-light leading-relaxed list-none">
                      <li className="relative pl-5"><span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Conducted extensive heuristic evaluations and accessibility audits (AODA compliant) for mobile applications.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Utilized Agile sprint methodologies to iterate rapidly on user feedback and technical constraints.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}