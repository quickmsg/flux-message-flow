import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import PlatformArchitecture from "@/components/PlatformArchitecture";
import SuiteCapabilities from "@/components/SuiteCapabilities";
import IndustrySolutions from "@/components/IndustrySolutions";
import Performance from "@/components/Performance";
import QuickStart from "@/components/QuickStart";
import DocumentationPortal from "@/components/DocumentationPortal";
import DemoVideos from "@/components/DemoVideos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <PlatformArchitecture />
      <SuiteCapabilities />
      <IndustrySolutions />
      <Performance />
      <QuickStart />
      <DocumentationPortal />
      <DemoVideos />
      <Footer />
    </div>
  );
};

export default Index;
