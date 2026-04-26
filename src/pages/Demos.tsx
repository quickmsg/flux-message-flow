import DemoVideos from "@/components/DemoVideos";
import DocumentationPortal from "@/components/DocumentationPortal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { getHomepageLocale } from "@/lib/homepageContent";
import { useTranslation } from "react-i18next";

const Demos = () => {
  const { i18n } = useTranslation();
  const locale = getHomepageLocale(i18n.language);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        eyebrow={locale === "zh" ? "演示与文档" : "Demos and docs"}
        title={locale === "zh" ? "从演示视频进入真实使用场景" : "See the platform in real workflows"}
        subtitle={
          locale === "zh"
            ? "演示视频、文档入口与部署路径从首页拆出，方便用户直接进入学习、试用和集成。"
            : "Demo videos, documentation links, and adoption paths now live on a focused page for evaluation and onboarding."
        }
        image="/site-assets/products-suite.webp"
        primaryLabel={locale === "zh" ? "观看演示" : "Watch demos"}
        primaryHref="#demos"
        secondaryLabel={locale === "zh" ? "打开文档" : "Open docs"}
        secondaryHref="#documentation"
      />
      <DemoVideos />
      <DocumentationPortal />
      <Footer />
    </div>
  );
};

export default Demos;
