import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FLUXMQ_DEMO_VIDEOS } from "@/lib/demoVideos";
import { FLUXMQ_DOC_DEMOS_URL } from "@/lib/constants";

const DemoVideos = () => {
  const { t } = useTranslation();

  return (
    <section id="demos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-sm text-muted-foreground mb-4">
            <Play className="h-4 w-4 text-primary" />
            <span>{t("demos.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("demos.title")}
            <span className="text-gradient block">{t("demos.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("demos.subtitle")}
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href={FLUXMQ_DOC_DEMOS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {t("demos.viewDocs")}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FLUXMQ_DEMO_VIDEOS.map((item) => (
            <Card
              key={item.id}
              className="bg-gradient-card border-border/50 overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t(item.titleKey)}</CardTitle>
                <CardDescription>{t("demos.videoHint")}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="rounded-lg overflow-hidden border border-border/50 bg-black/5 aspect-video">
                  <video
                    className="w-full h-full object-contain bg-black"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={item.src} type="video/webm" />
                  </video>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideos;
