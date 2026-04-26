import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Network } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/fluxmq-hero.jpg";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";

const Hero = () => {
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(i18n.language)];

  return (
    <section className="relative min-h-[92vh] overflow-hidden border-b border-border/50 pt-28 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial IoT message infrastructure"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.72)_0%,hsl(var(--background)/0.9)_62%,hsl(var(--background))_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-background/55 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            <Network className="h-4 w-4 text-primary" />
            {content.hero.eyebrow}
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            {content.hero.title}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            {content.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="hero"
              size="lg"
              className="group min-w-44"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {content.hero.primaryCta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="min-w-44"
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {content.hero.secondaryCta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-44 border-primary/30 bg-background/40"
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
            {content.hero.pipeline.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="border border-border/70 bg-card/70 px-3 py-2">{item}</span>
                {index < content.hero.pipeline.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-primary/70" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
