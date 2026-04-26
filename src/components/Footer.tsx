import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";

const Footer = () => {
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(i18n.language)];

  const footerLinks = [
    {
      title: content.footer.products,
      links: [
        { name: "Halia", href: "/products#halia" },
        { name: "FluxMQ", href: "https://doc.fluxmq.com", external: true },
        { name: "FCP", href: "https://fcp.doc.fluxmq.com", external: true },
      ],
    },
    {
      title: content.footer.resources,
      links: [
        { name: "FluxMQ Docs", href: "https://doc.fluxmq.com", external: true },
        { name: "FCP Docs", href: "https://fcp.doc.fluxmq.com", external: true },
        { name: "Demo Videos", href: "/demos" },
        { name: "GitHub", href: "https://github.com/quickmsg/fluxmq", external: true },
      ],
    },
    {
      title: content.footer.company,
      links: [
        { name: content.nav.contact, href: "/contact" },
        { name: "xurong.lu@fluxmq.com", href: "mailto:xurong.lu@fluxmq.com" },
        { name: "13218040662", href: "tel:13218040662" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-secondary/35">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img src="/feixun.svg" alt="Feixun Tech" className="h-9 w-9 object-contain" />
              <span className="text-2xl font-bold">{content.nav.brand}</span>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              {content.footer.description}
            </p>
            <div id="contact" className="mt-8 scroll-mt-28 space-y-3 text-sm">
              <a
                href="tel:13218040662"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                13218040662
              </a>
              <a
                href="mailto:xurong.lu@fluxmq.com"
                className="flex items-center gap-2 break-all text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                xurong.lu@fluxmq.com
              </a>
              <Button
                variant="glass"
                size="icon"
                onClick={() => window.open("https://github.com/quickmsg/fluxmq", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 font-semibold">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                        {link.external && (
                          <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-border/60 bg-card/70 p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{content.footer.contactTitle}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
                {content.footer.contactText}
              </p>
            </div>
            <Button
              variant="hero"
              className="shrink-0"
              onClick={() => window.location.assign("mailto:xurong.lu@fluxmq.com")}
            >
              {content.footer.contactButton}
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>Copyright © 2021-{new Date().getFullYear()} 非迅科技 版权所有 | 苏ICP备2023015068号-1</div>
          <div className="flex gap-5">
            <a href="/products#halia" className="hover:text-primary">
              Halia
            </a>
            <a href="https://doc.fluxmq.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              FluxMQ
            </a>
            <a href="https://fcp.doc.fluxmq.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              FCP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
