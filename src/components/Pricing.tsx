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
      name: t('pricing.plans.community.name'),
      price: t('pricing.plans.community.price'),
      description: t('pricing.plans.community.description'),
      icon: Users,
      color: "text-muted-foreground",
      bgColor: "bg-secondary/50",
      popular: false,
      features: [
        { name: t('pricing.features.connections1k'), included: true },
        { name: t('pricing.features.basicMonitoring'), included: true },
        { name: t('pricing.features.communitySupport'), included: true },
        { name: t('pricing.features.standardProtocols'), included: true },
        { name: t('pricing.features.basicAuth'), included: true },
        { name: t('pricing.features.advancedAnalytics'), included: false },
        { name: t('pricing.features.prioritySupport'), included: false },
        { name: t('pricing.features.customIntegrations'), included: false },
      ]
    },
    {
      name: t('pricing.plans.professional.name'),
      price: t('pricing.plans.professional.price'),
      period: t('pricing.plans.professional.period'),
      description: t('pricing.plans.professional.description'),
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-gradient-primary",
      popular: true,
      features: [
        { name: t('pricing.features.connections100k'), included: true },
        { name: t('pricing.features.advancedMonitoring'), included: true },
        { name: t('pricing.features.priorityEmail'), included: true },
        { name: t('pricing.features.allProtocols'), included: true },
        { name: t('pricing.features.advancedSecurity'), included: true },
        { name: t('pricing.features.customDashboards'), included: true },
        { name: t('pricing.features.apiAccess'), included: true },
        { name: t('pricing.features.sla99'), included: true },
      ]
    },
    {
      name: t('pricing.plans.enterprise.name'),
      price: t('pricing.plans.enterprise.price'),
      description: t('pricing.plans.enterprise.description'),
      icon: Crown,
      color: "text-accent",
      bgColor: "bg-gradient-to-br from-accent/20 to-primary/20",
      popular: false,
      features: [
        { name: t('pricing.features.unlimitedConnections'), included: true },
        { name: t('pricing.features.realtimeAnalytics'), included: true },
        { name: t('pricing.features.dedicatedSupport'), included: true },
        { name: t('pricing.features.customProtocols'), included: true },
        { name: t('pricing.features.enterpriseSecurity'), included: true },
        { name: t('pricing.features.customIntegrations'), included: true },
        { name: t('pricing.features.onPremise'), included: true },
        { name: t('pricing.features.sla99_99'), included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('pricing.title')}
            <span className="text-gradient block">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('pricing.subtitle')}
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
                    {t('pricing.mostPopular')}
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
                  {plan.name === t('pricing.plans.enterprise.name') ? t('pricing.buttons.contactSales') : t('pricing.buttons.getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{t('pricing.faq.title')}</h3>
            <p className="text-lg text-muted-foreground">
              {t('pricing.faq.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('pricing.faq.upgrade.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('pricing.faq.upgrade.answer')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('pricing.faq.payment.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('pricing.faq.payment.answer')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('pricing.faq.trial.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('pricing.faq.trial.answer')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('pricing.faq.enterprise.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('pricing.faq.enterprise.answer')}
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