import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top when the component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mocking the case studies data
  const caseStudies: Record<string, CaseStudyData> = {
    'aida': {
      title: 'Aida Finalists Presentation Pitch',
      pdf: '/case-studies/FInal Copy of Aida - Finalists Presentation Pitch.pdf',
      figmaLink: 'https://www.figma.com/proto/zggkbVpGLIkuJ3USRzxX3C/Aida---AgeTech-Expo?node-id=1-97&t=Je8PrwhrEKtd0ZMC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A97',
      images: [
        '/case-studies/Aida - AgeTech Expo/Opening App Screen.png',
        '/case-studies/Aida - AgeTech Expo/Aida Response Loading Screen.png',
        '/case-studies/Aida - AgeTech Expo/Education Tool Screen.png',
        '/case-studies/Aida - AgeTech Expo/Learning Modules Screen - clicked on one of the sub topics.png',
        '/case-studies/Aida - AgeTech Expo/Topic overview.png',
        '/case-studies/Aida - AgeTech Expo/Log Symptoms Screen.png',
        '/case-studies/Aida - AgeTech Expo/Tracking Screen - Day View.png',
        '/case-studies/Aida - AgeTech Expo/Tracking Screen - Calendar View.png',
        '/case-studies/Aida - AgeTech Expo/Updating Predictions Screen.png',
        '/case-studies/Aida - AgeTech Expo/My Chats Screen.png',
        '/case-studies/Aida - AgeTech Expo/My Bubble Screen (Caregiver).png',
        '/case-studies/Aida - AgeTech Expo/Profile Screen Caregiver.png',
        '/case-studies/Aida - AgeTech Expo/Profile Settings.png',
        '/case-studies/Aida - AgeTech Expo/Search Engine Screen.png'
      ],
      description: 'Aida is an AI powered symptom tracking and education app designed for the AgeTech Expo.',
      contentSections: [
        {
          heading: "The Problem",
          body: [
            "1 in 4 Canadian caregivers dedicate 5.7 billion hours to caring for loved ones. Within that demographic, 86% of “sandwich” caregivers reported experiencing negative health impacts due to the emotional and physical overload."
          ]
        },
        {
          heading: "Target User: Meet Jen",
          subheading: "Needs: Guidance, Support, Relief",
          body: [
            "Jen represents our core user - a caregiver overwhelmed by the sheer volume of responsibilities, balancing her own life alongside providing care for a loved one. She lacks a consolidated tool that offers immediate guidance, empathetic support, and cognitive relief."
          ]
        },
        {
          heading: "Our Solution: Aida",
          list: [
            "Learning: Educational modules tailored to understanding and managing conditions like dementia.",
            "AI Assistance: A dynamic, empathetic AI driven care assistant utilizing natural language Q&A to provide context-aware support.",
            "Tracking: Intuitive logging for symptoms, mood, sleep, meals, and medications to track trends across sessions."
          ]
        },
        {
          heading: "System Architecture",
          body: [
            "Aida combines context from caregiver logs with external device data (like Apple HealthKit and Fitbit Web APIs). Through a prompt constructor and LLM (GPT-4), the system builds structured memory of recent events, medications, and behavioral patterns to provide practical steps and emotional support back to the caregiver."
          ]
        },
        {
          heading: "Tool Stack & Deep Thinking",
          body: [
            "To tackle the complex architecture of an AI-driven care assistant, I utilized Google Gemini for deep conceptual thinking. These tools allowed me to rapidly map out the empathetic conversational flows, validate logical edge cases, and structure the underlying database architecture before moving into visual design."
          ]
        },
        {
          heading: "Business Model & Future Path",
          body: [
            "Aida is structured as a Not-For-Profit initiative currently in its Pre-Seed Stage. We are establishing foundational knowledge partnerships with institutions like the McMaster Institute for Research on Aging (MIRA) and the Schlegel-UW Research Institute for Aging (RIA) to ensure clinical validity and social impact."
          ]
        }
      ]
    },
    'waterloo-library': {
      title: 'Waterloo Public Library Wayfinding',
      pdf: '/case-studies/A2 CRITIQUE WATERLOO PUBLIC LIBRARY WAYFINDING DIGITAL INTERFACE (1).pdf',
      figmaLink: 'https://www.figma.com/proto/kG9s2zxmrjHX5M5WcevSza/DEI613-A2-Assignment?node-id=55-1970&p=f&t=dt1mYgqenvuulneh-1&scaling=scale-down&content-scaling=fixed&page-id=52%3A1667&starting-point-node-id=55%3A1970&show-proto-sidebar=1',
      images: [
        '/case-studies/Map Screen.png'
      ],
      description: 'A critical review and redesign of the wayfinding digital interface for the Waterloo Public Library.',
      contentSections: [
        {
          heading: "Research Analysis & Findings",
          subheading: "Identifying core friction points in the library's physical and digital spaces.",
          list: [
            "Navigation Challenges: Confusing elevator access, multiple entrances causing disorientation, and poor signage for quiet zones.",
            "Technology & Accessibility: Inconsistent Wi-Fi signage, hard-to-locate device charging stations, and mobility-impaired users struggling with inter-floor navigation.",
            "Behavioral Patterns: Older adults frequently asking for help locating elevators, while kids and families gravitate toward return bins and study areas."
          ]
        },
        {
          heading: "Problem Statements",
          list: [
            "Visitors struggle to locate and navigate between key areas efficiently.",
            "Accessibility features are not visually or digitally supported, creating friction for users with varying needs.",
            "There is no central digital guidance system that adapts to user needs."
          ]
        },
        {
          heading: "User Personas & Needs",
          body: [
            "Margaret (The Senior Learner, Age 72): Needs wheelchair-accessible routes, large, high-contrast text, audio assistance, and step-by-step directions.",
            "Alex (The International Student, Age 21): Needs multilingual support, clear instructions for non-locals, and real-time info on study room occupancy.",
            "Aisha (The Parent/Child Visitor, Age 36): Needs an interactive map showing kid zones, step-by-step navigation suitable for strollers, and quick access to book returns."
          ]
        },
        {
          heading: "Design Solutions: Nielsen's Heuristics",
          list: [
            "Visibility of System Status: 'You Are Here' markers and route highlights show user positions in real time.",
            "Match Between System & Real World: Real-world icons (elevator, study space, printer) mirror library elements.",
            "Consistency & Standards: Persistent navigation bar and icon sets across all screens to ensure predictability.",
            "Aesthetic & Minimalist Design: Clean white layout, minimal text, and clear visual hierarchy to avoid cognitive clutter."
          ]
        },
        {
          heading: "Gestalt Principles Applied",
          list: [
            "Proximity: Navigation icons grouped closely in a fixed bottom bar.",
            "Continuity: Map routes drawn as smooth paths connecting start and destination.",
            "Figure-Ground: Muted background maps contrasted against bold, highly visible icons and paths."
          ]
        }
      ]
    },
    'digital-accessibility': {
      title: 'Digital Accessibility Gaps - Map the System',
      pdf: '/case-studies/Digital Accessibility Gaps Map the System.pdf',
      description: 'A structural mapping and analysis of digital accessibility gaps, moving from service design to systems design.',
      images: [
        '/case-studies/Digital Accessibility/Screenshot 2026-04-16 at 2.12.15 PM.png',
        '/case-studies/Digital Accessibility/Screenshot 2026-04-16 at 2.12.46 PM.png',
        '/case-studies/Digital Accessibility/Screenshot 2026-04-16 at 2.13.41 PM.png',
        '/case-studies/Digital Accessibility/Screenshot 2026-04-16 at 2.13.53 PM.png',
        '/case-studies/Digital Accessibility/Screenshot 2026-04-16 at 2.17.19 PM.png'
      ],
      contentSections: [
        {
          heading: "The Approach",
          body: [
            "We approached accessibility not as an operational service problem, but as a structural one. We utilized the Iceberg Model to map events, patterns, structures, and mental models to uncover root causes of inaccessible digital systems."
          ]
        },
        {
          heading: "Key Findings",
          list: [
            "Compliance-only culture reduces urgency for proactive accessibility.",
            "Responsibility is dangerously diffuse across disparate units.",
            "Institutions often rely on individual 'champions' rather than sustainable structural support.",
            "Student silence is often misread as satisfaction, suppressing reform-enabling feedback loops."
          ]
        },
        {
          heading: "Proposed Solutions",
          list: [
            "Chief Digital Accessibility Officer: Creating single-point accountability.",
            "Accessibility-by-Default (in WCMS): Automated validation before content publication.",
            "Public Accountability Dashboard: Making system failures visible to leadership."
          ]
        }
      ]
    },
    'loblaws': {
      title: 'Loblaws Project Management & Design Strategy',
      pdf: '/case-studies/Final Loblaws Slides.pdf',
      description: 'A comprehensive project detailing design systems thinking interaction design and cross functional agile strategy for a physical to digital Loblaws initiative.',
      contentSections: [
        {
          heading: "Problem Discovery Definition & Goal Setting",
          body: [
            "We collaborated as a cross functional team to ensure that the core problem declining consumer trust due to ambiguous product origin labeling was well defined and rooted in objective user needs. We facilitated discovery sessions to align our team around clearly defined problem statements ultimately establishing the goal of building transparent trustworthy in store communication."
          ]
        },
        {
          heading: "Interaction Design & User Flows",
          body: [
            "Applying interaction design processes we focused on the interplay between words visuals space and behavior. We mapped out the shoppers journey creating user stories and service blueprints for distinct personas. This helped us pinpoint exactly where and how a physical shelf level display could intervene to build trust and recognize Canadian made products effortlessly."
          ]
        },
        {
          heading: "Design Systems Thinking & Prototyping",
          body: [
            "Our solution heavily relied on Design Systems Thinking. We ensured that our design solutions utilized a consistent visual system leveraging recognizable patterns while proposing scalable bilingual solutions. We used prototyping tools utilizing components and auto layout to quickly iterate on high fidelity visual designs that matched Loblaws established brand tone and personality."
          ]
        },
        {
          heading: "Inclusive Design & Accessibility",
          body: [
            "We prioritized Inclusive Design to ensure that our solutions could be experienced by everyone. We applied a deep understanding of accessibility requirements intentionally designing tactile cues high contrast colors and Braille integration to support shoppers with low vision proving that accessibility goes beyond legal requirements to fundamentally improve the product for everyone."
          ]
        },
        {
          heading: "Cross Functional Collaboration & Agile Sprints",
          body: [
            "Throughout the project we maintained strong cross functional collaboration. Operating in one week Agile Sprints the Product Management and Design teams maintained tight feedback loops. We acted as Candid Collaborators providing clear and direct feedback challenging norms and testing assumptions through early user research to validate our concepts before finalizing the low fidelity and high fidelity prototypes."
          ]
        }
      ]
    },
    'partiful': {
      title: 'Partiful App UX Audit',
      pdf: '/case-studies/UX Audit Partiful App.pdf',
      description: 'A comprehensive heuristic evaluation and accessibility audit focusing on user mental models for the Partiful app.',
      contentSections: [
        {
          heading: "What is Partiful?",
          body: [
            "Partiful is an invitation and RSVP app designed for casual social gatherings. It focuses on quick event creation playful branding and easy social sharing. It is frequently used by Gen Z and young adults for high frequency personal events utilizing a strong emphasis on visual and emotional design."
          ]
        },
        {
          heading: "Target User",
          body: [
            "Jamie is a 24 year old tech savvy socially active young adult living in Toronto. They frequently plan and attend casual social events such as parties themed gatherings and group hangouts. They value efficiency fun and social connection over formality."
          ],
          list: [
            "Goals: Quickly create and share event invitations. Maximize attendance and social engagement.",
            "Needs: Speed simplicity mobile first design and clear RSVP tracking.",
            "Wants: Playful branding customization options and expressive visual design.",
            "Problems: Overwhelmed by friction in event setup and coordination."
          ]
        },
        {
          heading: "Good UX Strengths",
          subheading: "Simple Event Creation & Clear RSVP Status",
          list: [
            "Recognition rather than recall: Creating an event requires only essential information upfront.",
            "Visibility of system status: Users can instantly see RSVP counts and guest responses in real time.",
            "Consistent Visual Language: The app maintains consistent content hierarchy and button styles across screens improving emotional engagement."
          ]
        },
        {
          heading: "Poor UX Opportunities for Improvement",
          subheading: "Accessibility Gaps & Data Minimization",
          list: [
            "Platform Feature Disparity: Key actions such as managing guest status are limited to certain platforms.",
            "Data Minimization: App requires users to provide a personal cell phone number to view full event details conflicting with user expectations.",
            "Accessibility Gaps: Low colour contrast and small text sizes can make content difficult to read for users with visual impairments."
          ]
        },
        {
          heading: "Personal Reflection",
          body: [
            "Having used Partiful multiple times I find its user experience to be strongly aligned with both my expectations and natural interaction patterns when using an event planning tool. The apps clear hierarchy simplicity and minimal cognitive load reflect key principles such as recognition rather than recall.",
            "The thoughtful use of typography iconography and cohesive branding enhances usability through the aesthetic usability effect. Partiful demonstrates how aligning system structure with user mental models can improve efficiency satisfaction and overall productivity."
          ]
        }
      ]
    },
    'cineplex': {
      title: 'Cineplex Project',
      figmaLink: 'https://www.figma.com/proto/HEgJMef4EcRUDtk8FDEB3I/Cineplex-Project--Copy-?node-id=402-223&p=f&t=feNQEz0QBOcNqkQc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=402%3A223&show-proto-sidebar=1',
      images: [
        '/case-studies/Cineplex Project (Copy) 2/Home.png',
        '/case-studies/Cineplex Project (Copy) 2/Movies.png',
        '/case-studies/Cineplex Project (Copy) 2/Select Showtimes.png',
        '/case-studies/Cineplex Project (Copy) 2/Change Seats.png',
        '/case-studies/Cineplex Project (Copy) 2/Login before checkout.png',
        '/case-studies/Cineplex Project (Copy) 2/Email entered for sign in.png',
        '/case-studies/Cineplex Project (Copy) 2/COnfirmation for account.png',
        '/case-studies/Cineplex Project (Copy) 2/Signed in.png',
        '/case-studies/Cineplex Project (Copy) 2/Order page vers 4.png',
        '/case-studies/Cineplex Project (Copy) 2/Find Theatre.png',
        '/case-studies/Cineplex Project (Copy) 2/Guest Checkout.png',
        '/case-studies/Cineplex Project (Copy) 2/Guest Checkout 1.png',
        '/case-studies/Cineplex Project (Copy) 2/Guest Checkout - Card input.png',
        '/case-studies/Cineplex Project (Copy) 2/Guest Checkout-1.png',
        '/case-studies/Cineplex Project (Copy) 2/Guest Checkout-2.png',
        '/case-studies/Cineplex Project (Copy) 2/iPhone 13 & 14 - 8.png',
        '/case-studies/Cineplex Project (Copy) 2/iPhone 13 & 14 - 9.png'
      ],
      description: 'Redesigning the Cineplex mobile experience focusing on ticketing seating and checkout flows.',
      contentSections: [
        {
          heading: "Vibe Coded the Experience",
          body: [
            "A major part of this redesign involved bridging the gap between static design and development. I utilized Opencode to rapid prototype the checkout and seating flows, using AI to generate structural code and test interactive components. This allowed me to validate the UX logic in a live environment much faster than traditional hand-coding."
          ]
        }
      ]
    },
    'lost-in-place': {
      title: 'Lost In Place UI Guideline',
      pdf: '/case-studies/Lost in Place slideshow.pdf',
      figmaLink: 'https://www.figma.com/proto/1JwHQnWc4GZj3SYduGA6fN/DEI616-Branding-Guideline?node-id=133-1677&p=f&t=FRqCCLac3MkAzvTz-1&scaling=scale-down&content-scaling=fixed&page-id=72%3A2&starting-point-node-id=176%3A964',
      images: [
        '/case-studies/Lost in place game app/Home.png',
        '/case-studies/Lost in place game app/home screen.png',
        '/case-studies/Lost in place game app/AI Chatbot.png',
        '/case-studies/Lost in place game app/GPS.png',
        '/case-studies/Lost in place game app/Local Traveller Photo Gallery 1.png',
        '/case-studies/Lost in place game app/create profile.png',
        '/case-studies/Lost in place game app/Search Details.png',
        '/case-studies/Lost in place game app/what to do.png',
      ],
      description: 'A platform where place and personal narratives collide, allowing users to experience culture from the inside.',
      contentSections: [
        {
          heading: "The Problem: Challenging what feels 'normal'",
          subheading: "Cultural exposure is filtered through tourism, media stereotypes, and surface level facts.",
          body: [
            "The Cost: Unexamined misunderstanding quietly reinforces that one way of being in the world is the default.",
            "The Opportunity: Storytelling that places you inside another person's world and allows you to learn about places by feeling what it's like to move through them from someone else's perspective."
          ]
        },
        {
          heading: "The Solution: Adjusting the Vision",
          body: [
            "Initially, sharing fictional encounters risked tokenizing the users we were trying to consider, and environments were not active storytelling elements.",
            "The Update: A platform where real people share their own stories tied to the places they visit. The experience of encountering those stories teaches you about others, culture, and yourself."
          ],
          list: [
            "Scripted scenes became User-contributed stories.",
            "Branching narratives became a Location-based interface.",
            "Designed multimedia layers became User-generated media.",
            "Setting as a 'backdrop' became a Sensory & physical experience."
          ]
        },
        {
          heading: "Target Audience: Who gets lost in place.",
          list: [
            "The culturally curious adult: Drawn in by curiosity and the depth of real stories. Travel isn't the motivation; it's about learning and exploration.",
            "The first time or nervous traveller: The platform acts as travel preparation and a way to get to know local culture before arriving.",
            "The globally minded professional: Cultural understanding is an ongoing practice, and the platform fits into a life shaped by cross cultural relationships."
          ]
        },
        {
          heading: "Core Features: Places, Environments, Bodies",
          list: [
            "Geo-located stories: Users explore a map of contributed stories tied to specific locations.",
            "The untranslatable moment: Contributors share moments with no equivalent in their own culture.",
            "The body as part of the story: Prompts ask contributors to include sensory details (what it smelled like, what the body felt like).",
            "Four Media Formats: Video (movement, faces), Audio (voices, environments), Photo (frozen moments), and Text (thoughts and context)."
          ]
        },
        {
          heading: "AI Integration & Personalization",
          body: [
            "Your cultural assumptions are the most interesting thing about you. AI Buddy gently helps users surface the assumptions they bring to a place.",
            "Quizzes are personalized to a user's country of origin to reveal their cultural lens and the expectations, instincts, and defaults they carry."
          ]
        },
        {
          heading: "Key Takeaways",
          list: [
            "What immersive actually means: Asking users to be physically present where a story was told uses place in a more meaningful way than a screen based branching narrative.",
            "Control vs. authenticity: Trusting people to tell their own stories produces a richer, ethical experience.",
            "The platform shift also shifted the user: A platform helps place users closer to the story, even if they aren't in the physical place it was told."
          ]
        }
      ]
    },
    'indigo': {
      title: 'Indigo Bookstore App',
      pdf: '/case-studies/Indigo Bookstore App - UI Marketing Case Study.pdf',
      figmaLink: 'https://www.figma.com/proto/FdOTACSQ64baOtSdZ56Pfv/Indigo-Book-Club-UI-Prototype?node-id=1-4&p=f&t=RBDFBbfwdv5TGI0G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
      images: [
        '/case-studies/Indigo Bookstore App \u2013 UI & Marketing Case Study (1)/indigo cover.png',
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
          ]
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
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-gray-400 text-xs font-sans uppercase tracking-widest font-bold mb-16 hover:text-[#FF8CD1] transition-colors cursor-pointer">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </button>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16 items-start">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif leading-[0.9] tracking-tight mb-8">
                {caseStudy.title}
              </h1>
              
              <div className="flex flex-col items-start gap-8 mb-8">
                {caseStudy.description && (
                  <p className="text-xl md:text-2xl font-serif text-gray-500 max-w-2xl leading-relaxed">
                    {caseStudy.description}
                  </p>
                )}

                {caseStudy.figmaLink && (
                  <a 
                    href={caseStudy.figmaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-sm font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                  >
                    Open Full Prototype ↗
                  </a>
                )}
              </div>
            </div>

            {/* Interactive Figma Prototype */}
            {caseStudy.figmaLink && (
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[50px] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="w-[300px] h-[620px] rounded-[32px] bg-white relative overflow-hidden shadow-2xl">
                    {/* Figma iframe */}
                    <iframe 
                      className="w-full h-full border-none relative z-10" 
                      src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(caseStudy.figmaLink)}&hide-ui=1`} 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PDF View (Above Content if provided) */}
          {caseStudy.pdf && (
            <div className="mb-24">
              {id === 'digital-accessibility' ? (
                <div className="text-center">
                  <a 
                    href={caseStudy.pdf}
                    download
                    className="inline-flex items-center gap-3 border-2 border-black rounded-full px-8 py-4 text-sm font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                  >
                    Download Case Study PDF (49MB) 
                  </a>
                  <p className="text-gray-500 mt-4 text-sm">Large file size may cause preview errors.</p>
                </div>
              ) : (
                <div className="w-full h-[80vh] rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-white relative group">
                  <object data={caseStudy.pdf} type="application/pdf" className="w-full h-full absolute inset-0 z-10">
                    <p className="p-8 text-center text-gray-500 font-sans">Your browser does not support inline PDFs. <br/><br/><a href={caseStudy.pdf} className="text-[#FF8CD1] underline font-bold uppercase tracking-widest text-xs">Download the PDF</a>.</p>
                  </object>
                </div>
              )}
            </div>
          )}

          {/* Extracted Content Sections (Editorial Style) */}
          {caseStudy.contentSections && caseStudy.contentSections.length > 0 && (
            <div className="space-y-20 mb-20 font-sans pt-8">
              {caseStudy.contentSections.map((section, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-black sticky top-8">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {section.subheading && (
                      <h3 className="text-xl font-serif italic text-[#FF8CD1] mb-6">
                        "{section.subheading}"
                      </h3>
                    )}
                    {section.body && section.body.map((p, pIdx) => (
                      <p key={pIdx} className="text-lg text-gray-600 leading-relaxed font-sans font-light">
                        {p}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="space-y-4 text-lg text-gray-600 font-sans font-light list-none mt-6">
                        {section.list.map((li, lIdx) => (
                          <li key={lIdx} className="relative pl-6">
                            <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[#FF8CD1]"></span>
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Project Images Gallery */}
          {caseStudy.images && caseStudy.images.length > 0 && (
            <div className="mt-16 space-y-12 mb-24">
              {caseStudy.images.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 bg-white"
                >
                  <img src={img} alt={`${caseStudy.title} Preview ${idx + 1}`} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}