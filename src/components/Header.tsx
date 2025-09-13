import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FluxMQLogo from "./FluxMQLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark') || 
                window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    
    checkDarkMode();
    
    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);
    
    return () => mediaQuery.removeEventListener('change', checkDarkMode);
  }, []);

  // 监听语言变化，确保状态同步
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    // 设置初始语言状态
    setCurrentLanguage(i18n.language);

    // 监听语言变化
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    // 防止重复切换
    if (i18n.language === lng) return;
    
    // 平滑切换语言，避免页面晃动
    i18n.changeLanguage(lng).then(() => {
      setCurrentLanguage(lng);
    });
  };

  const getCurrentLanguage = () => {
    return currentLanguage === 'zh' ? '中文' : 'English';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <FluxMQLogo size={24} variant={isDark ? 'dark' : 'light'} />
            <span className="text-2xl font-bold text-gradient">FluxMQ</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap min-w-[80px] text-center">
              {t('nav.features')}
            </a>
            <a href="#comparison" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap min-w-[120px] text-center">
              {t('nav.comparison')}
            </a>
            <a href="#quickstart" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap min-w-[100px] text-center">
              {t('nav.quickstart')}
            </a>
            <a href="https://doc.fluxmq.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap min-w-[100px] text-center">
              {t('nav.documentation')}
            </a>
          </div>

          {/* CTA Buttons & Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 min-w-[80px] justify-center">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm whitespace-nowrap">{getCurrentLanguage()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border/50 shadow-card">
                <DropdownMenuItem 
                  onClick={() => changeLanguage('en')}
                  className="cursor-pointer hover:bg-secondary/50"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => changeLanguage('zh')}
                  className="cursor-pointer hover:bg-secondary/50"
                >
                  中文
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" onClick={() => window.open('https://github.com/quickmsg/fluxmq', '_blank')}>
              {t('nav.github')}
            </Button>
            <Button variant="hero" onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <Card className="md:hidden mt-4 bg-card/95 backdrop-blur-sm border-border/50">
            <CardContent className="p-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors py-2 whitespace-nowrap">
                  {t('nav.features')}
                </a>
                <a href="#comparison" className="text-muted-foreground hover:text-primary transition-colors py-2 whitespace-nowrap">
                  {t('nav.comparison')}
                </a>
                <a href="#quickstart" className="text-muted-foreground hover:text-primary transition-colors py-2 whitespace-nowrap">
                  {t('nav.quickstart')}
                </a>
                <a href="https://doc.fluxmq.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors py-2 whitespace-nowrap">
                  {t('nav.documentation')}
                </a>
                
                {/* Mobile Language Selector */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Language:</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant={currentLanguage === 'en' ? 'default' : 'ghost'} 
                      size="sm"
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </Button>
                    <Button 
                      variant={currentLanguage === 'zh' ? 'default' : 'ghost'} 
                      size="sm"
                      onClick={() => changeLanguage('zh')}
                    >
                      中文
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                  <Button variant="ghost" className="justify-start" onClick={() => window.open('https://github.com/quickmsg/fluxmq', '_blank')}>
                    {t('nav.github')}
                  </Button>
                  <Button variant="hero" className="justify-start" onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })}>
                    {t('nav.getStarted')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </header>
  );
};

export default Header;