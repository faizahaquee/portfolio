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
        
        {/* Top Navigation Bar */}
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#FF8CD1] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors print:hidden"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors print:hidden"
            >
              <Share className="w-4 h-4" />
              Share
            </button>
            <a 
              href="/faiza_resume_ux_ui.pdf" 
              download
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#111] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#FF8CD1] transition-colors shadow-md print:hidden"
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
          <div className="border-b border-gray-200 pb-10 mb-10">
            <h1 className="text-5xl md:text-7xl font-serif text-[#111] mb-4">Faiza Haque</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 font-serif max-w-3xl">
              Multidisciplinary UX Researcher & Systems Designer with a Master's in Digital Experience Innovation. Expert at applying Systems Thinking and Human-Centered Design to solve complex accessibility challenges. Proven track record of leading cross-functional "Sprint" teams and conducting deep-dive product audits for industry case studies.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-sans font-medium text-gray-600">
              <a href="mailto:faizahaquee@gmail.com" className="hover:text-[#FF8CD1] transition-colors">faizahaquee@gmail.com</a>
              <span>•</span>
              <span>Ontario, Canada</span>
              <span>•</span>
              <a href="https://linkedin.com/in/faiza-haque/" target="_blank" rel="noreferrer" className="hover:text-[#FF8CD1] transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
            {/* Sidebar (Skills & Education) */}
            <div className="space-y-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-6">Education</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Master of Digital Experience Innovation (MDEI)</h3>
                    <p className="text-sm text-gray-500 mb-1">University of Waterloo</p>
                    <p className="text-xs text-gray-400">Sept 2025 - June 2026</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Honours BA: Communication, Culture, & Information Technology (CCIT)</h3>
                    <p className="text-sm text-gray-500 mb-1">University of Toronto Mississauga</p>
                    <p className="text-xs text-gray-400">2020 - 2024</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Certificate in Digital Communications & Media</h3>
                    <p className="text-sm text-gray-500 mb-1">Sheridan College</p>
                    <p className="text-xs text-gray-400">2020 - 2024</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-6">Skills</h2>
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
                    <p className="text-xs text-gray-600 leading-relaxed">System Mapping, Root Cause Analysis, Stakeholder Mapping, Systems Thinking</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Technical Skills</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">OpenCode, Google Gemini, Google Stitch, Figma Make (Research Synthesis), HTML/CSS, GitHub, Data Visualization, Miro, WCAG 2.1 Accessibility, Google Analytics</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Main Content (Experience) */}
            <div className="space-y-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-8">Graduate Research & Systems Design Projects</h2>
                
                <div className="space-y-10">
                  {/* Experience Item 1 */}
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-gray-900">Design Lead for Mozilla | MDEI Intensive II</h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">April 2026 - Present</span>
                    </div>
                    <p className="text-sm text-gray-500 font-sans mb-4">University of Waterloo, School of Interaction Design and Business • Waterloo, ON</p>
                    <ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-none">
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">Agentic Interface Design:</strong> Serving as Design Lead for a rapid 2-week sprint focused on evolving the Firefox browsing experience into a proactive, fully integrated AI browser capable of multi-tab information synthesis.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">Systemic Transparency:</strong> Designing high-fidelity prototypes that solve the "black box" AI problem by making automated reasoning and data access fully visible and user-controllable without manual prompting.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">Evidence-Based Iteration:</strong> Synthesizing Mozilla beta testing data to align agentic AI features with core principles of privacy and ethics, ensuring a high-trust experience for fully integrated browser environments.</li>
                    </ul>
                  </div>

                  {/* Experience Item 2 */}
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-gray-900">Lead UX Researcher / Product Designer</h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">Sept 2025 - Present</span>
                    </div>
                    <p className="text-sm text-gray-500 font-sans mb-4">Applied Design and Strategy Projects: Loblaws, Cineplex, Airbnb, Indigo • Waterloo, ON</p>
                    <ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-none">
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">Loblaws:</strong> Acted as the primary bridge between the management and technical teams, delegating weekly Agile Sprints and overseeing the production of management-level prototypes.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">Cineplex:</strong> Directed the research-to-design pipeline for mobile prototypes, utilizing "Agile Sprints" to iterate based on user friction points and business requirements using Figma.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">Airbnb Video Walkthrough:</strong> Conducted a comprehensive "Feasibility Analysis and UX Audit", employing market surveys and SWOT frameworks to validate a high-impact "TikTok-style" walkthrough feature.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">UX Audits (Indigo & Partiful):</strong> Executed heuristic evaluations and accessibility audits focusing on navigation hierarchy and user mental models to increase conversion and retention.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span><strong className="text-gray-900">Research Synthesis:</strong> Facilitated "Affinity Mapping" and "Information Architecture" restructuring using Miro/FigJam to simplify complex checkout and booking flows.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8CD1] mb-8">Professional Experience</h2>
                
                <div className="space-y-10">
                  {/* Experience Item 3 */}
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-gray-900">Creative Lead & Brand Designer (Freelance)</h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">Jan 2025 - Present</span>
                    </div>
                    <p className="text-sm text-gray-500 font-sans mb-4">Clients: Xelune, Capulus Coffee House, Club Akira • Toronto, ON / New York, NY</p>
                    <ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-none">
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Collaborate with clients to define project direction and deliver design solutions aligned with brand goals and target audience needs.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Apply UX/UI principles to branding and physical touchpoints, creating cohesive visual systems for lifestyle and hospitality brands using Figma and Adobe Illustrator.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Manage end-to-end digital production, ensuring visual assets align with target market user preferences and modern interface standards for social and web platforms.</li>
                    </ul>
                  </div>

                  {/* Experience Item 4 */}
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-gray-900">Graduate Teaching Assistant | GBDA 304</h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">Jan 2026 – Present</span>
                    </div>
                    <p className="text-sm text-gray-500 font-sans mb-4">University of Waterloo, School of Interaction Design and Business • Stratford, ON</p>
                    <ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-none">
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Develop and audit assessment criteria for upper-year marketing deliverables, ensuring alignment with industry standards and core learning objectives.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Review and grade student deliverables for marketing strategy assignments, providing constructive feedback to enhance student learning outcomes.</li>
                    </ul>
                  </div>

                  {/* Experience Item 5 */}
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-gray-900">Communications Coordinator</h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">May 2022 - March 2024</span>
                    </div>
                    <p className="text-sm text-gray-500 font-sans mb-4">Fife House • Toronto, ON</p>
                    <ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-none">
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Optimized UI/UX for web and newsletter platforms, improving navigation and typography to ensure "WCAG 2.1 compliance" and a seamless responsive experience across devices.</li>
                      <li className="relative pl-5"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300"></span>Leveraged Google Analytics to monitor user behavior, iterating on site architecture to increase digital engagement by 8.5%.</li>
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
