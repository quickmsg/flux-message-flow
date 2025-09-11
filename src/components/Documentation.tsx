import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Book, 
  Search, 
  Download, 
  Settings, 
  Zap, 
  Shield, 
  Database, 
  Network,
  Code,
  GitBranch,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  FileText,
  Cpu,
  Cloud
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Documentation = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: t('docs.categories.all'), icon: Book },
    { id: "install", label: t('docs.categories.install'), icon: Download },
    { id: "config", label: t('docs.categories.config'), icon: Settings },
    { id: "features", label: t('docs.categories.features'), icon: Zap },
    { id: "api", label: t('docs.categories.api'), icon: Code },
    { id: "cluster", label: t('docs.categories.cluster'), icon: Network }
  ];

  const documentSections = [
    {
      id: "introduction",
      category: "install",
      title: t('docs.sections.introduction.title'),
      description: t('docs.sections.introduction.desc'),
      icon: Book,
      badge: t('docs.badges.basic'),
      items: [
        { title: t('docs.sections.introduction.overview'), path: "/docs/introduction" },
        { title: t('docs.sections.introduction.architecture'), path: "/docs/architecture" },
        { title: t('docs.sections.introduction.quickstart'), path: "/docs/quickstart" }
      ]
    },
    {
      id: "installation",
      category: "install", 
      title: t('docs.sections.installation.title'),
      description: t('docs.sections.installation.desc'),
      icon: Download,
      badge: t('docs.badges.essential'),
      items: [
        { title: t('docs.sections.installation.linux'), path: "/docs/install/linux" },
        { title: t('docs.sections.installation.windows'), path: "/docs/install/windows" },
        { title: t('docs.sections.installation.macos'), path: "/docs/install/macos" },
        { title: t('docs.sections.installation.docker'), path: "/docs/install/docker" },
        { title: t('docs.sections.installation.kubernetes'), path: "/docs/install/kubernetes" }
      ]
    },
    {
      id: "configuration", 
      category: "config",
      title: t('docs.sections.configuration.title'),
      description: t('docs.sections.configuration.desc'),
      icon: Settings,
      badge: t('docs.badges.important'),
      items: [
        { title: t('docs.sections.configuration.mqtt'), path: "/docs/config/mqtt" },
        { title: t('docs.sections.configuration.cluster'), path: "/docs/config/cluster" },
        { title: t('docs.sections.configuration.http'), path: "/docs/config/http" },
        { title: t('docs.sections.configuration.store'), path: "/docs/config/store" },
        { title: t('docs.sections.configuration.security'), path: "/docs/config/security" }
      ]
    },
    {
      id: "features",
      category: "features",
      title: t('docs.sections.features.title'), 
      description: t('docs.sections.features.desc'),
      icon: Zap,
      badge: t('docs.badges.advanced'),
      items: [
        { title: t('docs.sections.features.auth'), path: "/docs/features/auth" },
        { title: t('docs.sections.features.acl'), path: "/docs/features/acl" },
        { title: t('docs.sections.features.bridge'), path: "/docs/features/bridge" },
        { title: t('docs.sections.features.webhook'), path: "/docs/features/webhook" },
        { title: t('docs.sections.features.monitoring'), path: "/docs/features/monitoring" }
      ]
    },
    {
      id: "api",
      category: "api",
      title: t('docs.sections.api.title'),
      description: t('docs.sections.api.desc'),
      icon: Code,
      badge: t('docs.badges.reference'),
      items: [
        { title: t('docs.sections.api.rest'), path: "/docs/api/rest" },
        { title: t('docs.sections.api.websocket'), path: "/docs/api/websocket" },
        { title: t('docs.sections.api.management'), path: "/docs/api/management" },
        { title: t('docs.sections.api.metrics'), path: "/docs/api/metrics" }
      ]
    },
    {
      id: "cluster",
      category: "cluster", 
      title: t('docs.sections.cluster.title'),
      description: t('docs.sections.cluster.desc'),
      icon: Network,
      badge: t('docs.badges.enterprise'),
      items: [
        { title: t('docs.sections.cluster.setup'), path: "/docs/cluster/setup" },
        { title: t('docs.sections.cluster.loadbalancing'), path: "/docs/cluster/loadbalancing" },
        { title: t('docs.sections.cluster.failover'), path: "/docs/cluster/failover" },
        { title: t('docs.sections.cluster.monitoring'), path: "/docs/cluster/monitoring" }
      ]
    }
  ];

  const quickLinks = [
    { title: t('docs.quickLinks.download'), icon: Download, href: "#download", color: "bg-gradient-primary" },
    { title: t('docs.quickLinks.github'), icon: GitBranch, href: "https://github.com/quickmsg/fluxmq", color: "bg-gradient-secondary" },
    { title: t('docs.quickLinks.examples'), icon: FileText, href: "#examples", color: "bg-gradient-accent" },
    { title: t('docs.quickLinks.support'), icon: HelpCircle, href: "#support", color: "bg-gradient-muted" }
  ];

  const filteredSections = documentSections.filter(section => {
    const matchesCategory = selectedCategory === "all" || section.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.items.some(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="documentation" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('docs.title')}
            <span className="text-gradient block">{t('docs.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('docs.subtitle')}
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder={t('docs.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-secondary/30 border-border/50 focus:border-primary/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="h-8"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {quickLinks.map((link, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`${link.color} p-3 rounded-lg w-fit mx-auto mb-4 shadow-glow group-hover:animate-glow`}>
                  <link.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold group-hover:text-gradient transition-all duration-300">
                  {link.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSections.map((section) => (
            <Card 
              key={section.id}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-glow group-hover:animate-glow">
                    <section.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {section.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-200 cursor-pointer group/item"
                    >
                      <span className="text-sm font-medium group-hover/item:text-primary transition-colors">
                        {item.title}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-1 transition-all duration-200" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button variant="hero" size="sm" className="flex-1">
                    <Book className="h-4 w-4 mr-2" />
                    {t('docs.buttons.viewDocs')}
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration CTA */}
        <div className="mt-24 bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto shadow-glow">
                <Cpu className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="p-4 bg-gradient-secondary rounded-full w-fit mx-auto shadow-glow">
                <Cloud className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="p-4 bg-gradient-accent rounded-full w-fit mx-auto shadow-glow">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-6">
              {t('docs.cta.title')}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('docs.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                {t('docs.cta.getStarted')}
              </Button>
              <Button variant="glass" size="lg">
                {t('docs.cta.viewExamples')}
              </Button>
              <Button variant="outline" size="lg">
                {t('docs.cta.joinCommunity')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;