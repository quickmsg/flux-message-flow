import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";

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
          <h2 className="text-3xl font-bold leading-tight [overflow-wrap:anywhere] md:text-5xl">
            {content.solutions.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[29ch] text-base leading-8 text-muted-foreground [overflow-wrap:anywhere] sm:max-w-none md:text-lg">
            {content.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.solutions.items.map((solution) => {
            const SolutionIcon = solution.icon;

            return (
              <Card key={solution.title} className="border-border/70 bg-card/80 shadow-card">
                <CardContent className="p-6">
                  <SolutionIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-6 text-xl font-semibold">{solution.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {solution.description}
                  </p>
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
