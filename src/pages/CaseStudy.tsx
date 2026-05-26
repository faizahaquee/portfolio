import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
};

const allCaseStudies: { [key: string]: CaseStudyData } = {
    'mozilla': {
      title: 'Mozilla Design Sprint: AI Workspace Mode',
      figmaLink: 'https://www.figma.com/make/gcFPcMtDKe6H8S8NVR0I7i/Version-2?fullscreen=1&t=dPpu64vBlcoizOau-1',
      miroLink: 'https://miro.com/app/live-embed/uXjVGkNPxTQ=/?embedMode=view_only_without_ui&moveToViewport=-10322%2C-5409%2C13848%2C6556&embedId=244032640937',
      images: [ "/case-studies/mozilla/Full Video Walkthrough.mov" ],
      description: 'A 2-week intensive design sprint pitching a context-aware, proactive AI browsing experience centered on transparency and privacy for Mozilla.',
      contentSections: [
        { heading: "The Problem Statement", body: ["Today, we're exploring the key challenges of integrating AI into a browser, focusing on context, control, and trust. We aim to design an AI that understands user needs within their browsing environment while remaining transparent and privacy-conscious."], image: '/case-studies/mozilla/Problem Statement.png' },
        { heading: "How Might We & KPIs", body: ["Our “How Might We” focuses on creating a context-aware, proactive AI browsing experience. The goal is for AI to seamlessly gather and organize information across tabs into useful insights without constant user input."], image: "/case-studies/mozilla/HMW.png" },
      ]
    },
    'loblaws': {
      title: 'Loblaws Project Management & Design Strategy',
      pdf: '/case-studies/updated loblaws slide.pdf',
      description: 'A comprehensive project detailing design systems thinking, interaction design, and cross-functional agile strategy for a physical-to-digital Loblaws initiative.',
      contentSections: [
        { heading: "Problem Discovery", body: ["We collaborated as a cross functional team to ensure that the core problem—declining consumer trust due to ambiguous product origin labeling—was well-defined and rooted in objective user needs."], image: '/case-studies/loblaws/2.png' },
        { heading: "Interaction Design", body: ["We mapped out the shopper’s journey, creating user stories and service blueprints for distinct personas to pinpoint exactly where a physical shelf-level display could intervene to build trust."], image: '/case-studies/loblaws/5.png' },
      ]
    },
    'indigo': {
      title: 'Indigo: Custom Book Clubs',
      pdf: '/case-studies/Indigo UI-Marketing Case Study.pdf',
      figmaLink: 'https://www.figma.com/proto/FdOTACSQ64baOtSdZ56Pfv/Indigo-Book-Club-UI-Prototype?node-id=1-4&p=f&t=RBDFBbfwdv5TGI0G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
      description: 'A self-initiated 1-week design sprint to conceptualize a new feature for the Indigo bookstore app, transforming it into a vibrant "third space" for the reader community.',
      contentSections: [
        { heading: "The Opportunity", body: ["The current app experience doesn't fully capture the emotional connection of reading or the welcoming, in-store 'third space' vibe that customers love."], image: '/case-studies/indigo/02.png' },
        { heading: "Product & Marketing Goals", body: ["For the product, the focus was on increasing app session time and daily active users by driving emotional engagement through new social features. For marketing, the goal was to create shareable hooks to solidify Indigo's position as a lifestyle brand, not just a retailer."], image: '/case-studies/indigo/04.png' },
        { heading: "User Persona: Amy", body: ["I created a user persona, Amy, a 26-year-old social media coordinator and avid BookTok contributor. Reading for Amy is both a personal escape and a social hobby, but she lacks a dedicated digital space to organize group reads."], image: '/case-studies/indigo/05.png' },
        { heading: "Visual Style and Brand Fit", body: ["The design solution needed to feel like a natural extension of the Indigo brand. I focused on using Indigo's established typeface, branded colors, and soft, rounded UI elements to create a warm and inviting feel."], image: '/case-studies/indigo/07.png' },
        { heading: "The Book Club Flow", body: ["The core of the concept is a new 'Book Clubs' tab. From here, users can browse public clubs, start their own, and engage in real-time chapter discussions, earning Plum points for completing a club book together."], image: '/case-studies/indigo/09.png' },
        { heading: "Projected Impact", body: ["This feature is projected to significantly increase repeat app use through social accountability, boost book sales via club recommendations, and drive user acquisition through its shareable, invite-based model."], image: '/case-studies/indigo/11.png' }
      ]
    },
    'airbnb': {
      title: 'Airbnb Feasibility Analysis',
      pdf: '/case-studies/Feasibility Analysis (airbnb).pdf',
      description: 'A comprehensive feasibility analysis focusing on UX research and business strategy for Airbnb’s proposed Video Walkthrough & Virtual Tour feature.',
      contentSections: [
        { heading: "Executive Summary", body: ["We evaluated the feasibility of integrating a Video Walkthrough & Virtual Tour feature into Airbnb. Based on our analysis, the project is feasible across all four key categories: Technological, Market, Financial, and Organizational."] },
        { heading: "Financial Projections", body: ["Based on a $4.6M investment and an expected platform-wide conversion lift of 0.20%, the base case projects a 32.5% ROI with a 25% adoption rate."] },
      ]
    }
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [activeMedia, setActiveMedia] = useState<{ type: string, src: string } | null>(null);

  const caseStudy = id ? allCaseStudies[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (caseStudy) {
      if (id === 'mozilla' && caseStudy.images?.some(img => img.endsWith('.mov'))) {
        setActiveMedia({ type: 'video', src: caseStudy.images.find(img => img.endsWith('.mov'))! });
      } else if (caseStudy.contentSections?.some(s => s.image)) {
        setActiveMedia({ type: 'image', src: caseStudy.contentSections.find(s => s.image)!.image! });
      } else if (caseStudy.figmaLink) {
        setActiveMedia({ type: 'figma', src: caseStudy.figmaLink });
      } else if (caseStudy.pdf) {
        setActiveMedia({ type: 'pdf', src: caseStudy.pdf });
      }
    }
  }, [caseStudy, id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-base)] font-sans">
        <h1 className="text-3xl font-serif mb-4">Case Study Not Found</h1>
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
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col gap-6 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tight">{caseStudy.title}</h1>
            {caseStudy.description && <p className="text-lg md:text-xl font-serif text-gray-500 max-w-3xl leading-relaxed">{caseStudy.description}</p>}
            <div className="flex flex-wrap gap-4 mt-2">
              {caseStudy.pdf && <a href={caseStudy.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors border border-black text-black hover:bg-black hover:text-white">View Full PDF</a>}
              {caseStudy.figmaLink && <a href={caseStudy.figmaLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors border border-black text-black hover:bg-black hover:text-white">View Figma</a>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative">
            <div className="w-full lg:w-[55%] sticky top-8 z-10">
               <div className="w-full h-[75vh] max-h-[800px] bg-white rounded-[32px] border border-gray-100 shadow-lg overflow-hidden flex items-center justify-center p-6">
                  <AnimatePresence mode="wait">
                    {activeMedia?.type === 'image' && <motion.img key={activeMedia.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={activeMedia.src} alt="Visual Artifact" className="w-full h-full object-contain rounded-2xl" />}
                    {activeMedia?.type === 'video' && <motion.video key={activeMedia.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={activeMedia.src} controls autoPlay loop muted className="w-full h-full object-contain rounded-2xl" />}
                    {activeMedia?.type === 'pdf' && <motion.object key="pdf" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} data={activeMedia.src} type="application/pdf" className="w-full h-full rounded-2xl" />}
                    {activeMedia?.type === 'figma' && <motion.iframe key="figma" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full border-none rounded-2xl" src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(activeMedia.src)}&hide-ui=1`} allowFullScreen />}
                  </AnimatePresence>
               </div>
            </div>

            <div className="w-full lg:w-[45%] flex flex-col gap-12 pb-32">
              {caseStudy.contentSections && (
                <div className="flex flex-col gap-16 font-sans">
                  {caseStudy.contentSections.map((section: ContentSection, idx: number) => (
                    <motion.div 
                      key={idx} 
                      className="flex flex-col gap-4"
                      onViewportEnter={() => {
                        if (section.image) setActiveMedia({ type: 'image', src: section.image });
                      }}
                      viewport={{ margin: "-50% 0px -50% 0px" }}
                    >
                      {section.heading && <h2 className="text-3xl font-serif text-black leading-tight border-b border-gray-200 pb-3 mb-2">{section.heading}</h2>}
                      {section.body && section.body.map((p: string, pIdx: number) => <p key={pIdx} className="text-base text-gray-700 leading-relaxed">{p}</p>)}
                      {section.list && (
                        <ul className="grid gap-x-6 gap-y-4 text-base text-gray-700 list-none mt-2">
                          {section.list.map((li: string, lIdx: number) => (
                            <li key={lIdx} className="relative pl-5">
                              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#FF8CD1]"></span>
                              {li}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}