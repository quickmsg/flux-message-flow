import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { ProductIcon, ProductLabel } from "@/components/ProductIdentity";

const PlatformArchitecture = () => {
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(i18n.language)];

  return (
    <section id="architecture" className="border-y border-border/50 bg-secondary/25 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-primary">
              {content.architecture.eyebrow}
            </p>
            <h2 className="text-3xl font-bold leading-tight [overflow-wrap:anywhere] md:text-5xl">
              {content.architecture.title}
            </h2>
            <p className="mt-5 max-w-[29ch] text-base leading-8 text-muted-foreground [overflow-wrap:anywhere] sm:max-w-none md:text-lg">
              {content.architecture.subtitle}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3">
              {content.architecture.signals.map((signal) => {
                const SignalIcon = signal.icon;

                return (
                  <div
                    key={signal.label}
                    className="flex items-start gap-4 border border-border/70 bg-background/45 p-4"
                  >
                    <SignalIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold">{signal.label}</div>
                      <div className="mt-1 text-sm text-muted-foreground [overflow-wrap:anywhere]">
                        {signal.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {content.architecture.stages.map((stage, index) => (
                <div key={stage.product} className="flex flex-col gap-4 md:flex-row md:items-center">
                  <Card className="flex-1 border-border/70 bg-card/80 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <ProductIcon product={stage.product} size="lg" />
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-normal text-primary">
                            {stage.title}
                          </div>
                          <h3 className="mt-1 text-2xl font-bold">
                            <ProductLabel product={stage.product} size="sm" />
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < content.architecture.stages.length - 1 && (
                    <ArrowRight className="mx-auto h-6 w-6 rotate-90 text-primary/70 md:rotate-0" />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitecture;
