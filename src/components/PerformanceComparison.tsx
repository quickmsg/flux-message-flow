import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Cpu, 
  HardDrive, 
  Network,
  CheckCircle,
  X,
  ArrowRight,
  Download
} from "lucide-react";
import { useTranslation } from "react-i18next";

const PerformanceComparison = () => {
  const { t } = useTranslation();

  const comparisonData = [
    {
      metric: t('comparison.metrics.throughput'),
      fluxmq: "1,000,000+",
      emqx: "500,000",
      mosquitto: "50,000",
      hivemq: "200,000",
      unit: t('comparison.metrics.unit.throughput'),
      fluxmqBetter: true
    },
    {
      metric: t('comparison.metrics.connections'),
      fluxmq: "1,000,000+",
      emqx: "500,000",
      mosquitto: "100,000",
      hivemq: "300,000",
      unit: t('comparison.metrics.unit.connections'),
      fluxmqBetter: true
    },
    {
      metric: t('comparison.metrics.latency'),
      fluxmq: "< 1ms",
      emqx: "2-5ms",
      mosquitto: "5-10ms",
      hivemq: "3-8ms",
      unit: t('comparison.metrics.unit.latency'),
      fluxmqBetter: true
    },
    {
      metric: t('comparison.metrics.memory'),
      fluxmq: t('comparison.metrics.value.low'),
      emqx: t('comparison.metrics.value.medium'),
      mosquitto: t('comparison.metrics.value.low'),
      hivemq: t('comparison.metrics.value.high'),
      unit: t('comparison.metrics.unit.resource'),
      fluxmqBetter: true
    },
    {
      metric: t('comparison.metrics.cpu'),
      fluxmq: t('comparison.metrics.value.low'),
      emqx: t('comparison.metrics.value.medium'),
      mosquitto: t('comparison.metrics.value.low'),
      hivemq: t('comparison.metrics.value.high'),
      unit: t('comparison.metrics.unit.resource'),
      fluxmqBetter: true
    }
  ];

  const features = [
    {
      feature: t('comparison.features.mqtt5'),
      fluxmq: true,
      emqx: true,
      mosquitto: false,
      hivemq: true
    },
    {
      feature: t('comparison.features.cluster'),
      fluxmq: true,
      emqx: true,
      mosquitto: false,
      hivemq: true
    },
    {
      feature: t('comparison.features.rules'),
      fluxmq: true,
      emqx: true,
      mosquitto: false,
      hivemq: true
    },
    {
      feature: t('comparison.features.webui'),
      fluxmq: true,
      emqx: true,
      mosquitto: false,
      hivemq: true
    },
    {
      feature: t('comparison.features.restapi'),
      fluxmq: true,
      emqx: true,
      mosquitto: false,
      hivemq: true
    },
    {
      feature: t('comparison.features.tls'),
      fluxmq: true,
      emqx: true,
      mosquitto: true,
      hivemq: true
    },
    {
      feature: t('comparison.features.acl'),
      fluxmq: true,
      emqx: true,
      mosquitto: true,
      hivemq: true
    },
    {
      feature: t('comparison.features.persistence'),
      fluxmq: true,
      emqx: true,
      mosquitto: true,
      hivemq: true
    },
    {
      feature: t('comparison.features.opensource'),
      fluxmq: true,
      emqx: t('comparison.features.partial'),
      mosquitto: true,
      hivemq: false
    },
    {
      feature: t('comparison.features.cloudnative'),
      fluxmq: true,
      emqx: true,
      mosquitto: false,
      hivemq: true
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: t('comparison.advantages.performance.title'),
      description: t('comparison.advantages.performance.desc'),
      highlight: t('comparison.advantages.performance.highlight')
    },
    {
      icon: Cpu,
      title: t('comparison.advantages.efficiency.title'),
      description: t('comparison.advantages.efficiency.desc'),
      highlight: t('comparison.advantages.efficiency.highlight')
    },
    {
      icon: Network,
      title: t('comparison.advantages.scalability.title'),
      description: t('comparison.advantages.scalability.desc'),
      highlight: t('comparison.advantages.scalability.highlight')
    },
    {
      icon: BarChart3,
      title: t('comparison.advantages.monitoring.title'),
      description: t('comparison.advantages.monitoring.desc'),
      highlight: t('comparison.advantages.monitoring.highlight')
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('comparison.title')}
            <span className="text-gradient block">{t('comparison.subtitle')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('comparison.description')}
          </p>
        </div>

        {/* Performance Metrics Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('comparison.metrics.title')}</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-card rounded-lg border border-border/50 overflow-hidden">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 font-semibold">指标</th>
                  <th className="text-center p-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                      FluxMQ
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold">EMQX</th>
                  <th className="text-center p-4 font-semibold">Mosquitto</th>
                  <th className="text-center p-4 font-semibold">HiveMQ</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                    <td className="p-4 font-medium">{row.metric}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-bold text-primary">{row.fluxmq}</span>
                        {row.fluxmqBetter && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">{row.emqx}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.mosquitto}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.hivemq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('comparison.features.title')}</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-card rounded-lg border border-border/50 overflow-hidden">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 font-semibold">功能特性</th>
                  <th className="text-center p-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                      FluxMQ
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold">EMQX</th>
                  <th className="text-center p-4 font-semibold">Mosquitto</th>
                  <th className="text-center p-4 font-semibold">HiveMQ</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.fluxmq === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.fluxmq === false ? (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.fluxmq}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.emqx === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.emqx === false ? (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.emqx}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.mosquitto === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.mosquitto === false ? (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.mosquitto}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.hivemq === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.hivemq === false ? (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.hivemq}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('comparison.advantages.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-4 shadow-glow group-hover:animate-glow">
                    <advantage.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-gradient transition-all duration-300">
                    {advantage.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {advantage.highlight}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              {t('comparison.cta.title')}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('comparison.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                <Download className="h-5 w-5 mr-2" />
                {t('comparison.cta.download')}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                <BarChart3 className="h-5 w-5 mr-2" />
                {t('comparison.cta.benchmark')}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceComparison;
