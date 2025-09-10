import { Button } from "@/components/ui/button";
import { Zap, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = {
    [t('footer.product')]: [
      { name: "Features", href: "#features" },
      { name: "Performance", href: "#performance" },
      { name: "Pricing", href: "#pricing" },
      { name: "Roadmap", href: "#roadmap" }
    ],
    [t('footer.developers')]: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Examples", href: "#examples" },
      { name: "SDKs", href: "#sdks" }
    ],
    [t('footer.resources')]: [
      { name: "Blog", href: "#blog" },
      { name: "Community", href: "#community" },
      { name: "Support", href: "#support" },
      { name: "Status", href: "#status" }
    ],
    [t('footer.company')]: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy", href: "#privacy" }
    ]
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-gradient">FluxMQ</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Button variant="glass" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors group flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('footer.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
              />
              <Button variant="hero">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;