import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Cpu, 
  Lock,
  RefreshCw,
  Database,
  Network
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Zap,
      title: t('features.lightningFast.title'),
      description: t('features.lightningFast.desc'),
    },
    {
      icon: Shield,
      title: t('features.enterpriseSecurity.title'),
      description: t('features.enterpriseSecurity.desc'),
    },
    {
      icon: Globe,
      title: t('features.globalScale.title'),
      description: t('features.globalScale.desc'),
    },
    {
      icon: BarChart3,
      title: t('features.realTimeAnalytics.title'),
      description: t('features.realTimeAnalytics.desc'),
    },
    {
      icon: Cpu,
      title: t('features.resourceEfficient.title'),
      description: t('features.resourceEfficient.desc'),
    },
    {
      icon: RefreshCw,
      title: t('features.highAvailability.title'),
      description: t('features.highAvailability.desc'),
    },
    {
      icon: Database,
      title: t('features.persistentStorage.title'),
      description: t('features.persistentStorage.desc'),
    },
    {
      icon: Network,
      title: t('features.protocolSupport.title'),
      description: t('features.protocolSupport.desc'),
    },
    {
      icon: Lock,
      title: t('features.accessControl.title'),
      description: t('features.accessControl.desc'),
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('features.title')}
            <span className="text-gradient block">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="p-3 bg-gradient-primary rounded-lg w-fit shadow-glow group-hover:animate-glow">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;