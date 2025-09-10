import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Gauge, Server, Users } from "lucide-react";

const Performance = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "1M+",
      label: "Messages/Second",
      description: "Sustained throughput under load",
      color: "text-primary"
    },
    {
      icon: Gauge,
      value: "<1ms",
      label: "Average Latency",
      description: "End-to-end message delivery",
      color: "text-accent"
    },
    {
      icon: Server,
      value: "99.9%",
      label: "Uptime SLA",
      description: "Enterprise reliability",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "100K+",
      label: "Concurrent Clients",
      description: "Simultaneous connections",
      color: "text-accent"
    }
  ];

  return (
    <section id="performance" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unmatched
            <span className="text-gradient block">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FluxMQ delivers industry-leading performance metrics that scale with your business needs.
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
                Benchmark Results
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Independent performance tests show FluxMQ consistently outperforms 
                other MQTT brokers in throughput, latency, and resource efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                  <span className="font-medium">Message Throughput</span>
                  <span className="text-primary font-bold">3.2x faster</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                  <span className="font-medium">Memory Usage</span>
                  <span className="text-accent font-bold">40% less</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                  <span className="font-medium">CPU Efficiency</span>
                  <span className="text-primary font-bold">2.5x better</span>
                </div>
              </div>
              
              <Button variant="accent" size="lg">
                View Full Benchmarks
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
                    Peak performance on standard hardware
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