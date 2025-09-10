import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Zap, 
  Building2, 
  Users, 
  Crown,
  ArrowRight,
  Star
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Perfect for small projects and learning",
      icon: Users,
      color: "text-muted-foreground",
      bgColor: "bg-secondary/50",
      popular: false,
      features: [
        { name: "Up to 1,000 connections", included: true },
        { name: "Basic monitoring", included: true },
        { name: "Community support", included: true },
        { name: "Standard protocols", included: true },
        { name: "Basic authentication", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
        { name: "Custom integrations", included: false },
      ]
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-gradient-primary",
      popular: true,
      features: [
        { name: "Up to 100,000 connections", included: true },
        { name: "Advanced monitoring & analytics", included: true },
        { name: "Priority email support", included: true },
        { name: "All protocols supported", included: true },
        { name: "Advanced security features", included: true },
        { name: "Custom dashboards", included: true },
        { name: "API access", included: true },
        { name: "99.9% SLA", included: true },
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale production deployments",
      icon: Crown,
      color: "text-accent",
      bgColor: "bg-gradient-to-br from-accent/20 to-primary/20",
      popular: false,
      features: [
        { name: "Unlimited connections", included: true },
        { name: "Real-time analytics", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Custom protocols", included: true },
        { name: "Enterprise security", included: true },
        { name: "Custom integrations", included: true },
        { name: "On-premise deployment", included: true },
        { name: "99.99% SLA", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent
            <span className="text-gradient block">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 shadow-glow">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`p-4 ${plan.bgColor} rounded-full w-fit mx-auto mb-4 shadow-glow`}>
                  <plan.icon className={`h-8 w-8 ${plan.color === 'text-primary' ? 'text-primary-foreground' : plan.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full group"
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-lg text-muted-foreground">
              Got questions? We have answers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, 
                  and downgrades will take effect at the next billing cycle.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and wire transfers for Enterprise customers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Is there a free trial for paid plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day free trial for both Professional and Enterprise plans. 
                  No credit card required.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom enterprise solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! We work with enterprise customers to create custom solutions 
                  that meet their specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;