import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import FeaturesPreviewSection from '@/components/sections/FeaturesPreviewSection';
import CompetitorComparisonSection from '@/components/sections/CompetitorComparisonSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesPreviewSection />
      <CompetitorComparisonSection />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}
