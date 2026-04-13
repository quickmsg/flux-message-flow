import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import FluxMQFeatures from "@/components/FluxMQFeatures";
import TrustedBy from "@/components/TrustedBy";
import Performance from "@/components/Performance";
import PerformanceComparison from "@/components/PerformanceComparison";
import QuickStart from "@/components/QuickStart";
import Pricing from "@/components/Pricing";
import DocumentationPortal from "@/components/DocumentationPortal";
import DemoVideos from "@/components/DemoVideos";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <FluxMQFeatures />
      <TrustedBy />
      <Performance />
      <PerformanceComparison />
      <QuickStart />
      <Pricing />
      <DocumentationPortal />
      <DemoVideos />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
