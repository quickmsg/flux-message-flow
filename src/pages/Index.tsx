import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import PlatformArchitecture from "@/components/PlatformArchitecture";
import IndustrySolutions from "@/components/IndustrySolutions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <PlatformArchitecture />
      <IndustrySolutions />
      <Footer />
    </div>
  );
};

export default Index;
