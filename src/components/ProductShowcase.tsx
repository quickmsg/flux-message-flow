import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import FluxMQLogo from "./FluxMQLogo";

const ProductShowcase = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: "fluxmq",
      icon: MessageSquare,
      logo: true,
      titleKey: "products.fluxmq.title",
      descKey: "products.fluxmq.desc",
      featuresKey: "products.fluxmq.features",
      link: "https://doc.fluxmq.com",
      linkTextKey: "products.fluxmq.linkText",
      ctaKey: "products.fluxmq.cta",
      gradient: "bg-gradient-primary",
    },
    {
      id: "fcp",
      icon: Cloud,
      logo: false,
      titleKey: "products.fcp.title",
      descKey: "products.fcp.desc",
      featuresKey: "products.fcp.features",
      link: "https://fcp.doc.fluxmq.com",
      linkTextKey: "products.fcp.linkText",
      ctaKey: "products.fcp.cta",
      gradient: "bg-gradient-secondary",
    },
  ];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("products.title")}
            <span className="text-gradient block">{t("products.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  {product.logo ? (
                    <FluxMQLogo size={32} variant="light" className="flex-shrink-0" />
                  ) : (
                    <div
                      className={`${product.gradient} p-3 rounded-xl shadow-glow group-hover:animate-glow`}
                    >
                      <product.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  )}
                  <CardTitle className="text-2xl group-hover:text-gradient transition-all duration-300">
                    {t(product.titleKey)}
                  </CardTitle>
                </div>
                <CardDescription className="text-base mt-2">
                  {t(product.descKey)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {(t(product.featuresKey, { returnObjects: true }) as string[]).map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <Button
                  variant="hero"
                  className="w-full sm:w-auto group/btn"
                  onClick={() => window.open(product.link, "_blank")}
                >
                  {t(product.ctaKey)}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
