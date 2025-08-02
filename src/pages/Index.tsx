import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import HeroSection from "@/components/Home/HeroSection";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhatWeDo from "@/components/Home/WhatWeDo";
import ProductHighlights from "@/components/Home/ProductHighlights";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials";

const Index = ({ heroReady, showHeader }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header show={showHeader} /> {/* ✅ */}
      <main>
        <HeroSection animateHero={heroReady} />
        <WhoWeAre />
        <WhatWeDo />
        <ProductHighlights />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};


export default Index;
