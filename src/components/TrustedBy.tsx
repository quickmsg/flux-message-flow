import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building2, 
  Rocket, 
  Code2, 
  Star,
  MessageCircle,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustedBy = () => {
  const { t } = useTranslation();

  const companies = [
    { name: "TechCorp", logo: "🏢", industry: "Enterprise" },
    { name: "IoT Solutions", logo: "🌐", industry: "IoT" },
    { name: "StreamData", logo: "📊", industry: "Analytics" },
    { name: "CloudOps", logo: "☁️", industry: "Cloud" },
    { name: "DevTools Inc", logo: "🛠️", industry: "Developer Tools" },
    { name: "RealTime Co", logo: "⚡", industry: "Real-time Systems" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior DevOps Engineer",
      company: "TechCorp",
      content: t('trusted.testimonials.sarah.content'),
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "IoT Solutions",
      content: t('trusted.testimonials.marcus.content'),
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Platform Architect",
      company: "StreamData",
      content: t('trusted.testimonials.lisa.content'),
      rating: 5
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: t('trusted.useCases.enterprise.title'),
      description: t('trusted.useCases.enterprise.desc'),
      features: t('trusted.useCases.enterprise.features', { returnObjects: true })
    },
    {
      icon: Rocket,
      title: t('trusted.useCases.iot.title'),
      description: t('trusted.useCases.iot.desc'),
      features: t('trusted.useCases.iot.features', { returnObjects: true })
    },
    {
      icon: Code2,
      title: t('trusted.useCases.microservices.title'),
      description: t('trusted.useCases.microservices.desc'),
      features: t('trusted.useCases.microservices.features', { returnObjects: true })
    }
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('trusted.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{company.logo}</div>
                  <div className="font-semibold text-sm">{company.name}</div>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    {company.industry}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('trusted.useCases.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('trusted.useCases.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="p-3 bg-gradient-primary rounded-lg w-fit shadow-glow group-hover:animate-glow">
                    <useCase.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {useCase.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('trusted.testimonials.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('trusted.testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-foreground italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 shadow-card p-8">
            <div className="max-w-2xl mx-auto">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t('trusted.community.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('trusted.community.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Card className="bg-secondary/50 p-4 flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">15K+</div>
                  <div className="text-sm text-muted-foreground">{t('trusted.community.developers')}</div>
                </Card>
                <Card className="bg-secondary/50 p-4 flex items-center space-x-4">
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">{t('trusted.community.stars')}</div>
                </Card>
                <Card className="bg-secondary/50 p-4 flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">{t('trusted.community.support')}</div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;