import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import UXResearchSection from '../components/UXResearchSection';
import GraphicDesignSection from '../components/GraphicDesignSection';
import PhotographyCarouselSection from '../components/PhotographyCarouselSection';
import ResumeSection from '../components/ResumeSection';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-base)]">
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <UXResearchSection />
      <GraphicDesignSection />
      <PhotographyCarouselSection />
      <ResumeSection />
    </div>
  );
}