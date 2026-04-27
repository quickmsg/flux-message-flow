import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { ProductIcon, ProductLabel } from "@/components/ProductIdentity";

const ProductShowcase = () => {
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(i18n.language)];

  return (
    <section id="products" className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-14 max-w-3xl min-w-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-primary">
            {content.products.eyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight [overflow-wrap:anywhere] md:text-5xl">
            {content.products.title}
          </h2>
          <p className="mt-5 max-w-[29ch] text-base leading-8 text-muted-foreground [overflow-wrap:anywhere] sm:max-w-none md:text-lg">
            {content.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {content.products.items.map((product) => {
            const SupportIcon = product.icon;

            return (
              <Card
                key={product.id}
                id={product.id}
                className="group flex h-full flex-col overflow-hidden border-border/70 bg-card/80 shadow-card transition-colors hover:border-primary/60"
              >
                <CardHeader className="pb-5">
                  <div className="mb-6 flex items-center justify-between">
                    <ProductIcon product={product.id} size="xl" />
                    <SupportIcon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div className="text-sm text-primary">{product.category}</div>
                  <CardTitle className="mt-2 text-3xl">
                    <ProductLabel product={product.id} label={product.name} size="sm" />
                  </CardTitle>
                  <p className="mt-4 min-h-28 text-sm leading-7 text-muted-foreground">
                    {product.summary}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                  <div className="space-y-3">
                    {product.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="leading-6">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border/70 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant={product.id === "halia" ? "outline" : "hero"}
                      className="w-full justify-between"
                      onClick={() => {
                        if (product.href.startsWith("#")) {
                          document
                            .querySelector(product.href)
                            ?.scrollIntoView({ behavior: "smooth" });
                          return;
                        }
                        if (product.href.startsWith("/")) {
                          window.location.assign(product.href);
                          return;
                        }
                        window.open(product.href, "_blank");
                      }}
                    >
                      <span>{product.cta}</span>
                      {product.href.startsWith("#") ? (
                        <ArrowRight className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
