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
        
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6 print:hidden">
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
          className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 border border-gray-100 print:shadow-none print:border-none print:p-0"
        >
          {/* Header */}
          <div className="border-b border-gray-200 pb-8 mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-[#111] mb-4">Faiza Haque</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-sans font-medium text-gray-600 justify-center">
              <span>Ontario, Canada</span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a href="mailto:faizahaquee@gmail.com" className="hover:text-[#FF8CD1] transition-colors">Email</a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a href="https://linkedin.com/in/faiza-haque/" target="_blank" rel="noreferrer" className="hover:text-[#FF8CD1] transition-colors">LinkedIn</a>
               <span className="text-gray-300 hidden sm:inline">•</span>
              <Link to="/" className="hover:text-[#FF8CD1] transition-colors">Portfolio</Link>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 text-center">Summary</h2>
              <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base">
                Multidisciplinary UX Researcher & Systems Designer with a Master's in Digital Experience Innovation. Expert at applying Systems Thinking and Human-Centered Design to solve complex accessibility challenges. Proven track record of leading cross-functional "Sprint" teams and conducting deep-dive product audits for industry case studies.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-10 md:gap-16 pt-10 border-t border-gray-100">
              {/* Sidebar (Skills & Education) */}
              <div className="space-y-10">
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-5">Education</h2>
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Master of Digital Experience Innovation (MDEI)</h3>
                      <p className="text-sm text-gray-500">University of Waterloo</p>
                      <p className="text-xs text-gray-400 mt-1">Sept 2025 - June 2026 • Waterloo, ON</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Honours BA: Communication, Culture, & IT</h3>
                      <p className="text-sm text-gray-500">University of Toronto Mississauga</p>
                      <p className="text-xs text-gray-400 mt-1">2020 - 2024 • Mississauga, ON</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Certificate in Digital Communications & Media</h3>
                      <p className="text-sm text-gray-500">Sheridan College</p>
                      <p className="text-xs text-gray-400 mt-1">2020 - 2024 • Oakville, ON</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-5">Skills</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">UX Research</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">UX Audits, Usability Testing (SUS), Affinity Mapping, Perceptual Mapping, User Personas</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">UI/Product Design</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">Figma (Prototyping & Design Systems), Adobe Creative Suite, Interaction Design</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Methodologies</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">Agile/Scrum, Information Architecture, Systems Thinking</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Systems Design</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">System Mapping, Root Cause Analysis, Stakeholder Mapping</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Technical Skills</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">OpenCode, Google Gemini, HTML/CSS, GitHub, Data Visualization, Miro, WCAG 2.1 Accessibility, Google Analytics</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Main Content (Experience) */}
              <div className="space-y-10">
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-6">Graduate Research & Systems Design Projects</h2>
                  <div className="space-y-8">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-1.5 gap-2">
                        <h3 className="text-base font-bold text-gray-900">Design Lead for Mozilla | MDEI Intensive II</h3>
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">April 2026 - Present</span>
                      </div>
                      <p className="text-xs text-gray-500 font-sans mb-3">University of Waterloo, School of Interaction Design and Business</p>
                      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-none">
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">Agentic Interface Design:</strong> Led a rapid 2-week sprint on evolving the Firefox browsing experience into a proactive, multi-tab AI information synthesizer.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">Systemic Transparency:</strong> Designed high-fidelity prototypes to solve the "black box" AI problem by making data access visible and user-controllable.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">Evidence-Based Iteration:</strong> Synthesized beta testing data to align AI features with core privacy and ethics principles.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-1.5 gap-2">
                        <h3 className="text-base font-bold text-gray-900">Lead UX Researcher / Product Designer</h3>
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Sept 2025 - Present</span>
                      </div>
                      <p className="text-xs text-gray-500 font-sans mb-3">Applied Design Projects: Loblaws, Cineplex, Airbnb, Indigo</p>
                      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-none">
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">Loblaws:</strong> Acted as primary bridge between management and technical teams, delegating weekly Agile Sprints.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">Cineplex:</strong> Directed the research-to-design pipeline for mobile prototypes, utilizing "Agile Sprints" on Figma.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">Airbnb Video Walkthrough:</strong> Conducted "Feasibility Analysis and UX Audit" to validate a "TikTok-style" walkthrough feature.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">UX Audits (Indigo & Partiful):</strong> Executed heuristic evaluations and accessibility audits on navigation and user mental models.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-800">Research Synthesis:</strong> Facilitated "Affinity Mapping" and "Information Architecture" restructuring using Miro/FigJam.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-6">Professional Experience</h2>
                  <div className="space-y-8">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-1.5 gap-2">
                        <h3 className="text-base font-bold text-gray-900">Creative Lead & Brand Designer (Freelance)</h3>
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Jan 2025 - Present</span>
                      </div>
                      <p className="text-xs text-gray-500 font-sans mb-3">Clients: Xelune, Capulus Coffee House, Club Akira</p>
                      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-none">
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Collaborated with clients to define project direction and deliver design solutions aligned with brand goals.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Applied UX/UI principles to branding, creating cohesive visual systems for lifestyle and hospitality brands.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Managed end-to-end digital production for social and web platforms.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-1.5 gap-2">
                        <h3 className="text-base font-bold text-gray-900">Graduate Teaching Assistant | GBDA 304</h3>
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Jan 2026 – Present</span>
                      </div>
                      <p className="text-xs text-gray-500 font-sans mb-3">University of Waterloo, School of Interaction Design and Business</p>
                      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-none">
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Developed and audited assessment criteria for upper-year marketing deliverables.</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Reviewed and graded student deliverables, providing constructive feedback.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-1.5 gap-2">
                        <h3 className="text-base font-bold text-gray-900">Communications Coordinator</h3>
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">May 2022 - March 2024</span>
                      </div>
                      <p className="text-xs text-gray-500 font-sans mb-3">Fife House • Toronto, ON</p>
                      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-none">
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Optimized UI/UX for web and newsletter platforms to ensure "WCAG 2.1 compliance".</li>
                        <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Leveraged Google Analytics to monitor user behavior, iterating on site architecture to increase digital engagement by 8.5%.</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}