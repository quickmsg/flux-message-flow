import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Download, BookOpen, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: Download,
      title: t('getStarted.step1.title'),
      description: t('getStarted.step1.desc'),
      code: "curl -L https://github.com/fluxmq/releases/latest/download/fluxmq.tar.gz",
      action: t('getStarted.step1.action')
    },
    {
      icon: Code,
      title: t('getStarted.step2.title'),
      description: t('getStarted.step2.desc'),
      code: "./fluxmq --config config.yaml --port 1883",
      action: t('getStarted.step2.action')
    },
    {
      icon: Rocket,
      title: t('getStarted.step3.title'),
      description: t('getStarted.step3.desc'),
      code: "mqtt pub -h localhost -p 1883 -t topic -m 'Hello FluxMQ'",
      action: t('getStarted.step3.action')
    }
  ];

  return (
    <section id="docs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('getStarted.title')}
            <span className="text-gradient block">{t('getStarted.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('getStarted.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-glow group-hover:animate-glow">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-muted-foreground/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
                  <code className="text-primary">{step.code}</code>
                </div>
                <Button variant="outline" className="w-full group-hover:variant-primary">
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documentation CTA */}
        <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-6 shadow-glow">
              <BookOpen className="h-12 w-12 text-primary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold mb-6">
              {t('getStarted.docs.title')}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('getStarted.docs.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                {t('getStarted.docs.documentation')}
              </Button>
              <Button variant="glass" size="lg">
                {t('getStarted.docs.api')}
              </Button>
              <Button variant="outline" size="lg">
                {t('getStarted.docs.community')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;