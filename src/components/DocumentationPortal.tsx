import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  ChevronDown,
  ExternalLink,
  FileText,
  Cpu,
  Cloud,
  Home,
  Building2,
  Wrench,
  Puzzle,
  Webhook,
  BarChart3,
  Server,
  Lock,
  MessageSquare,
  ArrowRight,
  Star,
  Users
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface DocumentationItem {
  id: string;
  title: string;
  path: string;
  icon?: React.ComponentType<any>;
  children?: DocumentationItem[];
}

const DocumentationPortal = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<string[]>(["introduction", "installation"]);

  const documentationStructure: DocumentationItem[] = [
    {
      id: "introduction",
      title: t('docs.structure.introduction.title'),
      path: "/docs/introduction",
      icon: Home,
      children: [
        { id: "overview", title: t('docs.structure.introduction.overview'), path: "/docs/introduction/overview" },
        { id: "features", title: t('docs.structure.introduction.features'), path: "/docs/introduction/features" },
        { id: "architecture", title: t('docs.structure.introduction.architecture'), path: "/docs/introduction/architecture" }
      ]
    },
    {
      id: "installation",
      title: t('docs.structure.installation.title'),
      path: "/docs/installation",
      icon: Download,
      children: [
        { id: "optimize", title: t('docs.structure.installation.optimize'), path: "/docs/installation/optimize" },
        { id: "linux", title: t('docs.structure.installation.linux'), path: "/docs/installation/linux" },
        { id: "windows", title: t('docs.structure.installation.windows'), path: "/docs/installation/windows" },
        { id: "macos", title: t('docs.structure.installation.macos'), path: "/docs/installation/macos" },
        { id: "docker", title: t('docs.structure.installation.docker'), path: "/docs/installation/docker" },
        { id: "k8s", title: t('docs.structure.installation.k8s'), path: "/docs/installation/kubernetes" }
      ]
    },
    {
      id: "configuration",
      title: t('docs.structure.configuration.title'),
      path: "/docs/configuration",
      icon: Settings,
      children: [
        { id: "mqtt", title: t('docs.structure.configuration.mqtt'), path: "/docs/configuration/mqtt" },
        { id: "cluster", title: t('docs.structure.configuration.cluster'), path: "/docs/configuration/cluster" },
        { id: "http", title: t('docs.structure.configuration.http'), path: "/docs/configuration/http" },
        { id: "store", title: t('docs.structure.configuration.store'), path: "/docs/configuration/store" },
        { id: "security", title: t('docs.structure.configuration.security'), path: "/docs/configuration/security" }
      ]
    },
    {
      id: "features",
      title: t('docs.structure.features.title'),
      path: "/docs/features",
      icon: Zap,
      children: [
        { id: "auth", title: t('docs.structure.features.auth'), path: "/docs/features/auth" },
        { id: "acl", title: t('docs.structure.features.acl'), path: "/docs/features/acl" },
        { id: "bridge", title: t('docs.structure.features.bridge'), path: "/docs/features/bridge" },
        { id: "webhook", title: t('docs.structure.features.webhook'), path: "/docs/features/webhook" },
        { id: "monitoring", title: t('docs.structure.features.monitoring'), path: "/docs/features/monitoring" }
      ]
    },
    {
      id: "api",
      title: t('docs.structure.api.title'),
      path: "/docs/api",
      icon: Code,
      children: [
        { id: "rest", title: t('docs.structure.api.rest'), path: "/docs/api/rest" },
        { id: "websocket", title: t('docs.structure.api.websocket'), path: "/docs/api/websocket" },
        { id: "management", title: t('docs.structure.api.management'), path: "/docs/api/management" }
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: t('docs.overview.features.performance.title'),
      description: t('docs.overview.features.performance.desc'),
      stats: t('docs.overview.features.performance.stats')
    },
    {
      icon: Network,
      title: t('docs.overview.features.cluster.title'),
      description: t('docs.overview.features.cluster.desc'),
      stats: t('docs.overview.features.cluster.stats')
    },
    {
      icon: Puzzle,
      title: t('docs.overview.features.rules.title'),
      description: t('docs.overview.features.rules.desc'),
      stats: t('docs.overview.features.rules.stats')
    },
    {
      icon: Shield,
      title: t('docs.overview.features.security.title'),
      description: t('docs.overview.features.security.desc'),
      stats: t('docs.overview.features.security.stats')
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: t('docs.quickstart.download.title'),
      description: t('docs.quickstart.download.desc'),
      command: "curl -L https://github.com/quickmsg/fluxmq/releases/latest/download/fluxmq.tar.gz"
    },
    {
      step: 2,
      title: t('docs.quickstart.configure.title'),
      description: t('docs.quickstart.configure.desc'),
      command: "./fluxmq --config config.yaml --port 1883"
    },
    {
      step: 3,
      title: t('docs.quickstart.connect.title'),
      description: t('docs.quickstart.connect.desc'),
      command: "mqtt pub -h localhost -p 1883 -t 'test/topic' -m 'Hello FluxMQ'"
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderSidebarItem = (item: DocumentationItem, level = 0) => {
    const isExpanded = expandedSections.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="w-full">
        <div 
          className={`
            flex items-center justify-between w-full p-2 rounded-lg cursor-pointer transition-all duration-200
            ${selectedCategory === item.id ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'hover:bg-secondary/50'}
            ${level > 0 ? 'ml-4 text-sm' : 'font-medium'}
          `}
          onClick={() => {
            setSelectedCategory(item.id);
            if (hasChildren) toggleSection(item.id);
          }}
        >
          <div className="flex items-center gap-2">
            {item.icon && <item.icon className="h-4 w-4" />}
            <span>{item.title}</span>
          </div>
          {hasChildren && (
            <div className="transition-transform duration-200">
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </div>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const renderContent = () => {
    switch(selectedCategory) {
      case "overview":
        return (
          <div className="space-y-8">
            {/* Product Overview */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{t('docs.overview.title')}</h1>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary">{t('docs.overview.version')}: 2.1.0</Badge>
                <Badge variant="outline">{t('docs.overview.status')}</Badge>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('docs.overview.description')}
              </p>
            </div>

            {/* Key Features Table */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('docs.overview.features.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {keyFeatures.map((feature, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <feature.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{feature.description}</p>
                      <Badge variant="secondary" className="text-xs">{feature.stats}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Architecture Diagram */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('docs.overview.architecture.title')}</h2>
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="bg-secondary/30 rounded-lg p-8 text-center">
                    <Building2 className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {t('docs.overview.architecture.placeholder')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Start */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('docs.overview.quickstart.title')}</h2>
              <div className="space-y-4">
                {quickStartSteps.map((step, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground mb-3">{step.description}</p>
                          <div className="bg-secondary/50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                            <code className="text-primary">{step.command}</code>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{t('docs.sections.placeholder.title')}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('docs.sections.placeholder.description')}
              </p>
            </div>
            
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">{t('docs.sections.placeholder.coming')}</h3>
                <p className="text-muted-foreground mb-6">{t('docs.sections.placeholder.progress')}</p>
                <div className="flex gap-3 justify-center">
                  <Button variant="hero" size="sm">
                    <GitBranch className="h-4 w-4 mr-2" />
                    {t('docs.sections.placeholder.contribute')}
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t('docs.sections.placeholder.suggest')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

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

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder={t('docs.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-secondary/30 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>
        </div>

        {/* Documentation Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-border/50 sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {t('docs.sidebar.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-2">
                    {documentationStructure.map(item => renderSidebarItem(item))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-card border-border/50 min-h-[600px]">
              <CardContent className="p-8">
                {renderContent()}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Links CTA */}
        <div className="mt-24 bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-4 shadow-glow">
                <Download className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('docs.cta.download.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('docs.cta.download.desc')}</p>
              <Button variant="hero">
                {t('docs.cta.download.action')}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div>
              <div className="p-4 bg-gradient-secondary rounded-full w-fit mx-auto mb-4 shadow-glow">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('docs.cta.community.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('docs.cta.community.desc')}</p>
              <Button variant="glass">
                {t('docs.cta.community.action')}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div>
              <div className="p-4 bg-gradient-accent rounded-full w-fit mx-auto mb-4 shadow-glow">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('docs.cta.contribute.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('docs.cta.contribute.desc')}</p>
              <Button variant="outline">
                {t('docs.cta.contribute.action')}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationPortal;