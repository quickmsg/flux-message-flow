import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Gauge, Server, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Performance = () => {
  const { t } = useTranslation();
  const metrics = [
    {
      icon: TrendingUp,
      value: "1M+",
      label: t('performance.metrics.throughput'),
      description: t('performance.metrics.throughputDesc'),
      color: "text-primary"
    },
    {
      icon: Gauge,
      value: "<1ms",
      label: t('performance.metrics.latency'),
      description: t('performance.metrics.latencyDesc'),
      color: "text-accent"
    },
    {
      icon: Server,
      value: "99.9%",
      label: t('performance.metrics.uptime'),
      description: t('performance.metrics.uptimeDesc'),
      color: "text-primary"
    },
    {
      icon: Users,
      value: "100K+",
      label: t('performance.metrics.clients'),
      description: t('performance.metrics.clientsDesc'),
      color: "text-accent"
    }
  ];

  return (
    <section id="performance" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('performance.title')}
            <span className="text-gradient block">{t('performance.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('performance.subtitle')}
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="text-center bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-gradient-primary rounded-full w-fit shadow-glow group-hover:animate-glow">
                  <metric.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-4xl font-bold mb-2 ${metric.color} group-hover:text-gradient transition-all duration-300`}>
                  {metric.value}
                </div>
                <CardTitle className="text-lg mb-2">{metric.label}</CardTitle>
                <CardDescription>{metric.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benchmark Section */}
        <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {t('performance.benchmark.title')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('performance.benchmark.subtitle')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                  <span className="font-medium">{t('performance.benchmark.throughput')}</span>
                  <span className="text-primary font-bold">3.2x faster</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                  <span className="font-medium">{t('performance.benchmark.memory')}</span>
                  <span className="text-accent font-bold">40% less</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                  <span className="font-medium">{t('performance.benchmark.cpu')}</span>
                  <span className="text-primary font-bold">2.5x better</span>
                </div>
              </div>
              
              <Button variant="accent" size="lg">
                {t('performance.benchmark.button')}
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">
                    1.2M
                  </div>
                  <div className="text-xl text-muted-foreground mb-4">
                    Messages per second
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('performance.benchmark.peak')}
                  </div>
                </div>
                
                {/* Visual elements */}
                <div className="mt-8 flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-3 h-20 bg-gradient-primary rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;