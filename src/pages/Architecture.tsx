import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Performance from "@/components/Performance";
import PlatformArchitecture from "@/components/PlatformArchitecture";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { useTranslation } from "react-i18next";

const Architecture = () => {
  const { i18n } = useTranslation();
  const locale = getHomepageLocale(i18n.language);
  const content = homepageContent[locale];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        eyebrow={content.architecture.eyebrow}
        title={
          locale === "zh"
            ? "架构全景"
            : "Architecture map"
        }
        subtitle={content.architecture.subtitle}
        image="/site-assets/architecture-network.webp"
        primaryLabel={locale === "zh" ? "查看性能" : "View performance"}
        primaryHref="#performance"
        secondaryLabel={content.nav.products}
        secondaryHref="/products"
      />
      <PlatformArchitecture />
      <Performance />
      <Footer />
    </div>
  );
};

export default Architecture;
