import { Download, FileText } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="contact" className="py-24 bg-[#111] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 justify-between items-center">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-serif mb-6 tracking-tighter text-[#FF8CD1]">Resume &<br/>Contact</h2>
          <p className="text-xl font-sans font-light text-gray-300 mb-12 max-w-lg">
            Multidisciplinary UX Researcher & Systems Designer with a Master's in Digital Experience Innovation. Let's work together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="/faiza_resume_ux_ui.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#FF8CD1] text-black rounded-full px-8 py-4 text-sm font-sans font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
            
            <a 
              href="/faiza_resume_ux_ui.pdf" 
              download
              className="flex items-center justify-center gap-3 border border-white text-white rounded-full px-8 py-4 text-sm font-sans font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              <Download className="w-5 h-5" />
              Download
            </a>
          </div>
          
          <div className="mt-16 flex flex-col items-start gap-4">
            <p className="font-sans font-medium text-lg">faizahaquee@gmail.com</p>
            <a 
              href="https://linkedin.com/in/faiza-haque/" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#FF8CD1] hover:text-white transition-colors flex items-center gap-2"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="font-sans uppercase tracking-widest text-xs font-bold mt-1">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative hidden md:block">
           {/* Abstract resume graphic */}
           <div className="w-full max-w-sm mx-auto aspect-[3/4] bg-[#F8F7F3] rounded-lg shadow-2xl overflow-hidden p-8 border border-gray-800 rotate-3 relative group transition-transform hover:rotate-0 duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF8CD1] rounded-bl-[100px] z-0 opacity-50"></div>
              <h3 className="text-black text-2xl font-serif mb-2 uppercase z-10 relative">Faiza Haque</h3>
              <div className="w-full h-px bg-gray-300 mb-6 z-10 relative"></div>
              
              <div className="space-y-4 relative z-10">
                 <div className="w-full h-3 bg-gray-200 rounded"></div>
                 <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
                 <div className="w-4/6 h-3 bg-gray-200 rounded"></div>
              </div>
              
              <div className="mt-8 space-y-4 relative z-10">
                 <h4 className="text-gray-400 font-sans font-bold uppercase text-[10px] tracking-widest">Experience</h4>
                 <div className="w-full h-16 bg-white rounded border border-gray-200"></div>
                 <div className="w-full h-16 bg-white rounded border border-gray-200"></div>
                 <div className="w-full h-16 bg-white rounded border border-gray-200"></div>
              </div>
           </div>
        </div>
        
      </div>
    </section>
  );
}