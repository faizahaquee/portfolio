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
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  // Mocking the case studies data
  const caseStudies: Record<string, CaseStudyData> = {
    'mozilla': {
      title: 'Mozilla Design Sprint: AI Workspace Mode',
      figmaLink: 'https://www.figma.com/make/Fi4oDFl3Cnk79iWndxq4sa/Workspace-AI-browser--Version-4-?fullscreen=1&t=47TOQvBG3TPjDYl1-1',
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
          heading: "User Journey Map",
          image: "/case-studies/mozilla/Intensive 2 - Mozilla - User journey map (visual).jpg"
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
            "My biggest lesson was that with AI, the user experience is the trust experience. My initial wireframes for the 'Memory Dashboard' were functional but data-dense. They failed to provide the immediate sense of safety our user personas needed. I learned that you must design for the core emotional need first, a feeling of control and clarity, before layering in more complex features. This project solidified my belief that the more powerful the technology, the more simple and transparent its interface must be."
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
        },
        {
          heading: "Key Takeaways and Thoughts",
          body: [
            "I have no background in Health, I went to the information session all alone. but i jumped into this as a curious researcher and designer, finding my team members, gathering our strengths and carrying our team into the finalist round from 36 teams to to 8! it was a great and humbling expereince and I am very happy I got to be a part of it."
          ]
        },
        {
          image: '/case-studies/aida/group-photo.jpg'
        },
        {
          image: '/case-studies/aida/team-photo.jpg'
        }
      ]
    },
    'loblaws': {
      title: 'Loblaws Project Management & Design Strategy',
      figmaLink: 'https://www.figma.com/design/MNR0xgteqhy9SjV4nmDR6N/Loblaws-Shelf-Tagging-Guide?node-id=566-2&t=2P7MwDyLcgbjU9np-1',
      images: [
        '/case-studies/loblaws/2.png',
        '/case-studies/loblaws/4.png',
        '/case-studies/loblaws/5.png',
        '/case-studies/loblaws/6.png',
        '/case-studies/loblaws/7.png',
        '/case-studies/loblaws/8.png',
        '/case-studies/loblaws/9.png',
        '/case-studies/loblaws/14.png',
        '/case-studies/loblaws/15.png',
        '/case-studies/loblaws/20.png',
        '/case-studies/loblaws/21.png',
        '/case-studies/loblaws/22.png',
        '/case-studies/loblaws/23.png',
        '/case-studies/loblaws/24.png',
        '/case-studies/loblaws/25.png',
        '/case-studies/loblaws/26.png',
        '/case-studies/loblaws/27.png',
      ],
      description: 'A comprehensive project detailing design systems thinking interaction design and cross functional agile strategy for a physical to digital Loblaws initiative.',
      contentSections: [
        {
          heading: "Project Overview",
          list: [
            "Duration: 16 Weeks",
            "Role: Product Owner"
          ]
        },
        {
          heading: "The Context & Challenge",
          subheading: "Business Overview & Core Problem",
          body: [
            "Loblaw Companies Limited (L.TO) is a major Canadian retailer offering grocery, pharmacy, healthcare services, health & beauty, apparel, general merchandise, financial services, and wireless products.",
            "Core Problem: Declining consumer trust due to ambiguous product origin labeling."
          ],
          image: '/case-studies/loblaws/2.png'
        },
        {
          subheading: "How Might We",
          body: [
            "How might we design a physical shelf-level display that helps shoppers trust and recognize Canadian-made products?"
          ],
          image: '/case-studies/loblaws/4.png'
        },
        {
          heading: "Team Reflection: Charter",
          subheading: "Reviewing our Process",
          body: [
            "The team charter proved invaluable in keeping us aligned on tasks, roles, and behavioral expectations. While it strengthened accountability and provided a clear visual overview of our sprint scope, we did encounter challenges. Our limited initial expertise in assigned roles sometimes made relying strictly on the charter feel restrictive. However, this process ultimately helped us identify team strengths and weaknesses, ensuring a successful execution of our sprints."
          ],
          image: '/case-studies/loblaws/21.png'
        },
        {
          subheading: "Product Backlog (Part 2)",
          list: [
            "Accessibility Enhancements: Add tactile/raised design features and ensure high-contrast colors for readability.",
            "Employee Tagging Guide: Create a 1-page guide for employees instructing them how to add and replace tags.",
            "Feedback Summary: Conduct observational testing and consolidate usability and visibility feedback."
          ],
          image: '/case-studies/loblaws/6.png'
        },
        {
          heading: "User Stories",
          subheading: "Defining User Needs",
          body: [
            "We crafted comprehensive user stories to capture the diverse needs of Loblaws’ ecosystem. This included everyday shoppers looking for local products, shoppers with visual impairments needing tactile cues, and store employees requiring an efficient tagging system. By defining these distinct perspectives, our team ensured that the final solution would be inclusive, practical, and valuable for all stakeholders involved."
          ],
          image: '/case-studies/loblaws/7.png'
        },
        {
          heading: "Sprint Backlog",
          subheading: "Project Tasks",
          body: [
            "Our team broke down the project into actionable tasks for our sprints. This involved a systematic approach: starting with an audit of existing in-store displays, brainstorming Canadian brand identifiers, and sketching low-fidelity concepts. We planned to build physical 3D prototypes to test accessibility features in real-world scenarios, iteratively refining our designs based on continuous user testing and feedback."
          ],
          image: '/case-studies/loblaws/8.png'
        },
        {
          heading: "Acceptance Criteria",
          subheading: "Definition of Success",
          body: [
            "To keep our development objective, we established clear acceptance criteria for each user story. Success meant that a shopper could identify product origins at a glance, access detailed preparation info instantly, and rely on recognizable visual and tactile cues. For store operations, it required a simple, error-free tagging process for employees and an accurate engagement tracking system for management to measure the solution’s impact."
          ],
          image: '/case-studies/loblaws/9.png'
        },
        {
          heading: "The Ecosystem Solution",
          subheading: "Sprint 2 Feedback",
          body: [
            "After testing our initial concepts, the team gathered critical feedback to refine our approach. Users appreciated the clear visual hierarchy and the addition of educational characters, but highlighted areas for improvement such as the placement and necessity of QR codes. This feedback loop allowed us to debate and iterate on the design, ensuring the signage worked cohesively as a complete system before moving forward."
          ],
          image: '/case-studies/loblaws/14.png'
        },
        {
          subheading: "Sprint 3 Deliverables",
          body: [
            "Applying the feedback from previous sprints, our team produced multiple high-fidelity options for the 'Made in Canada' tags. We expanded the solution into a broader 'Farm to Aisle' campaign, delivering large and small promotional posters designed to seamlessly integrate into Loblaws’ existing store environments and draw attention to the new tagging system."
          ],
          image: '/case-studies/loblaws/15.png'
        },
        {
          subheading: "Sprint 4 Final Deliverables",
          body: [
            "Finalized the 'Farm to Aisle' Shelf-Tagging Guide (Employee Handbook) detailing the five steps to apply a new tag. We included a digital version of the handbook with a clickable link to a feedback survey instead of a QR code, and provided clear examples of correct & incorrect placements, accessibility & safety checklists, and the Three Rs for recycling old tags."
          ],
          image: '/case-studies/loblaws/20.png'
        },
        {
          heading: "Team Reflection: Charter",
          list: [
             "How it Supported us: Helped us keep track of tasks, roles, and responsibilities; Encouraged consistent communication and weekly check-ins; Set clear behavioural expectations and strengthened accountability; Provided a visual overview of the project scope and kept us aligned with deliverables; Guided Product Owners in maintaining the product backlog and criteria for sprint work.",
             "What we Learned: Helped identify team strengths and weaknesses, keeping us mindful of expectations; Supported our progress by showing where we were in the process and what was coming next; Contributed to the successful organization and execution of all Sprints.",
             "Challenges we Noticed: Limited expertise in assigned roles made it difficult to fully apply some parts of the charter; Relying only on the charter sometimes felt restrictive when we lacked full role understanding."
          ],
          image: '/case-studies/loblaws/21.png'
        },
        {
          heading: "Acceptance Criteria & Definition of Done",
          subheading: "Evaluating Outcomes",
          body: [
            "We heavily relied on our acceptance criteria and definition of done to provide weekly, actionable feedback to the development team. While adapting product backlog items to unexpected constraints, like switching to at-home testing when in-store access fell through, we learned the importance of revisiting these criteria regularly. Moving forward, we aim to build more flexibility into our definitions to accommodate exploratory testing and clearer guidelines for minor deviations."
          ],
          image: '/case-studies/loblaws/25.png'
        },
        {
          heading: "Key Takeaways",
          subheading: "Lessons Learned",
          body: [
            "This sprint process highlighted the importance of strong boundaries, timing, and communication. By clearly separating the visionary role of the Product Owner from the supportive, unblocking role of the Scrum Master, we achieved better efficiency and clarity. Additionally, preparing feedback early in the fast-paced one-week sprints prevented last-minute pressure, while open communication kept both management and development teams confidently aligned."
          ],
          image: '/case-studies/loblaws/26.png'
        },
        {
          heading: "Conclusion",
          subheading: "Project Wrap-up",
          body: [
            "This project provided an invaluable, hands-on introduction to Agile project management. Despite initial hurdles with structure and assumption testing, establishing clear roles and refining our 'How Might We' approach guided us to success. It ultimately highlighted that organization, transparency, and responsiveness are just as crucial to a product's success as the design itself."
          ],
          image: '/case-studies/loblaws/27.png'
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
          heading: "Sprint Overview",
          subheading: "Project Details & Roles",
          list: [
            "Duration: 1 week (Self - Initiated)",
            "My Roles: UI Designer + Marketing Lead, Prototyper",
            "Addressed to: Seyfi Atasoy (Talent Acquisition Manager | Indigo)"
          ],
          image: '/case-studies/indigo/1.png'
        },
        {
          heading: "The Opportunity",
          subheading: "Indigo is more than just a bookstore.",
          body: [
            "But the app experience doesn’t reflect the emotional connection of reading or the in-store “third space” vibe."
          ],
          list: [
              "Readers feel alone in digital spaces",
              "No sense of shared discovery",
              "Low repeat engagement after purchase"
          ]
        },
        {
          heading: "Product Goals",
          subheading: "For UX/Product",
            list: [
                "Increase app session time & DAUs",
                "Drive emotional engagement with social features",
                "Personalize the user journey"
            ],
          image: '/case-studies/indigo/3.png'
        },
        {
          heading: "Marketing Goals",
          subheading: "For Marketing",
            list: [
                "Create shareable hooks for attracting users",
                "Position Indigo as a lifestyle brand, not just a retailer",
                "Creating a community/“third space” that users desire"
            ]
        },
        {
            heading: "Meet Amy",
            body: [
                "Name: Amy",
                "Age: 26",
                "Location: Toronto, Canada",
                "Job Title: Social Media Coordinator",
                "Plum+ Member: ✅",
                "Tech Comfort: High"
            ],
            list: [
                "About Amy: A horror-loving, creative bookworm who posts regularly on BookTok. She enjoys shopping at Indigo, especially during seasonal events, and often reads with friends. Reading is both a personal escape and a social hobby for Amy."
            ],
            image: '/case-studies/indigo/5.png'
        },
        {
            heading: "Pain Points & Goals",
            list: [
                "Pain Points: No easy way to organize group reads, Uses multiple apps to manage book clubs, Feels recs aren’t tailored to her taste, Wants a more social Indigo app experience",
                "Goals: Connect with friends through reading, Discover curated horror recs, Build her TikTok presence, Support Indigo as her go-to bookstore"
            ],
            image: '/case-studies/indigo/6.png'
        },
        {
            heading: "Visual Style and Brand Fit",
            list: [
                "Using Indigo’s typeface (Futura & Apris-Regular)",
                "Branded colour with vibrant accent for “club” tags",
                "Rounded cards and soft UI elements to feel warm & inviting",
                "Consistent with Indigo’s in-store sensory brand and current app design"
            ],
            image: '/case-studies/indigo/7.png'
        },
        {
            heading: "User Flow",
            image: '/case-studies/indigo/8.png'
        },
        {
            heading: "How it Works",
            subheading: "User Flow:",
            list: [
                "Tap “Book Clubs” tab",
                "Browse public clubs (created by Indigo) or start your own",
                "Customize club: name, photo, tags, invite",
                "Add a current read + timeline",
                "Get alerts: “2 days left to finish,” “New chapter discussion posted”",
                "Earn Plum points for completing a club book"
            ],
            image: '/case-studies/indigo/9.png'
        },
        {
          heading: "Scoping the Solution",
          subheading: "Product Backlog (Part 1)",
          body: [
            "We outlined a comprehensive product backlog focusing on the core deliverables needed to solve the problem. The initial scope prioritized designing distinct shelf-level tags to highlight Canadian-made products and creating educational signage to help shoppers interpret the new visual system quickly and effectively."
          ],
          image: '/case-studies/loblaws/5.png'
        },
        {
          subheading: "Product Backlog (Part 2)",
          body: [
            "The second half of our backlog emphasized inclusivity and operational feasibility. We scoped out accessibility enhancements like tactile elements and high-contrast designs, while also planning a comprehensive tagging guide for employees. The backlog ensured we prioritized both the shopper's experience and the staff's ease of implementation."
          ],
          image: '/case-studies/loblaws/6.png'
        },
        {
          heading: "User Stories",
          subheading: "Defining User Needs",
          body: [
            "We crafted comprehensive user stories to capture the diverse needs of Loblaws’ ecosystem. This included everyday shoppers looking for local products, shoppers with visual impairments needing tactile cues, and store employees requiring an efficient tagging system. By defining these distinct perspectives, our team ensured that the final solution would be inclusive, practical, and valuable for all stakeholders involved."
          ],
          image: '/case-studies/loblaws/7.png'
        },
        {
          heading: "Sprint Backlog",
          subheading: "Project Tasks",
          body: [
            "Our team broke down the project into actionable tasks for our sprints. This involved a systematic approach: starting with an audit of existing in-store displays, brainstorming Canadian brand identifiers, and sketching low-fidelity concepts. We planned to build physical 3D prototypes to test accessibility features in real-world scenarios, iteratively refining our designs based on continuous user testing and feedback."
          ],
          image: '/case-studies/loblaws/8.png'
        },
        {
          heading: "Acceptance Criteria",
          subheading: "Definition of Success",
          body: [
            "To keep our development objective, we established clear acceptance criteria for each user story. Success meant that a shopper could identify product origins at a glance, access detailed preparation info instantly, and rely on recognizable visual and tactile cues. For store operations, it required a simple, error-free tagging process for employees and an accurate engagement tracking system for management to measure the solution’s impact."
          ],
          image: '/case-studies/loblaws/9.png'
        },
        {
          heading: "The Ecosystem Solution",
          subheading: "Sprint 2 Feedback",
          body: [
            "After testing our initial concepts, the team gathered critical feedback to refine our approach. Users appreciated the clear visual hierarchy and the addition of educational characters, but highlighted areas for improvement such as the placement and necessity of QR codes. This feedback loop allowed us to debate and iterate on the design, ensuring the signage worked cohesively as a complete system before moving forward."
          ],
          image: '/case-studies/loblaws/14.png'
        },
        {
          subheading: "Sprint 3 Deliverables",
          body: [
            "Applying the feedback from previous sprints, our team produced multiple high-fidelity options for the 'Made in Canada' tags. We expanded the solution into a broader 'Farm to Aisle' campaign, delivering large and small promotional posters designed to seamlessly integrate into Loblaws’ existing store environments and draw attention to the new tagging system."
          ],
          image: '/case-studies/loblaws/15.png'
        }
      ]
    },
    'airbnb': {
      title: 'Airbnb Feasibility Analysis',
      pdf: '/case-studies/Feasibility Analysis (airbnb).pdf',
      images: [
          '/case-studies/airbnb slides/5. Market Identification.png',
          '/case-studies/airbnb slides/7. Org. Structure.png',
          '/case-studies/airbnb slides/8. Project Schedule.png',
          '/case-studies/airbnb slides/9. Financial Projections.png',
          '/case-studies/airbnb slides/AIRBNB Comparative Evaluation Matrix.png'
      ],
      description: 'A comprehensive feasibility analysis focusing on UX research and business strategy for Airbnb.',
      contentSections: [
        {
          heading: "Project Overview",
          list: [
            "Duration: 16 weeks",
            "Role: UX Market Research"
          ]
        },
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
          heading: "Marketplace",
          body: [
            "Targeting the growing short-term rental market (projected to reach $142.55B by 2026), native video walkthroughs can reduce 'not as described' refund claims, potentially boosting profitability by 14% per listing.",
            "With nearly 60% of buyers preferring properties with 360-degree or video walkthroughs, this integration would give Airbnb a significant competitive edge over Vrbo and Booking.com."
          ]
        },
        {
            heading: "Market Identification",
            image: "/case-studies/airbnb slides/5. Market Identification.png"
        },
        {
          heading: "Comparative Evaluation Matrix",
          body: [
            "We conducted a Comparative Evaluation Matrix on three cases to find which one is the most feasible based on the following factors. Because UX cases can be used as a means to business value, not just aesthetics."
          ],
          image: '/case-studies/airbnb slides/AIRBNB Comparative Evaluation Matrix.png'
        },
        {
          heading: "Organization Structure",
          body: [
            "The project utilizes a matrix-style collaboration built within Airbnb's existing structure rather than creating a new organization.",
            "Key teams include Engineering, UX Design, Research and Testing, Trust & Safety, and Marketing, all coordinated by a Product/Project Manager under the guidance of Airbnb Strategic Leadership."
          ],
          image: '/case-studies/airbnb slides/7. Org. Structure.png'
        },
        {
            heading: "Project Schedule",
            image: "/case-studies/airbnb slides/8. Project Schedule.png"
        },
        {
          heading: "Financial Projections",
          list: [
            "Based on a $4.6M investment and an expected platform-wide conversion lift of 0.20%.",
            "Conservative Case (10% adoption): -7.5% ROI",
            "Break Even (11.6% adoption): 0.05% ROI",
            "Base Case (25% adoption): $5.5M Incremental Revenue, $1.25M Incremental Net Income, achieving a 32.5% ROI."
          ],
          image: '/case-studies/airbnb slides/9. Financial Projections.png'
        }
      ]
    },
    'aida': {
      title: 'Aida AgeTech Expo',
      pdf: '/case-studies/aida/Aida.pdf',
      figmaLink: 'https://www.figma.com/proto/zggkbVpGLIkuJ3USRzxX3C/Aida---AgeTech-Expo?node-id=1-102&t=ayS3ueMNz5EyXL4i-1',
      description: 'A one-stop platform helping caregivers stay focused on care by simplifying learning, tracking, and coordination through AI-driven assistance.',
      contentSections: [
        {
          heading: "Our Mission",
          subheading: "The Problem & Solution",
          body: [
            "Many individuals are thrown into caregiving without training, resulting in severe mental health effects for 74% of caregivers. While education exists, it is often hard to access and coordinate in real-time.",
            "Our solution, Aida, is a one-stop platform that offers bite-sized learning, an AI chatbot for instant guidance, a collaborative care log, and smart suggestions based on caregiver needs."
          ],
          image: '/case-studies/aida/3.png'
        },
        {
          heading: "Product Overview",
          subheading: "Aida Interface",
          body: [
            "Aida features an intuitive Search Engine, a 'Your Bubble' collaborative space, Profile management, and extensive Accessibility settings to support caregivers comprehensively."
          ],
          image: '/case-studies/aida/4.png'
        },
        {
          heading: "Education",
          subheading: "Philosophy & Materials",
          body: [
            "Aida provides quick, easy, AI-suggested content perfect for busy caregivers, helping them learn about topics from bed sores to dementia without struggling to make lesson plans.",
            "Materials include videos, animations, quizzes, and simulations, outsourced to knowledge partners for high-quality, reputable educational content."
          ],
          image: '/case-studies/aida/5.png'
        },
        {
          heading: "Tracking Capabilities",
          subheading: "Physical & Bubble Tracking",
          body: [
            "Caregivers can use pre-made buttons for commonly tracked symptoms, enabling easy logging and physical tracking. The 'Bubble Tracking' ensures that all logged information is readily available and updated for everyone involved in the care recipient's circle."
          ],
          image: '/case-studies/aida/6.png'
        },
        {
          subheading: "AI Tracking Integration",
          body: [
            "Aida’s AI summarizes notes from chats to create daily logged symptoms, finds and presents trends, and notifies caregivers of changes. It uses these symptoms to suggest tailored educational content dynamically."
          ],
          image: '/case-studies/aida/7.png'
        },
        {
          heading: "AI Integration",
          subheading: "GPT-4 Implementation",
          body: [
            "Powered by GPT-4, Aida features a chatbot that accepts text and photo inputs, provides educational summaries, and updates responses based on caregiver interactions.",
            "The model is trained on pre-existing information from our knowledge partners and caregiver-logged symptoms."
          ],
          image: '/case-studies/aida/8.png'
        },
        {
          heading: "Our Future Path",
          subheading: "Seed to Growth Roadmap",
          body: [
            "We are planning an evolution from the Pre-Seed stage (partnering with universities and licensing AI) through the Seed stage (continuous AI training and personalized prompts) to the Growth stage (syncing wearable data and expanding to healthcare organizations)."
          ],
          image: '/case-studies/aida/9.png'
        },
        {
          heading: "Knowledge Partners",
          subheading: "Academic Support",
          body: [
            "Aida is supported by renowned institutions like Schlegel Villages, McMaster University (MIRA), University of Toronto, and the Canadian Institute of Health Research, specializing in aging, dementia, and life course research."
          ],
          image: '/case-studies/aida/11.png'
        },
        {
          heading: "Funding & Production",
          subheading: "Financial Backing & Content Creation",
          body: [
            "We have identified key funding sources such as Age-Well, IA Knowledge Mobilization, and envisAGE to support development.",
            "Production partners like broadcast2world, AXS Studio, and MVP will provide the necessary animations, AR simulations, and interactive e-learning modules."
          ],
          image: '/case-studies/aida/12.png'
        },
        {
          subheading: "Production Companies",
          image: '/case-studies/aida/13.png'
        },
        {
          heading: "System Architecture",
          subheading: "AI-driven Care Assistant",
          body: [
            "Aida combines context from caregiver logs, natural language Q&A, and empathetic guidance. It uses a structured prompt constructor feeding into an LLM (GPT-4) to generate caregiver-facing UI chat reports, explanations, and safety advice."
          ],
          image: '/case-studies/aida/14.png'
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
      
      // Prioritize PDF if it's the loblaws or airbnb case study
      if ((id === 'loblaws' || id === 'airbnb') && caseStudy.pdf) {
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
              {caseStudy.figmaLink && id !== 'airbnb' && (
                <a 
                  href={caseStudy.figmaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors border border-black text-black hover:bg-black hover:text-white"
                >
                  View Figma Prototype ↗
                </a>
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
                id === 'aida' || id === 'indigo' ? (
                  <a 
                    href={caseStudy.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors border border-black text-black hover:bg-black hover:text-white"
                  >
                    {id === 'aida' ? 'View PDF Slideshow ↗' : 'View PDF Doc ↗'}
                  </a>
                ) : (
                  <button 
                    onClick={() => setActiveMedia({ type: 'pdf', src: caseStudy.pdf! })}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest transition-colors ${activeMedia?.type === 'pdf' ? 'bg-[#FF8CD1] text-black border border-[#FF8CD1]' : 'border border-black text-black hover:bg-black hover:text-white'}`}
                  >
                    {id === 'loblaws' || id === 'airbnb' ? 'View PDF Slideshow' : 'View PDF Doc'}
                  </button>
                )
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
                           className="w-full h-full object-contain rounded-2xl cursor-zoom-in"
                           onClick={() => setFullScreenImage(activeMedia.src)}
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
                          className="mt-6 mb-8 cursor-zoom-in rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow group relative"
                          onClick={() => {
                            setActiveMedia({ type: 'image', src: section.image! });
                            setFullScreenImage(section.image!);
                          }}
                        >
                          <img 
                            src={section.image} 
                            alt={section.heading} 
                            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="bg-white/90 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-lg">View Full Screen</span>
                          </div>
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
                      onClick={() => {
                        const isVideo = img.endsWith('.mp4') || img.endsWith('.mov');
                        setActiveMedia({
                          type: isVideo ? 'video' : 'image',
                          src: img
                        });
                        if (!isVideo) setFullScreenImage(img);
                      }}
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

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
            onClick={() => setFullScreenImage(null)}
          >
            <img 
              src={fullScreenImage} 
              alt="Full screen view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}