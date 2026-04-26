import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { getHomepageLocale, homepageContent } from "@/lib/homepageContent";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { i18n } = useTranslation();
  const locale = getHomepageLocale(i18n.language);
  const content = homepageContent[locale];
  const cards = [
    {
      icon: Phone,
      title: locale === "zh" ? "电话沟通" : "Phone",
      value: "13218040662",
      href: "tel:13218040662",
    },
    {
      icon: Mail,
      title: locale === "zh" ? "邮件联系" : "Email",
      value: "xurong.lu@fluxmq.com",
      href: "mailto:xurong.lu@fluxmq.com",
    },
    {
      icon: MapPin,
      title: locale === "zh" ? "适合讨论" : "Best for",
      value: locale === "zh" ? "协议接入、MQTT 集群、FCP 运维管控" : "Protocols, MQTT clusters, and FCP operations",
      href: "/products",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        eyebrow={content.nav.contact}
        title={content.footer.contactTitle}
        subtitle={content.footer.contactText}
        image="/site-assets/suite-hero.webp"
        primaryLabel={content.footer.contactButton}
        primaryHref="mailto:xurong.lu@fluxmq.com"
        secondaryLabel={content.nav.products}
        secondaryHref="/products"
      />
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <Card key={card.title} className="border-border/70 bg-card/80 shadow-card">
                  <CardContent className="p-7">
                    <Icon className="h-8 w-8 text-primary" />
                    <h2 className="mt-6 text-xl font-semibold">{card.title}</h2>
                    <a
                      href={card.href}
                      className="mt-4 block break-words text-sm leading-7 text-muted-foreground transition-colors hover:text-primary"
                    >
                      {card.value}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 border border-border/70 bg-secondary/35 p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {locale === "zh" ? "带着场景来聊，会更快落地" : "Bring your scenario, leave with a rollout path"}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {locale === "zh"
                    ? "我们可以围绕协议类型、连接规模、部署环境、告警与审计要求，给出 Halia、FluxMQ、FCP 的组合建议。"
                    : "We can map protocol mix, connection scale, deployment model, alerting, and audit requirements to the right Halia, FluxMQ, and FCP rollout."}
                </p>
              </div>
              <Button variant="hero" onClick={() => window.location.assign("mailto:xurong.lu@fluxmq.com")}>
                {content.footer.contactButton}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
