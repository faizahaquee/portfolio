import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Defined types for content sections
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

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top when the component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [activeMedia, setActiveMedia] = useState<{ type: 'image' | 'video' | 'figma' | 'pdf', src: string } | null>(null);

  // Mocking the case studies data
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
        {
          heading: "Sprint Overview",
          subheading: "Project Details & Roles",
          list: [
            "Duration: 2 weeks",
            "My Roles: UX Design + Storytelling Lead, UI Designer + Prototyper",
            "Addressed to: Eric Pang (Senior UX Designer, Toronto), Emanuela Damiani (Senior UX Manager, San Francisco), Taylor Silva (Product Designer, California)"
          ]
        },
        {
          heading: "The Problem Statement",
          body: [
            "Today, we're exploring the key challenges of integrating AI into a browser, focusing on context, control, and trust. We aim to design an AI that understands user needs within their browsing environment while remaining transparent and privacy-conscious.",
            "This raises important questions: how should the AI communicate what it knows and does, and how can users stay in control of their data? If the assistant remembers user information, we must also ensure that memory is managed clearly and with consent.",
            "These challenges guide our approach to creating an AI that not only assists but empowers users in a trustworthy way."
          ],
          image: '/case-studies/mozilla/Problem Statement.png'
        },
        {
          heading: "How Might We & KPIs",
          body: [
            "Our “How Might We” focuses on creating a context-aware, proactive AI browsing experience centered on transparency, user control, and privacy. The goal is for AI to seamlessly gather and organize information across tabs into useful insights without constant user input.",
            "At the same time, users remain fully aware and in control of what the AI does, accesses, and remembers. It's about balancing proactivity with autonomy."
          ],
          image: "/case-studies/mozilla/HMW.png"
        },
        {
          heading: "Personas",
          body: [
            "To better understand our users, we developed three personas: The student, who juggles multiple tabs while researching; The working professional, who needs efficiency and accuracy; And the leisure browser, who values simplicity and privacy.",
            "Across all three, we found a common frustration: too much information, but not enough clarity."
          ],
          image: "/case-studies/mozilla/Personas.png"
        },
        {
          heading: "Early Concepts and Research",
          body: [
            "Understanding what's already out there is crucial. It gives us a benchmark and helps identify gaps and opportunities for innovation.",
            "Next, we focused on persona development. Creating detailed user personas allows us to tailor our solutions to meet the specific needs of our diverse user base. It also ensures that we're not just building technology but crafting experiences that resonate with real people.",
            "Lastly, we conducted thorough market research to understand user demands and industry trends. This research provides us with insights that guide strategic decisions and help predict future needs."
          ],
          image: "/case-studies/mozilla/Brainstorming.png"
        },
        {
          heading: "Proposed Product",
          list: [
            "Human-like forgetting: Irrelevant data fades over time, mimicking natural memory.",
            "Memory Dashboard: User control is central—everything operates with explicit permission, giving full visibility and control over stored data.",
            "Contextual overlays: We reduce the “copy-paste tax” by using overlays that anticipate needs, minimizing effort and cognitive load.",
            "Transparency: Built in with real-time indicators showing what the AI processes and which tabs it uses—so users are always informed."
          ],
          image: "/case-studies/mozilla/Proposed Product.png"
        },
        {
          heading: "Initial Sketches & Ideation",
          body: [
            "We started with rough sketches to explore layout and interaction ideas. This helped us think through where the AI should appear, how users interact with it, and how to keep it visible without being intrusive.",
            "These early ideas guided our later designs in prototyping."
          ],
          image: "/case-studies/mozilla/Sketches.png"
        },
        {
          heading: "Early Stage Prototyping",
          body: [
            "The initial iterations started with Google Stitch—these AI tools helped us put together our ideas and visualize the core functionalities effectively. This was an important step in bringing our concepts to life.",
            "Once we had a solid foundation, we transitioned our prototype into Figma Make. This move enabled us to create more interactive elements, allowing us to simulate user interactions and gather more detailed feedback in later testing.",
            "Each interaction aligned with our vision for user control and transparency."
          ],
          image: "/case-studies/mozilla/Early prototyping.png"
        },
        {
          heading: "Key Decisions & Navigating Ambiguity",
          subheading: "From Vague Feedback to a Focused Solution",
          body: [
            "The initial feedback from our mentors was intentionally broad, encouraging us to define the problem space ourselves. Our team identified a core tension: users want proactive AI assistance but deeply fear losing control. This became our guiding principle.",
            "A key trade-off we debated was the visibility of the AI. An always-on sidebar was dismissed early as user testing feedback indicated it felt like 'surveillance'. We opted for contextual, on-demand overlays. This choice prioritized user autonomy over persistent visibility, a crucial decision for building trust.",
            "We also made a critical pivot from designing a 'smarter history' to a 'proactive workspace.' This was a strategic shift our team made after realizing Mozilla's true goal wasn't just to remember information, but to synthesize it into actionable insights for the user."
          ]
        },
        {
          heading: "What I Learned: A Lesson in Trust",
          body: [
            "My biggest lesson was that with AI, the user experience is the trust experience. My initial wireframes for the 'Memory Dashboard' were functional but data-dense. They failed to provide the immediate sense of safety our user personas needed. I learned that you must design for the core emotional need first—a feeling of control and clarity—before layering in more complex features. This project solidified my belief that the more powerful the technology, the more simple and transparent its interface must be."
          ]
        },
        {
          heading: "My AI-Assisted Workflow",
          subheading: "Using AI as a Lever for Speed and Insight",
          list: [
            "Utilized Google Gemini to rapidly synthesize user interview transcripts, identifying thematic patterns for our personas 70% faster than traditional manual affinity mapping.",
            "Leveraged Figma Make to generate a diverse range of visual concepts for the UI, which allowed our team to align on a visual direction in hours, not days.",
            "Employed Opencode's code generation capabilities to create a structural prototype of the contextual overlay animations, enabling us to test and validate the interaction logic with users much earlier in the sprint."
          ]
        },
        {
          heading: "User Testing & Next Steps",
          body: [
            "Through rigorous user testing, we identified key areas where trust and transparency could be further solidified. Moving forward, the focus will be on refining the Memory Dashboard’s granularity and pushing our high-fidelity prototypes into code to validate the contextual overlay interactions within a live browser environment."
          ],
          image: "/case-studies/mozilla/Key Findings from User Testing.png"
        }
      ]
    },
    'loblaws': {
      title: 'Loblaws Project Management & Design Strategy',
      pdf: '/case-studies/updated loblaws slide.pdf',
      images: [
        '/case-studies/loblaws/2.png',
        '/case-studies/loblaws/4.png',
        '/case-studies/loblaws/5.png',
        '/case-studies/loblaws/7.png',
        '/case-studies/loblaws/9.png',
        '/case-studies/loblaws/11.png',
        '/case-studies/loblaws/12.png',
        '/case-studies/loblaws/24.png',
        '/case-studies/loblaws/25.png',
        '/case-studies/loblaws/26.png',
      ],
      description: 'A comprehensive project detailing design systems thinking interaction design and cross functional agile strategy for a physical to digital Loblaws initiative.',
      contentSections: [
        {
          heading: "Problem Discovery Definition & Goal Setting",
          body: [
            "We collaborated as a cross functional team to ensure that the core problem declining consumer trust due to ambiguous product origin labeling was well defined and rooted in objective user needs. We facilitated discovery sessions to align our team around clearly defined problem statements ultimately establishing the goal of building transparent trustworthy in store communication."
          ],
          image: '/case-studies/loblaws/2.png'
        },
        {
          heading: "Interaction Design & User Flows",
          body: [
            "Applying interaction design processes we focused on the interplay between words visuals space and behavior. We mapped out the shoppers journey creating user stories and service blueprints for distinct personas. This helped us pinpoint exactly where and how a physical shelf level display could intervene to build trust and recognize Canadian made products effortlessly."
          ],
          image: '/case-studies/loblaws/5.png'
        },
        {
          heading: "Design Systems Thinking & Prototyping",
          body: [
            "Our solution heavily relied on Design Systems Thinking. We ensured that our design solutions utilized a consistent visual system leveraging recognizable patterns while proposing scalable bilingual solutions. We used prototyping tools utilizing components and auto layout to quickly iterate on high fidelity visual designs that matched Loblaws established brand tone and personality."
          ],
          image: '/case-studies/loblaws/9.png'
        },
        {
          heading: "Inclusive Design & Accessibility",
          body: [
            "We prioritized Inclusive Design to ensure that our solutions could be experienced by everyone. We applied a deep understanding of accessibility requirements intentionally designing tactile cues high contrast colors and Braille integration to support shoppers with low vision proving that accessibility goes beyond legal requirements to fundamentally improve the product for everyone."
          ],
          image: '/case-studies/loblaws/12.png'
        },
        {
          heading: "Cross Functional Collaboration & Agile Sprints",
          body: [
            "Throughout the project we maintained strong cross functional collaboration. Operating in one week Agile Sprints the Product Management and Design teams maintained tight feedback loops. We acted as Candid Collaborators providing clear and direct feedback challenging norms and testing assumptions through early user research to validate our concepts before finalizing the low fidelity and high fidelity prototypes."
          ],
          image: '/case-studies/loblaws/24.png'
        },
        {
          image: '/case-studies/loblaws/26.png'
        }
      ]
    },
    'indigo': {
      title: 'Indigo Bookstore App',
      pdf: '/case-studies/Indigo Bookstore App - UI Marketing Case Study.pdf',
      figmaLink: 'https://www.figma.com/proto/FdOTACSQ64baOtSdZ56Pfv/Indigo-Book-Club-UI-Prototype?node-id=1-4&p=f&t=RBDFBbfwdv5TGI0G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
      images: [
        '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/indigo cover.png',
        '/case-studies/indigo-flow.png',
        '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/Indigo Bookstore App \u2013 UI & Marketing Case Study.png',
        '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/iPhone 14 & 15 Pro - 2.png',
        '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/iPhone 14 & 15 Pro - 3.png',
        '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/iPhone 14 & 15 Pro - 4.png',
        '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/iPhone 14 & 15 Pro - 5.png'
      ],
      description: 'UI & Marketing Case Study for the Indigo Bookstore App.',
      contentSections: [
        {
          heading: "The Opportunity",
          subheading: "Understanding what's missing in the current Indigo app experience.",
          body: [
            "Indigo isn't just a bookstore - it's a lifestyle. However, the app experience didn't reflect the emotional connection of reading or the in-store 'third space' vibe. Readers felt alone in digital spaces, with no sense of shared discovery, leading to low repeat engagement after purchase."
          ]
        },
        {
          heading: "The Big Idea: Custom Book Clubs",
          body: [
            "A feature that lets users create, join, and personalize book clubs within the Indigo app. The core idea is to bring back the joy of reading together - digitally."
          ],
          list: [
            "Create a club (public or private)",
            "Customize name, vibe, genre, and invite friends",
            "Discuss, share reactions, and set reading timelines",
            "Earn rewards by finishing books as a group"
          ],
          image: '/case-studies/indigo-flow.png'
        },
        {
          heading: "Product & Marketing Goals",
          list: [
            "UX Goals: Increase app session time, drive emotional engagement with social features, and personalize the user journey.",
            "Marketing Goals: Create shareable hooks for attracting users, position Indigo as a lifestyle brand, and create a community 'third space' that users desire."
          ]
        },
        {
          heading: "User Persona: Amy",
          body: [
            "Amy is a 26-year-old Social Media Coordinator in Toronto. She's a horror-loving, creative bookworm who posts regularly on BookTok. Reading is both a personal escape and a social hobby."
          ],
          list: [
            "Pain Points: Uses multiple apps to manage book clubs, feels recs aren't tailored to her taste, wants a more social Indigo app experience.",
            "Goals: Connect with friends through reading, discover curated horror recommendations, build her TikTok presence, and support Indigo as her go-to bookstore."
          ]
        },
        {
          heading: "Design Direction & Visual Style",
          body: [
            "Using Indigo's typography (Futura & Apris-Regular), we utilized branded colors with a vibrant accent for 'club' tags. We opted for rounded cards and soft UI elements to feel warm and inviting, consistent with Indigo's in-store sensory brand."
          ]
        },
        {
          heading: "Original Ideation & Systems Thinking",
          body: [
            "This project relied entirely on original conceptualization and human-centered design principles. I utilized Figma's Auto Layout and components to rapidly generate and iterate on visual UI elements that seamlessly fit the Indigo brand, ensuring every screen felt meticulously crafted and cohesive without the use of AI generation."
          ]
        },
        {
          heading: "Growth Strategy & Projected Impact",
          list: [
            "Social Media Growth: Share your book club on TikTok or IG ('Join our June Thriller Club!').",
            "Referrals: Invite 3 friends to unlock $5 off your next read.",
            "Retention: Weekly badges (e.g., 'Page Turner', 'Host Hero') and push campaigns for new book picks.",
            "Projected Impact: Increased repeat app usage through social accountability, higher book sales via club recommendations, and stronger emotional loyalty leveraging Plum Rewards."
          ]
        }
      ]
    },
    'airbnb': {
      title: 'Airbnb Feasibility Analysis',
      pdf: '/case-studies/Feasibility Analysis (airbnb).pdf',
      description: 'A comprehensive feasibility analysis focusing on UX research and business strategy for Airbnb.',
      contentSections: [
        {
          heading: "Executive Summary",
          body: [
            "We evaluated the feasibility of integrating a Video Walkthrough & Virtual Tour feature into Airbnb. Based on our analysis, the project is feasible across all four key categories: Technological, Market, Financial, and Organizational.",
            "The proposed 28-week timeline requires an estimated investment of $4.6M, which is projected to generate $1.25M in Year 1 net income, yielding a 32.5% ROI at a base case adoption rate of 25%."
          ]
        },
        {
          heading: "Feature Descriptions",
          subheading: "Video Walkthroughs & 3D Virtual Tours",
          list: [
            "Video Walkthroughs: A short-form video uploaded directly by the host, giving guests a real-time guided view of the space before booking. Think of it like a Stories-style preview.",
            "3D Virtual Tours: An embedded, navigable tour that lets guests move through the property at their own pace. Hosted directly on the listing page with no external links required."
          ]
        },
        {
          heading: "Technological Considerations",
          list: [
            "In-House Resources: Leverages existing AWS infrastructure for storage, streaming, and CDN, plus extending the existing Trust & Safety team for content moderation.",
            "New Requirements: A 28-week build requiring 8 engineers for video upload system integration, AWS MediaConvert for transcoding, and AWS Rekognition for AI-assisted moderation.",
            "Key Risk: Host videos require rigorous AI-assisted moderation to maintain platform quality and conceal privacy details."
          ]
        },
        {
          heading: "Marketplace & Identification",
          body: [
            "Targeting the growing short-term rental market (projected to reach $142.55B by 2026), native video walkthroughs can reduce 'not as described' refund claims, potentially boosting profitability by 14% per listing.",
            "With nearly 60% of buyers preferring properties with 360-degree or video walkthroughs, this integration would give Airbnb a significant competitive edge over Vrbo and Booking.com."
          ]
        },
        {
          heading: "Organization Structure",
          body: [
            "The project utilizes a matrix-style collaboration built within Airbnb's existing structure rather than creating a new organization.",
            "Key teams include Engineering, UX Design, Research and Testing, Trust & Safety, and Marketing, all coordinated by a Product/Project Manager under the guidance of Airbnb Strategic Leadership."
          ]
        },
        {
          heading: "Financial Projections",
          list: [
            "Based on a $4.6M investment and an expected platform-wide conversion lift of 0.20%.",
            "Conservative Case (10% adoption): -7.5% ROI",
            "Break Even (11.6% adoption): 0.05% ROI",
            "Base Case (25% adoption): $5.5M Incremental Revenue, $1.25M Incremental Net Income, achieving a 32.5% ROI."
          ]
        }
      ]
    }
  };

  const caseStudy = id ? caseStudies[id] : null;

  // Initialize active media
  useEffect(() => {
    if (caseStudy) {
      // Prioritize video if it's the mozilla case study
      if (id === 'mozilla' && caseStudy.images && caseStudy.images.length > 0) {
        const firstVideo = caseStudy.images.find(img => img.endsWith('.mp4') || img.endsWith('.mov'));
        if (firstVideo) {
          setActiveMedia({ type: 'video', src: firstVideo });
          return;
        }
      }
      
      // Prioritize PDF if it's the loblaws case study
      if (id === 'loblaws' && caseStudy.pdf) {
        setActiveMedia({ type: 'pdf', src: caseStudy.pdf });
        return;
      }
      
      if (caseStudy.figmaLink) {
        setActiveMedia({ type: 'figma', src: caseStudy.figmaLink });
      } else if (caseStudy.images && caseStudy.images.length > 0) {
        const firstImg = caseStudy.images[0];
        setActiveMedia({ 
          type: firstImg.endsWith('.mp4') || firstImg.endsWith('.mov') ? 'video' : 'image', 
          src: firstImg 
        });
      } else if (caseStudy.contentSections?.some(s => s.image)) {
        setActiveMedia({ type: 'image', src: caseStudy.contentSections.find(s => s.image)!.image! });
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Title Block */}
          <div className="flex flex-col gap-6 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tight">
              {caseStudy.title}
            </h1>
            {caseStudy.description && (
              <p className="text-lg md:text-xl font-serif text-gray-500 max-w-3xl leading-relaxed">
                {caseStudy.description}
              </p>
            )}
            
            <div className="flex flex-wrap gap-4 mt-2">
              {caseStudy.images?.some(img => img.endsWith('.mp4') || img.endsWith('.mov')) && (
                <button 
                  onClick={() => {
                    const videoSrc = caseStudy.images!.find(img => img.endsWith('.mp4') || img.endsWith('.mov'))!;
                    setActiveMedia({ type: 'video', src: videoSrc });
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors ${activeMedia?.type === 'video' ? 'bg-[#FF8CD1] text-black border border-[#FF8CD1]' : 'border border-black text-black hover:bg-black hover:text-white'}`}
                >
                  View Prototype Video
                </button>
              )}
              {caseStudy.figmaLink && (
                <button 
                  onClick={() => setActiveMedia({ type: 'figma', src: caseStudy.figmaLink! })}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors ${activeMedia?.type === 'figma' ? 'bg-[#FF8CD1] text-black border border-[#FF8CD1]' : 'border border-black text-black hover:bg-black hover:text-white'}`}
                >
                  View Figma Prototype
                </button>
              )}
              {caseStudy.miroLink && (
                <a 
                  href={caseStudy.miroLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Miro Board ↗
                </a>
              )}
              {caseStudy.pdf && (
                <button 
                  onClick={() => setActiveMedia({ type: 'pdf', src: caseStudy.pdf! })}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors ${activeMedia?.type === 'pdf' ? 'bg-[#FF8CD1] text-black border border-[#FF8CD1]' : 'border border-black text-black hover:bg-black hover:text-white'}`}
                >
                  {id === 'loblaws' ? 'View PDF Slideshow' : 'View PDF Doc'}
                </button>
              )}
            </div>
          </div>

          {/* SPLIT SCREEN LAYOUT: Visuals Left (Sticky) / Text Right (Scroll) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative">
            
            {/* Left side: Sticky Visual Assets (approx 55vw) */}
            <div className="w-full lg:w-[55%] sticky top-8 z-10 flex flex-col justify-start items-center lg:items-start pt-4">
               <div className={id === 'indigo' 
                  ? "w-full max-w-[375px] h-[80vh] min-h-[600px] max-h-[812px] mx-auto lg:mx-0 bg-white rounded-[45px] md:rounded-[55px] border-[12px] md:border-[16px] border-black shadow-[0_24px_60px_rgba(0,0,0,0.2)] overflow-hidden flex items-center justify-center relative p-0"
                  : "w-full h-[60vh] lg:h-[75vh] max-h-[800px] bg-white rounded-[32px] border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden flex items-center justify-center relative p-2 md:p-6"
               }>
                  <AnimatePresence mode="wait">
                     {activeMedia?.type === 'figma' && (
                        <motion.iframe
                           key="figma"
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                           className="w-full h-full border-none rounded-2xl" 
                           src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(activeMedia.src)}&hide-ui=1`} 
                           allowFullScreen
                        />
                     )}
                     {activeMedia?.type === 'pdf' && (
                        <motion.object
                           key="pdf"
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                           data={activeMedia.src} type="application/pdf" className="w-full h-full rounded-2xl"
                        >
                           <p className="p-8 text-center text-gray-500 font-sans">Browser does not support inline PDFs. <br/><br/><a href={activeMedia.src} className="text-[#FF8CD1] underline font-bold uppercase tracking-widest text-xs">Download PDF</a></p>
                        </motion.object>
                     )}
                     {activeMedia?.type === 'video' && (
                        <motion.video
                           key={activeMedia.src}
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                           src={activeMedia.src} controls autoPlay loop muted 
                           className="w-full h-full object-contain rounded-2xl"
                        />
                     )}
                     {activeMedia?.type === 'image' && (
                        <motion.img
                           key={activeMedia.src}
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                           src={activeMedia.src} alt="Visual Artifact" 
                           className="w-full h-full object-contain rounded-2xl"
                        />
                     )}
                  </AnimatePresence>
               </div>
            </div>

            {/* Right side: Scrollable Text Content (approx 45vw) */}
            <div className="w-full lg:w-[45%] flex flex-col gap-12 pb-32 pt-8 lg:pt-0">
              
              {/* Content Sections */}
              {caseStudy.contentSections && caseStudy.contentSections.length > 0 && (
                <div className="flex flex-col gap-16 font-sans">
                  {caseStudy.contentSections.map((section, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex flex-col gap-4"
                      onViewportEnter={() => {
                        if (section.image) {
                          setActiveMedia({ type: 'image', src: section.image });
                        }
                      }}
                      viewport={{ margin: "-40% 0px -40% 0px" }}
                    >
                      {section.heading && (
                        <h2 className="text-2xl md:text-3xl font-serif text-black leading-tight border-b border-gray-200 pb-3 mb-2">
                          {section.heading}
                        </h2>
                      )}
                      
                      {section.subheading && (
                        <h3 className="text-lg md:text-xl font-serif italic text-[#FF8CD1]">
                          "{section.subheading}"
                        </h3>
                      )}

                      {section.body && section.body.map((p, pIdx) => (
                        <p key={pIdx} className="text-[15px] md:text-base text-gray-700 leading-relaxed font-sans">
                          {p}
                        </p>
                      ))}

                      {/* Micro-grid layout for lists to compress vertical space */}
                      {section.list && (
                        <ul className={`grid gap-x-6 gap-y-4 text-[15px] md:text-base text-gray-700 leading-relaxed font-sans list-none mt-2 ${section.list.length > 3 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                          {section.list.map((li, lIdx) => (
                            <li key={lIdx} className="relative pl-5">
                              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#FF8CD1]"></span>
                              {li}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Inline Image for Context */}
                      {section.image && (
                        <div 
                          className="mt-6 mb-8 cursor-pointer rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow group"
                          onClick={() => setActiveMedia({ type: 'image', src: section.image! })}
                        >
                          <img 
                            src={section.image} 
                            alt={section.heading} 
                            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Unmapped Images Trigger Blocks (For case studies that use caseStudy.images array instead of section images) */}
              {caseStudy.images && caseStudy.images.length > 0 && (!caseStudy.contentSections || !caseStudy.contentSections.some(s => s.image)) && (
                <div className="flex flex-col gap-6 mt-8">
                  <h3 className="text-lg font-serif italic text-gray-400 border-b border-gray-200 pb-2 mb-4">Project Gallery</h3>
                  {caseStudy.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      onViewportEnter={() => setActiveMedia({
                        type: img.endsWith('.mp4') || img.endsWith('.mov') ? 'video' : 'image',
                        src: img
                      })}
                      viewport={{ margin: "-40% 0px -40% 0px" }}
                      className="cursor-pointer group flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-[#FF8CD1] hover:bg-pink-50/50 transition-colors"
                      onClick={() => setActiveMedia({
                        type: img.endsWith('.mp4') || img.endsWith('.mov') ? 'video' : 'image',
                        src: img
                      })}
                    >
                      <span className="text-sm font-sans font-bold text-gray-600 group-hover:text-black transition-colors uppercase tracking-widest">
                        {img.endsWith('.mp4') || img.endsWith('.mov') ? 'Video Asset' : 'Image Asset'} {idx + 1}
                      </span>
                      <span className="text-xs font-sans text-gray-400 group-hover:text-[#FF8CD1] transition-colors">View →</span>
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