import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import Performance from "@/components/Performance";
import Pricing from "@/components/Pricing";
import DocumentationPortal from "@/components/DocumentationPortal";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <TrustedBy />
      <Performance />
      <Pricing />
      <DocumentationPortal />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
