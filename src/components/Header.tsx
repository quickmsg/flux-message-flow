import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { i18n } = useTranslation();
  const content = homepageContent[getHomepageLocale(currentLanguage)];

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    setCurrentLanguage(i18n.language);
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    if (i18n.language === lng) return;
    i18n.changeLanguage(lng).then(() => setCurrentLanguage(lng));
  };

  const languageLabel = getHomepageLocale(currentLanguage) === "zh" ? "中文" : "English";

  const navItems = [
    { label: content.nav.products, href: "/products" },
    { label: content.nav.solutions, href: "/solutions" },
    { label: content.nav.architecture, href: "/architecture" },
    { label: content.nav.performance, href: "/architecture#performance" },
  ];

  const docItems = [
    { label: "FluxMQ Docs", href: "https://doc.fluxmq.com" },
    { label: "FCP Docs", href: "https://fcp.doc.fluxmq.com" },
    { label: "Demo Videos", href: "/demos" },
    { label: "Halia", href: "/products#halia" },
  ];

  const openLink = (href: string) => {
    if (href.startsWith("#") && document.querySelector(href)) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }
    if (href.startsWith("/")) {
      window.location.assign(href);
      setIsMenuOpen(false);
      return;
    }
    window.open(href, "_blank");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/82 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 sm:px-6">
        <nav className="flex min-w-0 items-center justify-between">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img src="/feixun.svg" alt="Feixun Tech" className="h-8 w-8 shrink-0 object-contain" />
            <span className="truncate text-lg font-bold sm:text-xl md:text-2xl">
              {content.nav.brand}
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  {content.nav.docs}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-border/60 bg-card shadow-card">
                {docItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={() => openLink(item.href)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="min-w-28">
                  <Globe className="h-4 w-4" />
                  {languageLabel}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-border/60 bg-card shadow-card">
                <DropdownMenuItem onClick={() => changeLanguage("en")} className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("zh")} className="cursor-pointer">
                  中文
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" onClick={() => window.open("https://github.com/quickmsg/fluxmq", "_blank")}>
              {content.nav.github}
            </Button>
            <Button variant="hero" onClick={() => openLink("/contact")}>
              {content.nav.contact}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 bg-primary text-primary-foreground shadow-primary hover:bg-primary/90 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {isMenuOpen && (
          <Card className="mt-4 border-border/60 bg-card/95 shadow-card backdrop-blur lg:hidden">
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    className="px-2 py-3 text-left text-muted-foreground hover:text-primary"
                    onClick={() => openLink(item.href)}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-border/60 pt-3">
                  <div className="px-2 py-2 text-sm font-medium text-foreground">
                    {content.nav.docs}
                  </div>
                  {docItems.map((item) => (
                    <button
                      key={item.label}
                      className="block w-full px-2 py-3 text-left text-muted-foreground hover:text-primary"
                      onClick={() => openLink(item.href)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 border-t border-border/60 pt-4">
                  <Button
                    variant={getHomepageLocale(currentLanguage) === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </Button>
                  <Button
                    variant={getHomepageLocale(currentLanguage) === "zh" ? "default" : "outline"}
                    size="sm"
                    onClick={() => changeLanguage("zh")}
                  >
                    中文
                  </Button>
                </div>
                <Button className="mt-3 justify-start" variant="hero" onClick={() => openLink("/contact")}>
                  {content.nav.contact}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </header>
  );
};

export default Header;
