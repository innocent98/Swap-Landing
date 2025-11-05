import CTASection from "@/components/sections/Ctasection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OfferSection from "@/components/sections/OfferSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OfferSection />
      <CTASection />
      <Footer />
      {/* Other sections will be added here */}
    </main>
  );
}
