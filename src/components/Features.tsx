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

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of messages per second with ultra-low latency and optimized performance.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in TLS encryption, authentication, and authorization for secure message delivery.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across multiple regions with automatic clustering and load balancing.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor performance, track metrics, and gain insights with comprehensive analytics.",
    },
    {
      icon: Cpu,
      title: "Resource Efficient",
      description: "Minimal memory footprint and CPU usage while maintaining maximum throughput.",
    },
    {
      icon: RefreshCw,
      title: "High Availability",
      description: "99.9% uptime with automatic failover and disaster recovery capabilities.",
    },
    {
      icon: Database,
      title: "Persistent Storage",
      description: "Reliable message persistence with configurable retention policies and backup.",
    },
    {
      icon: Network,
      title: "Protocol Support",
      description: "Full MQTT 5.0 compatibility with WebSocket and TCP transport protocols.",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Fine-grained permissions and role-based access control for secure operations.",
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="text-gradient block">Modern Applications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FluxMQ provides everything you need to build reliable, scalable messaging systems 
            with enterprise-grade performance and security.
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