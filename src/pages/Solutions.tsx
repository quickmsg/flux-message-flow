import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustrySolutions from "@/components/IndustrySolutions";
import PageHero from "@/components/PageHero";
import SuiteCapabilities from "@/components/SuiteCapabilities";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { useTranslation } from "react-i18next";

const Solutions = () => {
  const { i18n } = useTranslation();
  const locale = getHomepageLocale(i18n.language);
  const content = homepageContent[locale];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        eyebrow={content.solutions.eyebrow}
        title={
          locale === "zh"
            ? "行业案例"
            : "Industry cases"
        }
        subtitle={content.solutions.subtitle}
        image="/site-assets/solutions-command-center.webp"
        primaryLabel={content.nav.contact}
        primaryHref="/contact"
        secondaryLabel={content.nav.products}
        secondaryHref="/products"
      />
      <IndustrySolutions />
      <SuiteCapabilities />
      <Footer />
    </div>
  );
};

export default Solutions;
