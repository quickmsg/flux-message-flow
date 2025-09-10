import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Header
      "nav.features": "Features",
      "nav.performance": "Performance",
      "nav.documentation": "Documentation",
      "nav.about": "About",
      "nav.github": "GitHub",
      "nav.getStarted": "Get Started",
      
      // Hero Section
      "hero.badge": "🚀 High-Performance MQTT Broker",
      "hero.title": "Scale Your",
      "hero.titleHighlight": "Message Queues",
      "hero.titleEnd": "with FluxMQ",
      "hero.subtitle": "Ultra-fast, scalable MQTT broker designed for modern applications. Handle millions of messages per second with minimal latency and maximum reliability.",
      "hero.getStarted": "Get Started",
      "hero.github": "View on GitHub",
      "hero.download": "Download",
      "hero.stats.messages": "Messages/Second",
      "hero.stats.latency": "Average Latency",
      "hero.stats.uptime": "Uptime SLA",
      
      // Features Section
      "features.title": "Powerful Features for",
      "features.titleHighlight": "Modern Applications",
      "features.subtitle": "FluxMQ provides everything you need to build reliable, scalable messaging systems with enterprise-grade performance and security.",
      "features.lightningFast.title": "Lightning Fast",
      "features.lightningFast.desc": "Process millions of messages per second with ultra-low latency and optimized performance.",
      "features.enterpriseSecurity.title": "Enterprise Security",
      "features.enterpriseSecurity.desc": "Built-in TLS encryption, authentication, and authorization for secure message delivery.",
      "features.globalScale.title": "Global Scale",
      "features.globalScale.desc": "Deploy across multiple regions with automatic clustering and load balancing.",
      "features.realTimeAnalytics.title": "Real-time Analytics",
      "features.realTimeAnalytics.desc": "Monitor performance, track metrics, and gain insights with comprehensive analytics.",
      "features.resourceEfficient.title": "Resource Efficient",
      "features.resourceEfficient.desc": "Minimal memory footprint and CPU usage while maintaining maximum throughput.",
      "features.highAvailability.title": "High Availability",
      "features.highAvailability.desc": "99.9% uptime with automatic failover and disaster recovery capabilities.",
      "features.persistentStorage.title": "Persistent Storage",
      "features.persistentStorage.desc": "Reliable message persistence with configurable retention policies and backup.",
      "features.protocolSupport.title": "Protocol Support",
      "features.protocolSupport.desc": "Full MQTT 5.0 compatibility with WebSocket and TCP transport protocols.",
      "features.accessControl.title": "Access Control",
      "features.accessControl.desc": "Fine-grained permissions and role-based access control for secure operations.",
      
      // Performance Section
      "performance.title": "Unmatched",
      "performance.titleHighlight": "Performance",
      "performance.subtitle": "FluxMQ delivers industry-leading performance metrics that scale with your business needs.",
      "performance.metrics.throughput": "Messages/Second",
      "performance.metrics.throughputDesc": "Sustained throughput under load",
      "performance.metrics.latency": "Average Latency",
      "performance.metrics.latencyDesc": "End-to-end message delivery",
      "performance.metrics.uptime": "Uptime SLA",
      "performance.metrics.uptimeDesc": "Enterprise reliability",
      "performance.metrics.clients": "Concurrent Clients",
      "performance.metrics.clientsDesc": "Simultaneous connections",
      "performance.benchmark.title": "Benchmark Results",
      "performance.benchmark.subtitle": "Independent performance tests show FluxMQ consistently outperforms other MQTT brokers in throughput, latency, and resource efficiency.",
      "performance.benchmark.throughput": "Message Throughput",
      "performance.benchmark.memory": "Memory Usage",
      "performance.benchmark.cpu": "CPU Efficiency",
      "performance.benchmark.button": "View Full Benchmarks",
      "performance.benchmark.peak": "Peak performance on standard hardware",
      
      // Get Started Section
      "getStarted.title": "Get Started in",
      "getStarted.titleHighlight": "Minutes",
      "getStarted.subtitle": "Deploy FluxMQ quickly with our simple setup process and comprehensive documentation.",
      "getStarted.step1.title": "Download FluxMQ",
      "getStarted.step1.desc": "Get the latest release for your platform",
      "getStarted.step1.action": "Download Now",
      "getStarted.step2.title": "Configure & Start",
      "getStarted.step2.desc": "Quick configuration and startup",
      "getStarted.step2.action": "View Config",
      "getStarted.step3.title": "Connect Clients",
      "getStarted.step3.desc": "Start publishing and subscribing",
      "getStarted.step3.action": "See Examples",
      "getStarted.docs.title": "Complete Documentation",
      "getStarted.docs.subtitle": "Explore our comprehensive guides, API references, and tutorials to get the most out of FluxMQ.",
      "getStarted.docs.documentation": "Read Documentation",
      "getStarted.docs.api": "API Reference",
      "getStarted.docs.community": "Community Support",
      
      // Footer
      "footer.description": "High-performance, scalable MQTT broker designed for modern applications. Handle millions of messages with minimal latency.",
      "footer.product": "Product",
      "footer.developers": "Developers",
      "footer.resources": "Resources",
      "footer.company": "Company",
      "footer.newsletter.title": "Stay Updated",
      "footer.newsletter.subtitle": "Get the latest FluxMQ news, updates, and best practices delivered to your inbox.",
      "footer.newsletter.placeholder": "Enter your email",
      "footer.newsletter.subscribe": "Subscribe",
      "footer.copyright": "© 2024 FluxMQ. All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.cookies": "Cookie Policy"
    }
  },
  zh: {
    translation: {
      // Header
      "nav.features": "功能特性",
      "nav.performance": "性能表现",
      "nav.documentation": "文档",
      "nav.about": "关于我们",
      "nav.github": "GitHub",
      "nav.getStarted": "立即开始",
      
      // Hero Section
      "hero.badge": "🚀 高性能MQTT消息代理",
      "hero.title": "用FluxMQ",
      "hero.titleHighlight": "扩展您的消息队列",
      "hero.titleEnd": "",
      "hero.subtitle": "专为现代应用设计的超快速、可扩展MQTT代理。每秒处理数百万条消息，延迟极低，可靠性极高。",
      "hero.getStarted": "立即开始",
      "hero.github": "查看GitHub",
      "hero.download": "下载",
      "hero.stats.messages": "消息/秒",
      "hero.stats.latency": "平均延迟",
      "hero.stats.uptime": "运行时间SLA",
      
      // Features Section
      "features.title": "为",
      "features.titleHighlight": "现代应用程序",
      "features.subtitle": "FluxMQ提供构建可靠、可扩展消息系统所需的一切，具备企业级性能和安全性。",
      "features.lightningFast.title": "闪电般快速",
      "features.lightningFast.desc": "每秒处理数百万条消息，超低延迟，性能优化。",
      "features.enterpriseSecurity.title": "企业级安全",
      "features.enterpriseSecurity.desc": "内置TLS加密、身份验证和授权，确保消息传递安全。",
      "features.globalScale.title": "全球规模",
      "features.globalScale.desc": "支持多区域部署，自动集群和负载均衡。",
      "features.realTimeAnalytics.title": "实时分析",
      "features.realTimeAnalytics.desc": "监控性能、跟踪指标，通过全面的分析获得洞察。",
      "features.resourceEfficient.title": "资源高效",
      "features.resourceEfficient.desc": "最小的内存占用和CPU使用，同时保持最大吞吐量。",
      "features.highAvailability.title": "高可用性",
      "features.highAvailability.desc": "99.9%的正常运行时间，自动故障转移和灾难恢复功能。",
      "features.persistentStorage.title": "持久存储",
      "features.persistentStorage.desc": "可靠的消息持久化，可配置的保留策略和备份。",
      "features.protocolSupport.title": "协议支持",
      "features.protocolSupport.desc": "完全兼容MQTT 5.0，支持WebSocket和TCP传输协议。",
      "features.accessControl.title": "访问控制",
      "features.accessControl.desc": "细粒度权限和基于角色的访问控制，确保安全操作。",
      
      // Performance Section
      "performance.title": "无与伦比的",
      "performance.titleHighlight": "性能表现",
      "performance.subtitle": "FluxMQ提供行业领先的性能指标，可随业务需求扩展。",
      "performance.metrics.throughput": "消息/秒",
      "performance.metrics.throughputDesc": "负载下的持续吞吐量",
      "performance.metrics.latency": "平均延迟",
      "performance.metrics.latencyDesc": "端到端消息传递",
      "performance.metrics.uptime": "运行时间SLA",
      "performance.metrics.uptimeDesc": "企业级可靠性",
      "performance.metrics.clients": "并发客户端",
      "performance.metrics.clientsDesc": "同时连接数",
      "performance.benchmark.title": "基准测试结果",
      "performance.benchmark.subtitle": "独立性能测试显示，FluxMQ在吞吐量、延迟和资源效率方面始终优于其他MQTT代理。",
      "performance.benchmark.throughput": "消息吞吐量",
      "performance.benchmark.memory": "内存使用",
      "performance.benchmark.cpu": "CPU效率",
      "performance.benchmark.button": "查看完整基准测试",
      "performance.benchmark.peak": "标准硬件上的峰值性能",
      
      // Get Started Section
      "getStarted.title": "在",
      "getStarted.titleHighlight": "几分钟内开始",
      "getStarted.subtitle": "通过我们简单的设置流程和全面的文档快速部署FluxMQ。",
      "getStarted.step1.title": "下载FluxMQ",
      "getStarted.step1.desc": "获取适用于您平台的最新版本",
      "getStarted.step1.action": "立即下载",
      "getStarted.step2.title": "配置并启动",
      "getStarted.step2.desc": "快速配置和启动",
      "getStarted.step2.action": "查看配置",
      "getStarted.step3.title": "连接客户端",
      "getStarted.step3.desc": "开始发布和订阅",
      "getStarted.step3.action": "查看示例",
      "getStarted.docs.title": "完整文档",
      "getStarted.docs.subtitle": "探索我们全面的指南、API参考和教程，充分利用FluxMQ。",
      "getStarted.docs.documentation": "阅读文档",
      "getStarted.docs.api": "API参考",
      "getStarted.docs.community": "社区支持",
      
      // Footer
      "footer.description": "专为现代应用设计的高性能、可扩展MQTT代理。以最小延迟处理数百万条消息。",
      "footer.product": "产品",
      "footer.developers": "开发者",
      "footer.resources": "资源",
      "footer.company": "公司",
      "footer.newsletter.title": "保持更新",
      "footer.newsletter.subtitle": "获取最新的FluxMQ新闻、更新和最佳实践，直接发送到您的收件箱。",
      "footer.newsletter.placeholder": "输入您的邮箱",
      "footer.newsletter.subscribe": "订阅",
      "footer.copyright": "© 2024 FluxMQ. 保留所有权利。",
      "footer.privacy": "隐私政策",
      "footer.terms": "服务条款",
      "footer.cookies": "Cookie政策"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;