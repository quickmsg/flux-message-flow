import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Network } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { ProductIcon, ProductLabel } from "@/components/ProductIdentity";
import { productIdFromText } from "@/lib/productIdentity";

const Hero = () => {
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(i18n.language)];
  const titleParts = content.hero.title.split("·").map((part) => part.trim());

  return (
    <section className="relative min-h-[92vh] overflow-hidden border-b border-border/50 pt-28 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/site-assets/suite-hero.webp"
          alt="Industrial IoT message infrastructure"
          className="h-full w-full object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/0.94)_0%,hsl(var(--background)/0.73)_46%,hsl(var(--background)/0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.44)_0%,hsl(var(--background)/0.84)_62%,hsl(var(--background))_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl min-w-0 text-center">
          <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-background/55 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            <Network className="h-4 w-4 text-primary" />
            {content.hero.eyebrow}
          </div>

          <h1 className="mx-auto flex w-full max-w-64 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-3xl font-bold leading-tight sm:max-w-4xl sm:text-5xl md:text-7xl">
            {titleParts.map((part, index) => (
              <span key={part} className="inline-flex items-center gap-x-2 whitespace-nowrap">
                {index > 0 && (
                  <span className="text-muted-foreground">·</span>
                )}
                <ProductIcon product={part} size="md" className="h-7 w-7 md:h-10 md:w-10" />
                <span>{part}</span>
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-7 max-w-[28ch] text-base leading-8 text-muted-foreground [overflow-wrap:anywhere] sm:max-w-3xl md:text-xl">
            {content.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="hero"
              size="lg"
              className="group w-full max-w-xs min-w-0 sm:w-auto sm:min-w-44"
              onClick={() => window.location.assign("/contact")}
            >
              {content.hero.primaryCta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="w-full max-w-xs min-w-0 sm:w-auto sm:min-w-44"
              onClick={() => window.location.assign("/products")}
            >
              {content.hero.secondaryCta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-xs min-w-0 border-primary/30 bg-background/40 sm:w-auto sm:min-w-44"
              onClick={() => window.open("https://github.com/quickmsg/fluxmq", "_blank")}
            >
              <Github className="h-5 w-5" />
              {content.hero.githubCta}
            </Button>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-3">
            {content.hero.proof.map((item) => (
              <div
                key={item.value}
                className="border border-border/70 bg-background/60 p-5 text-left backdrop-blur"
              >
                <div className="text-2xl font-semibold text-primary">{item.value}</div>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            {content.hero.pipeline.map((item, index) => {
              const product = productIdFromText(item);

              return (
                <div key={item} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 border border-border/70 bg-card/70 px-3 py-2">
                    {product ? (
                      <ProductLabel product={product} label={item} size="xs" />
                    ) : (
                      item
                    )}
                  </span>
                  {index < content.hero.pipeline.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-primary/70 sm:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
