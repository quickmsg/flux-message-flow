import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProductShowcase from "@/components/ProductShowcase";
import QuickStart from "@/components/QuickStart";
import SuiteCapabilities from "@/components/SuiteCapabilities";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { i18n } = useTranslation();
  const locale = getHomepageLocale(i18n.language);
  const content = homepageContent[locale];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        eyebrow={content.products.eyebrow}
        title={
          locale === "zh"
            ? "产品全景"
            : "Product portfolio"
        }
        subtitle={content.products.subtitle}
        image="/site-assets/products-suite.webp"
        primaryLabel={content.nav.contact}
        primaryHref="/contact"
        secondaryLabel={locale === "zh" ? "查看部署方式" : "View deployment"}
        secondaryHref="#quickstart"
      />
      <ProductShowcase />
      <SuiteCapabilities />
      <QuickStart />
      <Footer />
    </div>
  );
};

export default Products;
