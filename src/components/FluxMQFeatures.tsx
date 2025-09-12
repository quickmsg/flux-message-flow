import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Network, 
  Database, 
  Cpu, 
  Globe, 
  Lock, 
  BarChart3,
  MessageSquare,
  Cloud,
  Settings,
  GitBranch,
  CheckCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";

const FluxMQFeatures = () => {
  const { t } = useTranslation();

  const coreFeatures = [
    {
      icon: Zap,
      title: t('features.lightningFast.title'),
      description: t('features.lightningFast.desc'),
      stats: "1M+ TPS",
      color: "bg-gradient-primary"
    },
    {
      icon: Network,
      title: t('features.globalScale.title'),
      description: t('features.globalScale.desc'),
      stats: "∞ Connections",
      color: "bg-gradient-secondary"
    },
    {
      icon: Shield,
      title: t('features.enterpriseSecurity.title'),
      description: t('features.enterpriseSecurity.desc'),
      stats: "TLS/SSL",
      color: "bg-gradient-accent"
    },
    {
      icon: BarChart3,
      title: t('features.realTimeAnalytics.title'),
      description: t('features.realTimeAnalytics.desc'),
      stats: "Real-time",
      color: "bg-gradient-muted"
    }
  ];

  const technicalFeatures = [
    {
      icon: Cpu,
      title: t('features.technical.performance.title'),
      description: t('features.technical.performance.desc'),
      features: t('features.technical.performance.features', { returnObjects: true }) as string[]
    },
    {
      icon: Database,
      title: t('features.technical.storage.title'),
      description: t('features.technical.storage.desc'),
      features: t('features.technical.storage.features', { returnObjects: true }) as string[]
    },
    {
      icon: MessageSquare,
      title: t('features.technical.mqtt.title'),
      description: t('features.technical.mqtt.desc'),
      features: t('features.technical.mqtt.features', { returnObjects: true }) as string[]
    },
    {
      icon: Cloud,
      title: t('features.technical.cloud.title'),
      description: t('features.technical.cloud.desc'),
      features: t('features.technical.cloud.features', { returnObjects: true }) as string[]
    },
    {
      icon: Settings,
      title: t('features.technical.rules.title'),
      description: t('features.technical.rules.desc'),
      features: t('features.technical.rules.features', { returnObjects: true }) as string[]
    },
    {
      icon: Lock,
      title: t('features.technical.security.title'),
      description: t('features.technical.security.desc'),
      features: t('features.technical.security.features', { returnObjects: true }) as string[]
    }
  ];

  const performanceMetrics = [
    { label: t('features.performance.throughput'), value: t('features.performance.throughputValue'), icon: Zap },
    { label: t('features.performance.connections'), value: t('features.performance.connectionsValue'), icon: Network },
    { label: t('features.performance.latency'), value: t('features.performance.latencyValue'), icon: Cpu },
    { label: t('features.performance.availability'), value: t('features.performance.availabilityValue'), icon: CheckCircle }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('features.title')}
            <span className="text-gradient block">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className={`${feature.color} p-4 rounded-full w-fit mx-auto mb-4 shadow-glow group-hover:animate-glow`}>
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {feature.stats}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('features.performance.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="p-3 bg-gradient-primary rounded-full w-fit mx-auto mb-3 shadow-glow">
                  <metric.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-glow group-hover:animate-glow">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription>
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Highlights */}
        <div className="mt-16 bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t('features.technical.title')}</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('features.technical.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-4 shadow-glow">
                <GitBranch className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{t('features.architecture.cluster.title')}</h4>
              <p className="text-muted-foreground">
                {t('features.architecture.cluster.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-secondary rounded-full w-fit mx-auto mb-4 shadow-glow">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{t('features.architecture.cloudnative.title')}</h4>
              <p className="text-muted-foreground">
                {t('features.architecture.cloudnative.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-accent rounded-full w-fit mx-auto mb-4 shadow-glow">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{t('features.architecture.reliability.title')}</h4>
              <p className="text-muted-foreground">
                {t('features.architecture.reliability.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FluxMQFeatures;
