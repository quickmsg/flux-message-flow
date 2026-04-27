import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Users,
  Zap, 
  Shield, 
  Globe,
  Database, 
  Settings,
  TestTube,
  BarChart3,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FLUXMQ_DOC_INSTALL_CATEGORY_URL, FLUXMQ_DOC_DEMOS_URL } from '@/lib/constants';
import { getHomepageLocale, homepageContent } from '@/lib/homepageContent';
import { ProductIcon, ProductLabel } from '@/components/ProductIdentity';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  badge?: string;
}

const DocumentationPortal: React.FC = () => {
  const { t, i18n } = useTranslation();
  const locale = getHomepageLocale(i18n.language);
  const home = homepageContent[locale];
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const docsSubtitle =
    locale === 'zh'
      ? '按产品查看文档与资源：Halia 工业接入、FluxMQ 消息服务、FCP 控制平面。'
      : 'Browse resources by product: Halia for industrial access, FluxMQ for messaging, and FCP for control plane operations.';

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: t('docs.portal.gettingStarted.title'),
      description: t('docs.portal.gettingStarted.desc'),
      icon: <Download className="h-5 w-5" />,
      href: FLUXMQ_DOC_INSTALL_CATEGORY_URL,
      external: true,
      badge: t('docs.badges.essential')
    },
    {
      id: 'demo-videos',
      title: t('docs.portal.demos.title'),
      description: t('docs.portal.demos.desc'),
      icon: <TestTube className="h-5 w-5" />,
      href: FLUXMQ_DOC_DEMOS_URL,
      external: true,
      badge: t('docs.badges.basic')
    },
    {
      id: 'configuration',
      title: t('docs.portal.configuration.title'),
      description: t('docs.portal.configuration.desc'),
      icon: <Settings className="h-5 w-5" />,
      href: 'https://doc.fluxmq.com/config',
      external: true
    },
    {
      id: 'features',
      title: t('docs.portal.features.title'),
      description: t('docs.portal.features.desc'),
      icon: <Zap className="h-5 w-5" />,
      href: 'https://doc.fluxmq.com/function',
      external: true
    },
    {
      id: 'api',
      title: t('docs.portal.api.title'),
      description: t('docs.portal.api.desc'),
      icon: <BookOpen className="h-5 w-5" />,
      href: 'https://doc.fluxmq.com/api',
      external: true
    },
    {
      id: 'performance',
      title: t('docs.portal.performance.title'),
      description: t('docs.portal.performance.desc'),
      icon: <BarChart3 className="h-5 w-5" />,
      href: 'https://doc.fluxmq.com/test',
      external: true
    },
    {
      id: 'monitoring',
      title: t('docs.portal.monitoring.title'),
      description: t('docs.portal.monitoring.desc'),
      icon: <BarChart3 className="h-5 w-5" />,
      href: 'https://doc.fluxmq.com/view',
      external: true
    }
  ];

  return (
    <section id="documentation" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            {t('docs.portal.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {docsSubtitle}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {['halia', 'fluxmq', 'fcp'].map((product) => (
              <ProductLabel
                key={product}
                product={product}
                size="xs"
                className="border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              />
            ))}
          </div>
        </div>

        {/* By product */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <Card
            className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <CardHeader className="pb-4">
              <ProductIcon product="halia" size="xl" className="mb-3" />
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                <ProductLabel product="halia" size="sm" />
              </CardTitle>
              <p className="text-muted-foreground leading-relaxed">
                {home.products.items[0].summary}
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="outline" className="w-full justify-between group/btn border-primary/50">
                <span>{home.products.items[0].cta}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card
            className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden"
            onClick={() => window.open('https://doc.fluxmq.com', '_blank')}
          >
            <CardHeader className="pb-4">
              <ProductIcon product="fluxmq" size="xl" className="mb-3" />
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                <ProductLabel product="fluxmq" label={t('docs.portal.fluxmqDoc')} size="sm" />
              </CardTitle>
              <p className="text-muted-foreground leading-relaxed">
                {t('docs.portal.fluxmqDocDesc')}
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="hero" className="w-full justify-between group/btn">
                <span>{t('docs.portal.viewDocs')}</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card
            className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden"
            onClick={() => window.open('https://fcp.doc.fluxmq.com', '_blank')}
          >
            <CardHeader className="pb-4">
              <ProductIcon product="fcp" size="xl" className="mb-3" />
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                <ProductLabel product="fcp" label={t('docs.portal.fcpDoc')} size="sm" />
              </CardTitle>
              <p className="text-muted-foreground leading-relaxed">
                {t('docs.portal.fcpDocDesc')}
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="outline" className="w-full justify-between group/btn border-primary/50">
                <span>{t('docs.portal.viewDocs')}</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FluxMQ quick links */}
        <p className="text-center text-sm text-muted-foreground mb-6">{t('docs.portal.quickAccess.title')}</p>
        {/* Documentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docSections.map((section) => (
            <Card 
              key={section.id} 
              className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                    {section.icon}
                  </div>
                  {section.badge && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {section.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {section.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between group"
                    onClick={() => section.external ? window.open(section.href, '_blank') : null}
                  >
                    <span>{t('docs.portal.viewDocs')}</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access */}
        <div className="bg-gradient-card border border-border/50 shadow-card p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t('docs.portal.quickAccess.title')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('docs.portal.quickAccess.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="hero" 
                onClick={() => window.open('https://doc.fluxmq.com', '_blank')}
                className="flex items-center space-x-2"
              >
                <ProductLabel product="fluxmq" label={t('docs.portal.quickAccess.fluxmqDocs')} size="xs" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://fcp.doc.fluxmq.com', '_blank')}
                className="flex items-center space-x-2"
              >
                <ProductLabel product="fcp" label={t('docs.portal.quickAccess.fcpDocs')} size="xs" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://doc.fluxmq.com/FAQ', '_blank')}
                className="flex items-center space-x-2"
              >
                <Users className="h-4 w-4" />
                <span>{t('docs.portal.quickAccess.faq')}</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://github.com/quickmsg/fluxmq', '_blank')}
                className="flex items-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{t('docs.portal.quickAccess.github')}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationPortal;
