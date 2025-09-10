import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Performance from "@/components/Performance";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Performance />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
