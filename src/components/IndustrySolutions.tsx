import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { ProductIcon, ProductLabel } from "@/components/ProductIdentity";
import { productIdFromText } from "@/lib/productIdentity";

const IndustrySolutions = () => {
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(i18n.language)];

  return (
    <section id="solutions" className="bg-secondary/25 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-primary">
            {content.solutions.eyebrow}
          </p>
          <h2 className="mx-auto max-w-full text-3xl font-bold leading-tight [overflow-wrap:anywhere] [word-break:break-word] md:text-5xl">
            {content.solutions.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[29ch] text-base leading-8 text-muted-foreground [overflow-wrap:anywhere] sm:max-w-none md:text-lg">
            {content.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {content.solutions.items.map((solution) => {
            const SolutionIcon = solution.icon;

            return (
              <Card
                key={solution.title}
                className="group overflow-hidden border-border/70 bg-card/80 shadow-card transition-colors hover:border-primary/60"
              >
                <div className="aspect-[16/9] border-b border-border/60 bg-background/45">
                  <img
                    src={solution.visual}
                    alt={solution.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-normal text-primary">
                        {solution.caseLabel}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold leading-tight [overflow-wrap:anywhere]">
                        {solution.title}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gradient-primary text-primary-foreground shadow-primary">
                      <SolutionIcon className="h-6 w-6" />
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {solution.scenario}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-foreground/88">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {solution.flow.map((step, index) => {
                      const product = productIdFromText(step);

                      return (
                        <div key={step} className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-2 border border-border/70 bg-background/50 px-3 py-2 text-xs text-muted-foreground">
                            {product && <ProductIcon product={product} size="xs" framed={false} />}
                            {step}
                          </span>
                          {index < solution.flow.length - 1 && (
                            <ArrowRight className="hidden h-4 w-4 text-primary/75 sm:block" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {solution.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="border border-border/70 bg-secondary/35 p-3 text-sm font-semibold leading-6 text-foreground"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto] md:items-end">
                    <div className="space-y-3">
                      {solution.outcomes.map((outcome) => (
                        <div key={outcome} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {solution.products.map((product) => (
                        <ProductLabel
                          key={product}
                          product={product}
                          size="xs"
                          className="border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        />
                      ))}
                    </div>
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

export default IndustrySolutions;
