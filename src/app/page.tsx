import Hero from "@/components/Hero";
import TemplateGrid from "@/components/TemplateGrid";
import FeaturedTemplates from "@/components/FeaturedTemplates";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowDoesItWork from "@/components/HowDoesItWork";
import HasAnyoneTriedIt from "@/components/HasAnyoneTriedIt";
import QuizSection from "@/components/QuizSection";
import DoYouSellAnythingElse from "@/components/DoYouSellAnythingElse";
import WhoIsTheDesigner from "@/components/WhoIsTheDesigner";
import Footer from "@/components/Footer";
import { TEMPLATES, REVIEWS, FEATURED_TEMPLATES } from "@/app/api/data/route";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <TemplateGrid templates={TEMPLATES} reviews={REVIEWS} />
        <FeaturedTemplates featuredTemplates={FEATURED_TEMPLATES} />
        <WhyChooseUs />
        <HowDoesItWork />
        <HasAnyoneTriedIt />
        <DoYouSellAnythingElse />
        <QuizSection />
        <WhoIsTheDesigner />
      </main>
      <Footer />
    </div>
  );
}
