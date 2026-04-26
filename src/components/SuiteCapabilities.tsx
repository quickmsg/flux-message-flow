import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";

const SuiteCapabilities = () => {
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(i18n.language)];

  return (
    <section id="features" className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-14 max-w-3xl min-w-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-primary">
            {content.capabilities.eyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight [overflow-wrap:anywhere] md:text-5xl">
            {content.capabilities.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border/70 bg-border/70 md:grid-cols-2 lg:grid-cols-3">
          {content.capabilities.items.map((item) => {
            const ItemIcon = item.icon;

            return (
              <div key={item.title} className="bg-card p-7">
                <ItemIcon className="h-7 w-7 text-primary" />
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuiteCapabilities;
