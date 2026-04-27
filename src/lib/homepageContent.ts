import {
  Activity,
  BarChart3,
  Boxes,
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
          href: "/contact",
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
      eyebrow: "Industry cases",
      title: "Real IoT industry cases",
      subtitle:
        "Reference cases from connected vehicles, renewable energy, robot fleets, and factory edge collection show how Halia, FluxMQ, and FCP fit into production systems.",
      items: [
        {
          title: "Connected vehicle data platform",
          caseLabel: "Large automotive group · vehicle telemetry and control",
          scenario:
            "Vehicle terminals continuously report periodic, event, and statistical data. Regional and national data centers need stable access, validation, routing, and service integration.",
          description:
            "FluxMQ acts as the vehicle access gateway, carrying GB/T32960, JT/T808, MQTT, HTTP, and private TCP/UDP traffic into TSP services, data platforms, and control APIs.",
          flow: ["T-BOX / IVI", "FluxMQ cluster", "Rule engine", "Kafka / API", "TSP services"],
          metrics: ["100K-class vehicle concurrency", "Million-level message architecture", "Offline message + API command delivery"],
          outcomes: [
            "Unified vehicle admission and data forwarding",
            "Low-latency two-way communication for app control",
            "Safer integration with certification, ACL, and service APIs",
          ],
          products: ["FluxMQ", "FCP"],
          visual: "/solution-animations/vehicle-data.svg",
          icon: Gauge,
        },
        {
          title: "Renewable energy operations",
          caseLabel: "Distributed photovoltaic and energy assets",
          scenario:
            "Remote stations are widely distributed, operating conditions are harsh, and generation, device status, alarms, and forecasts need to be visible without increasing field work.",
          description:
            "FluxMQ uses clustered access, TLS authentication, per-device topics, and Kafka bridging to keep telemetry flowing into monitoring, diagnosis, and forecasting systems.",
          flow: ["PV devices", "TLS access", "FluxMQ cluster", "Kafka bridge", "Monitoring / forecast"],
          metrics: ["2M+ connected devices", "7-node production cluster", "Per-device topic model"],
          outcomes: [
            "Remote monitoring and diagnosis across stations",
            "High-throughput persistence without data backlog",
            "Lower on-site inspection and operating cost",
          ],
          products: ["FluxMQ", "FCP"],
          visual: "/solution-animations/energy-station.svg",
          icon: Zap,
        },
        {
          title: "Robot and smart equipment fleets",
          caseLabel: "Garden robots and export-oriented equipment",
          scenario:
            "Robot products combine sensors, cameras, voice, text, and private protocols. Edge rules and cloud analytics must work together across markets and networks.",
          description:
            "Halia normalizes edge inputs, NodeMQ handles local messaging, and FluxMQ carries fleet data to Kafka, big data, and business systems for real-time and offline analysis.",
          flow: ["Sensors / camera", "Halia", "NodeMQ", "FluxMQ", "Kafka / big data"],
          metrics: ["Edge stream processing", "Private protocol access", "Real-time + offline data paths"],
          outcomes: [
            "Clear separation between edge collection and cloud services",
            "Flexible data rules for robot scenarios",
            "A reusable cloud-edge pattern for smart hardware fleets",
          ],
          products: ["Halia", "NodeMQ", "FluxMQ"],
          visual: "/solution-animations/robot-fleet.svg",
          icon: Cpu,
        },
        {
          title: "Digital factory edge collection",
          caseLabel: "Industrial equipment, PLC, CNC, and SCADA integration",
          scenario:
            "Factory systems need to collect equipment data, filter invalid payloads, transform point models, and deliver clean streams to platforms, storage, and applications.",
          description:
            "Halia connects industrial protocols and runs edge rules, FluxMQ delivers MQTT data streams, and FCP keeps clusters, access, alerts, and audit trails manageable.",
          flow: ["PLC / CNC", "Halia rules", "FluxMQ", "FCP", "SCADA / analytics"],
          metrics: ["Modbus / OPC UA / IEC104", "Edge filtering and calculation", "MQTT / HTTP / Kafka delivery"],
          outcomes: [
            "Reduced cloud bandwidth and storage pressure",
            "Faster protocol onboarding across sites",
            "Operational visibility for rules, connections, and alarms",
          ],
          products: ["Halia", "FluxMQ", "FCP"],
          visual: "/solution-animations/factory-edge.svg",
          icon: Factory,
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
          href: "/contact",
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
      eyebrow: "行业案例",
      title: "真实物联网行业案例",
      subtitle:
        "结合车联网、新能源、智能机器人与数字化工厂案例，把 Halia、FluxMQ、FCP 放进真实的接入链路、运维模型和业务结果里。",
      items: [
        {
          title: "智能网联汽车数据平台",
          caseLabel: "华中大型车企 · 新能源数据采集与车控链路",
          scenario:
            "车端持续上报周期数据、事件数据与统计数据，平台需要同时对接企业、属地和国家数据中心，并保障车辆准入、监管和业务应用的稳定接入。",
          description:
            "FluxMQ 承担车辆接入网关，承载 GB/T32960、JT/T808、MQTT、HTTP 与私有 TCP/UDP 流量，将车端数据送入 TSP、数据平台与车控 API。",
          flow: ["T-BOX / 车机", "FluxMQ 集群", "规则引擎", "Kafka / API", "TSP 业务"],
          metrics: ["10 万级车辆并发接入", "百万级消息吞吐架构", "离线消息 + API 指令下发"],
          outcomes: [
            "统一车辆准入、监管数据转发与业务数据分发",
            "支持 App 远程控车的低时延双向通信",
            "通过认证、ACL 与服务 API 降低系统集成风险",
          ],
          products: ["FluxMQ", "FCP"],
          visual: "/solution-animations/vehicle-data.svg",
          icon: Gauge,
        },
        {
          title: "新能源场站远程运营",
          caseLabel: "分布式光伏与新能源资产监控",
          scenario:
            "新能源设备分布离散、位置偏远、环境复杂，企业需要实时掌握发电、状态、告警、诊断与预测信息，减少现场巡检压力。",
          description:
            "FluxMQ 通过集群接入、TLS 安全认证、一设备一 Topic 与 Kafka 桥接，把设备遥测稳定送入监控、诊断、预测和存储系统。",
          flow: ["光伏 / 逆变器", "TLS 接入", "FluxMQ 集群", "Kafka 桥接", "监控 / 预测"],
          metrics: ["200 万+设备连接", "7 节点生产集群", "一设备一 Topic 模型"],
          outcomes: [
            "实现跨场站远程监控与远程诊断",
            "高吞吐持久化，桥接数据不积压",
            "降低现场运营、排障和巡检成本",
          ],
          products: ["FluxMQ", "FCP"],
          visual: "/solution-animations/energy-station.svg",
          icon: Zap,
        },
        {
          title: "智能机器人与出海设备",
          caseLabel: "园林机器人、智能硬件与海外业务链路",
          scenario:
            "机器人设备同时包含传感器、摄像头、语音、文本和私有协议数据，需要边缘规则、云端消息和离线分析协同工作。",
          description:
            "Halia 负责边缘输入规范化，NodeMQ 承载本地消息，FluxMQ 将设备数据送入 Kafka、大数据和业务系统，形成实时与离线并行的数据链路。",
          flow: ["传感器 / 摄像头", "Halia", "NodeMQ", "FluxMQ", "Kafka / 大数据"],
          metrics: ["边缘流式处理", "私有协议接入", "实时 + 离线数据通路"],
          outcomes: [
            "边端采集与云端业务解耦",
            "按机器人场景灵活下发和调整数据规则",
            "形成可复用的智能硬件云边一体架构",
          ],
          products: ["Halia", "NodeMQ", "FluxMQ"],
          visual: "/solution-animations/robot-fleet.svg",
          icon: Cpu,
        },
        {
          title: "数字化工厂边缘采集",
          caseLabel: "PLC、CNC、SCADA 与工业现场数据接入",
          scenario:
            "工厂需要接入多类设备协议，过滤无效数据，转换点位模型，并把干净的数据流交付给平台、存储、可视化和分析应用。",
          description:
            "Halia 接入工业协议并执行边缘规则，FluxMQ 承载 MQTT 数据流转，FCP 统一管理集群、访问、告警与审计。",
          flow: ["PLC / CNC", "Halia 规则", "FluxMQ", "FCP", "SCADA / 分析"],
          metrics: ["Modbus / OPC UA / IEC104", "边缘过滤与计算", "MQTT / HTTP / Kafka 输出"],
          outcomes: [
            "降低云端带宽、存储和计算压力",
            "让多站点协议接入更快复用",
            "统一观察规则、连接、告警和审计事件",
          ],
          products: ["Halia", "FluxMQ", "FCP"],
          visual: "/solution-animations/factory-edge.svg",
          icon: Factory,
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
