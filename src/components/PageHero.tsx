import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  image,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) => {
  const openHref = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
      return;
    }
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.location.assign(href);
  };

  return (
    <section className="relative min-h-[58vh] overflow-hidden border-b border-border/50 pt-32 pb-16">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/0.95)_0%,hsl(var(--background)/0.78)_46%,hsl(var(--background)/0.48)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.4)_0%,hsl(var(--background))_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-3xl min-w-0">
          <p className="mb-4 w-fit border border-primary/30 bg-background/55 px-4 py-2 text-sm font-semibold uppercase tracking-normal text-primary backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="max-w-[calc(100vw-2rem)] text-3xl font-bold leading-tight [overflow-wrap:anywhere] sm:max-w-full sm:text-5xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-[29ch] text-base leading-8 text-muted-foreground [overflow-wrap:anywhere] sm:max-w-2xl md:text-xl">
            {subtitle}
          </p>

          {(primaryLabel || secondaryLabel) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryLabel && primaryHref && (
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full max-w-sm sm:w-auto"
                  onClick={() => openHref(primaryHref)}
                >
                  {primaryLabel}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              )}
              {secondaryLabel && secondaryHref && (
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full max-w-sm sm:w-auto"
                  onClick={() => openHref(secondaryHref)}
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
