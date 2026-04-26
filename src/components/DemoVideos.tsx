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
          {FLUXMQ_DEMO_VIDEOS.map((item, index) => (
            <Card
              key={item.id}
              className="bg-gradient-card border-border/50 overflow-hidden shadow-card hover:shadow-lg transition-shadow flex flex-col"
            >
              <CardContent className="p-5 pb-3">
                <div
                  className={
                    index === 0
                      ? "rounded-lg overflow-hidden border border-border/50 aspect-video bg-gradient-to-br from-cyan-500/15 via-background to-amber-500/10"
                      : index === 1
                        ? "rounded-lg overflow-hidden border border-border/50 aspect-video bg-gradient-to-br from-emerald-500/15 via-background to-cyan-500/10"
                        : "rounded-lg overflow-hidden border border-border/50 aspect-video bg-gradient-to-br from-emerald-500/15 via-background to-teal-500/10"
                  }
                >
                  <video
                    className="w-full h-full object-cover bg-transparent"
                    controls
                    preload={index === 0 ? "auto" : "metadata"}
                    poster={item.poster}
                    playsInline
                  >
                    <source src={item.src} type="video/webm" />
                  </video>
                </div>
              </CardContent>
              <CardHeader className="pb-5 pt-0 px-5">
                <CardTitle className="text-lg">{t(item.titleKey)}</CardTitle>
                <CardDescription>{t("demos.videoHint")}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideos;
