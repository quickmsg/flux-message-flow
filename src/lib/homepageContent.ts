import {
  Activity,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  CloudCog,
  Cpu,
  Database,
  Factory,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  PlugZap,
  RadioTower,
  Route,
  SatelliteDish,
  ServerCog,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

export const getHomepageLocale = (language?: string) =>
  language?.toLowerCase().startsWith("zh") ? "zh" : "en";

export const homepageContent = {
  en: {
    nav: {
      brand: "Feixun Tech",
      products: "Products",
      solutions: "Solutions",
      architecture: "Architecture",
      performance: "Performance",
      docs: "Docs",
      contact: "Contact",
      github: "GitHub",
      language: "Language",
    },
    hero: {
      eyebrow: "Industrial IoT product suite",
      title: "Halia · FluxMQ · FCP",
      subtitle:
        "Connect industrial devices, move massive MQTT traffic, and operate every cluster from one control plane.",
      primaryCta: "Talk to us",
      secondaryCta: "Explore products",
      githubCta: "Open source",
      proof: [
        { value: "Edge", label: "Industrial protocols and data modeling" },
        { value: "Broker", label: "High-throughput MQTT message routing" },
        { value: "Control", label: "License, proxy, monitoring and audit" },
      ],
      pipeline: [
        "PLC / sensor / gateway",
        "Halia acquisition",
        "FluxMQ messaging",
        "FCP operations",
        "Business systems",
      ],
    },
    products: {
      eyebrow: "Product matrix",
      title: "One suite for device data, messaging, and operations",
      subtitle:
        "Each product solves a clear layer of the IoT stack, and they can be used together or introduced independently.",
      ctaPrimary: "View docs",
      ctaContact: "Contact us",
      items: [
        {
          id: "halia",
          name: "Halia",
          category: "Industrial data gateway",
          summary:
            "Protocol adapters, source/sink pipelines, rules, templates, and dashboards for industrial device integration.",
          highlights: [
            "Modbus, OPC UA, CoAP device access",
            "MQTT, HTTP, Kafka, InfluxDB, TDengine outputs",
            "Device templates, rules, events, and data boards",
          ],
          tags: ["Device access", "Edge rules", "Data routing"],
          icon: Cpu,
          href: "#contact",
          cta: "Discuss Halia",
          logo: "/halia.svg",
        },
        {
          id: "fluxmq",
          name: "FluxMQ",
          category: "Cloud-native MQTT broker",
          summary:
            "Distributed MQTT messaging for massive IoT connections, rule processing, secure access, and cloud deployment.",
          highlights: [
            "MQTT 3.1.1 / 5.0, TCP and WebSocket",
            "Rule engine, bridges, ACL, auth, and TLS",
            "Cluster scaling with Docker and Kubernetes",
          ],
          tags: ["MQTT broker", "Rules engine", "Cluster"],
          icon: RadioTower,
          href: "https://doc.fluxmq.com",
          cta: "FluxMQ docs",
          logo: "/logo_light.jpg",
        },
        {
          id: "fcp",
          name: "FCP",
          category: "FluxMQ Control Plane",
          summary:
            "Centralized license, application, proxy, monitoring, alerting, organization, and audit management for FluxMQ fleets.",
          highlights: [
            "License issuing, allocation, and activation",
            "Organizations, projects, users, roles, and audits",
            "Proxy access, cluster health, alerts, and notifications",
          ],
          tags: ["Control plane", "License", "Operations"],
          icon: CloudCog,
          href: "https://fcp.doc.fluxmq.com",
          cta: "FCP docs",
          logo: "/fcp-logo.ico",
        },
      ],
    },
    architecture: {
      eyebrow: "Architecture",
      title: "From field devices to cloud operations",
      subtitle:
        "The site now presents the product family as a connected system: Halia handles acquisition, FluxMQ carries message flow, and FCP keeps fleets governed.",
      stages: [
        {
          title: "Acquire",
          product: "Halia",
          description: "Collect industrial data, normalize points, and trigger edge rules.",
          icon: PlugZap,
        },
        {
          title: "Move",
          product: "FluxMQ",
          description: "Route MQTT traffic with low latency, ACL, auth, and rule processing.",
          icon: Workflow,
        },
        {
          title: "Operate",
          product: "FCP",
          description: "Manage licenses, proxy access, monitoring, alerts, and audit trails.",
          icon: ServerCog,
        },
      ],
      signals: [
        { label: "Protocols", value: "Modbus · OPC UA · CoAP · MQTT", icon: Network },
        { label: "Data outputs", value: "Kafka · HTTP · InfluxDB · TDengine", icon: Database },
        { label: "Governance", value: "RBAC · Audit · Alerts · License", icon: ShieldCheck },
      ],
    },
    capabilities: {
      eyebrow: "Platform capabilities",
      title: "Built for industrial teams, platform teams, and product operators",
      items: [
        {
          title: "Industrial protocol coverage",
          description:
            "Model device sources and actions around real protocols, then reuse templates across sites.",
          icon: SatelliteDish,
        },
        {
          title: "Reliable message backbone",
          description:
            "Use FluxMQ as the MQTT backbone for devices, services, rules, and downstream data systems.",
          icon: Route,
        },
        {
          title: "Unified operations",
          description:
            "Run license, proxy, monitoring, alerting, project isolation, and audit from FCP.",
          icon: LockKeyhole,
        },
        {
          title: "Composable data pipelines",
          description:
            "Connect edge collection to databases, HTTP endpoints, Kafka streams, and application services.",
          icon: GitBranch,
        },
        {
          title: "Production visibility",
          description:
            "Make connection status, cluster health, rule errors, and operational events easier to inspect.",
          icon: Activity,
        },
        {
          title: "Deployment flexibility",
          description:
            "Start small on a single node, then scale to distributed clusters and central control.",
          icon: Boxes,
        },
      ],
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Show the suite by business scenario, not only by technology",
      subtitle:
        "The homepage now speaks to the buying contexts seen on industrial IoT, infrastructure, and enterprise SaaS websites.",
      items: [
        {
          title: "Smart manufacturing",
          description:
            "Collect PLC and equipment data, publish events, and monitor factory-side message flows.",
          icon: Factory,
        },
        {
          title: "Energy and utilities",
          description:
            "Connect remote stations, keep device telemetry flowing, and centralize cluster operations.",
          icon: Zap,
        },
        {
          title: "Connected equipment",
          description:
            "Bridge device fleets into applications with MQTT, HTTP, Kafka, and time-series storage.",
          icon: Gauge,
        },
        {
          title: "Multi-tenant platforms",
          description:
            "Use projects, applications, licenses, proxy access, and audit trails for customer isolation.",
          icon: Building2,
        },
      ],
    },
    footer: {
      description:
        "Feixun Tech builds industrial IoT data access, MQTT messaging, and operations control products for connected systems.",
      contactTitle: "Talk about your deployment",
      contactText:
        "Tell us your protocol mix, connection scale, and operations model. We can map Halia, FluxMQ, and FCP into a concrete rollout path.",
      contactButton: "Contact us",
      products: "Products",
      resources: "Resources",
      company: "Company",
    },
  },
  zh: {
    nav: {
      brand: "非迅科技",
      products: "产品矩阵",
      solutions: "解决方案",
      architecture: "整体架构",
      performance: "性能表现",
      docs: "文档",
      contact: "联系我们",
      github: "GitHub",
      language: "语言",
    },
    hero: {
      eyebrow: "工业物联网产品体系",
      title: "Halia · FluxMQ · FCP",
      subtitle:
        "从工业设备接入，到海量 MQTT 消息流转，再到集群授权、代理、监控与审计，一套产品覆盖完整链路。",
      primaryCta: "联系我们",
      secondaryCta: "查看产品",
      githubCta: "开源项目",
      proof: [
        { value: "Edge", label: "工业协议接入与数据建模" },
        { value: "Broker", label: "高吞吐 MQTT 消息路由" },
        { value: "Control", label: "授权、代理、监控与审计" },
      ],
      pipeline: [
        "PLC / 传感器 / 网关",
        "Halia 数据采集",
        "FluxMQ 消息流转",
        "FCP 统一运维",
        "业务系统",
      ],
    },
    products: {
      eyebrow: "产品矩阵",
      title: "设备数据、消息基础设施、统一管控三件套",
      subtitle:
        "Halia、FluxMQ、FCP 分别覆盖工业接入、消息流转与运营管控，可以组合交付，也可以按场景独立落地。",
      ctaPrimary: "查看文档",
      ctaContact: "联系我们",
      items: [
        {
          id: "halia",
          name: "Halia",
          category: "工业数据接入网关",
          summary:
            "面向工业现场的协议适配、源/动作管道、规则、模板与数据看板，帮助设备数据进入业务系统。",
          highlights: [
            "支持 Modbus、OPC UA、CoAP 设备接入",
            "输出到 MQTT、HTTP、Kafka、InfluxDB、TDengine",
            "设备模板、规则编排、事件与数据看板",
          ],
          tags: ["设备接入", "边缘规则", "数据路由"],
          icon: Cpu,
          href: "#contact",
          cta: "咨询 Halia",
          logo: "/halia.svg",
        },
        {
          id: "fluxmq",
          name: "FluxMQ",
          category: "云原生 MQTT 消息服务",
          summary:
            "面向海量物联网连接的分布式 MQTT Broker，负责连接、消息路由、规则处理、安全接入与云原生部署。",
          highlights: [
            "MQTT 3.1.1 / 5.0，TCP 与 WebSocket",
            "规则引擎、桥接、ACL、认证与 TLS",
            "集群扩展，支持 Docker 与 Kubernetes",
          ],
          tags: ["MQTT Broker", "规则引擎", "集群"],
          icon: RadioTower,
          href: "https://doc.fluxmq.com",
          cta: "FluxMQ 文档",
          logo: "/logo_light.jpg",
        },
        {
          id: "fcp",
          name: "FCP",
          category: "FluxMQ 控制平面",
          summary:
            "集中管理 FluxMQ 集群的 License、应用、代理、监控、告警、组织项目与操作审计，让运维入口统一。",
          highlights: [
            "License 签发、分配与激活",
            "组织、项目、用户、角色与审计",
            "代理接入、集群健康、告警与通知",
          ],
          tags: ["控制平面", "License", "统一运维"],
          icon: CloudCog,
          href: "https://fcp.doc.fluxmq.com",
          cta: "FCP 文档",
          logo: "/fcp-logo.ico",
        },
      ],
    },
    architecture: {
      eyebrow: "整体架构",
      title: "从现场设备到云端运维的完整链路",
      subtitle:
        "官网现在用一条清晰主线展示产品关系：Halia 负责采集，FluxMQ 承载消息，FCP 统一授权、代理、监控与审计。",
      stages: [
        {
          title: "采集",
          product: "Halia",
          description: "接入工业设备，规范化点位数据，并在边缘触发规则。",
          icon: PlugZap,
        },
        {
          title: "流转",
          product: "FluxMQ",
          description: "承载 MQTT 消息路由，并提供低延迟、安全与规则处理能力。",
          icon: Workflow,
        },
        {
          title: "管控",
          product: "FCP",
          description: "统一管理 License、代理访问、监控告警与操作审计。",
          icon: ServerCog,
        },
      ],
      signals: [
        { label: "协议接入", value: "Modbus · OPC UA · CoAP · MQTT", icon: Network },
        { label: "数据输出", value: "Kafka · HTTP · InfluxDB · TDengine", icon: Database },
        { label: "运营治理", value: "RBAC · 审计 · 告警 · License", icon: ShieldCheck },
      ],
    },
    capabilities: {
      eyebrow: "平台能力",
      title: "服务工业团队、平台团队与产品运营团队",
      items: [
        {
          title: "工业协议覆盖",
          description: "围绕真实设备协议配置源与动作，并用模板在多站点复用。",
          icon: SatelliteDish,
        },
        {
          title: "稳定消息骨干",
          description: "用 FluxMQ 作为设备、服务、规则与下游系统之间的 MQTT 消息骨干。",
          icon: Route,
        },
        {
          title: "统一运营管控",
          description: "通过 FCP 统一处理授权、代理、监控、告警、项目隔离与审计。",
          icon: LockKeyhole,
        },
        {
          title: "可组合数据管道",
          description: "把边缘采集连接到数据库、HTTP 端点、Kafka 流与业务应用。",
          icon: GitBranch,
        },
        {
          title: "生产可观测性",
          description: "让连接状态、集群健康、规则错误与运营事件更容易被发现和追踪。",
          icon: Activity,
        },
        {
          title: "灵活部署路径",
          description: "从单节点快速起步，逐步扩展到分布式集群与集中式控制平面。",
          icon: Boxes,
        },
      ],
    },
    solutions: {
      eyebrow: "解决方案",
      title: "用业务场景讲清产品价值，而不只展示技术点",
      subtitle:
        "新版首页参考工业物联网、基础设施与企业 SaaS 官网的表达方式，把产品放进真实采购与落地语境。",
      items: [
        {
          title: "智能制造",
          description: "采集 PLC 与设备数据，发布事件，并监控工厂侧消息链路。",
          icon: Factory,
        },
        {
          title: "能源与公用事业",
          description: "接入远程站点，保持设备遥测持续流转，并集中管理集群。",
          icon: Zap,
        },
        {
          title: "联网设备平台",
          description: "通过 MQTT、HTTP、Kafka 与时序存储，把设备群接入业务应用。",
          icon: Gauge,
        },
        {
          title: "多租户 IoT 平台",
          description: "用项目、应用、License、代理访问与审计能力实现客户隔离。",
          icon: Building2,
        },
      ],
    },
    footer: {
      description:
        "非迅科技提供工业物联网数据接入、MQTT 消息基础设施与统一控制平面产品，帮助企业构建稳定的连接系统。",
      contactTitle: "聊聊你的部署方案",
      contactText:
        "告诉我们你的协议类型、连接规模与运维模型，我们可以把 Halia、FluxMQ、FCP 映射成一条具体落地路径。",
      contactButton: "联系我们",
      products: "产品",
      resources: "资源",
      company: "公司",
    },
  },
} as const;

export type HomepageLocale = keyof typeof homepageContent;
export type ProductContent = (typeof homepageContent.zh.products.items)[number];

export const suiteStats = [
  { icon: CheckCircle2, value: "3", labelKey: "Products" },
  { icon: Layers3, value: "Edge + Cloud", labelKey: "Deployment model" },
  { icon: BarChart3, value: "Unified", labelKey: "Operations view" },
  { icon: Globe2, value: "IoT", labelKey: "Business focus" },
];
