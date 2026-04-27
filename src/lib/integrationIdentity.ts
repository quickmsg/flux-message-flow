export type IntegrationId =
  | "api"
  | "bigdata"
  | "cnc"
  | "http"
  | "kafka"
  | "monitoring"
  | "mqtt"
  | "plc"
  | "rds"
  | "scada"
  | "tls"
  | "tsp";

export const integrationNames: Record<IntegrationId, string> = {
  api: "API",
  bigdata: "Big Data",
  cnc: "CNC",
  http: "HTTP",
  kafka: "Kafka",
  monitoring: "Monitoring",
  mqtt: "MQTT",
  plc: "PLC",
  rds: "RDS",
  scada: "SCADA",
  tls: "TLS",
  tsp: "TSP",
};

export const integrationAssets: Record<IntegrationId, string> = {
  api: "/integration-icons/api.svg",
  bigdata: "/integration-icons/bigdata.svg",
  cnc: "/integration-icons/cnc.svg",
  http: "/integration-icons/http.svg",
  kafka: "/integration-icons/kafka.svg",
  monitoring: "/integration-icons/monitoring.svg",
  mqtt: "/integration-icons/mqtt.svg",
  plc: "/integration-icons/plc.svg",
  rds: "/integration-icons/rds.svg",
  scada: "/integration-icons/scada.svg",
  tls: "/integration-icons/tls.svg",
  tsp: "/integration-icons/tsp.svg",
};

const matchers: Array<[IntegrationId, RegExp]> = [
  ["kafka", /\bkafka\b/i],
  ["rds", /\brds\b/i],
  ["tsp", /\btsp\b|车控/i],
  ["api", /\bapi\b|接口|指令/i],
  ["mqtt", /\bmqtt\b/i],
  ["http", /\bhttps?\b/i],
  ["tls", /\btls\b|ssl|安全认证/i],
  ["plc", /\bplc\b/i],
  ["cnc", /\bcnc\b/i],
  ["scada", /\bscada\b/i],
  ["bigdata", /big data|大数据|离线数据/i],
  ["monitoring", /monitor|forecast|analytics|监控|预测|诊断|分析|可视化/i],
];

export const integrationIdsFromText = (value?: string | null): IntegrationId[] => {
  if (!value) return [];

  return matchers.reduce<IntegrationId[]>((ids, [id, matcher]) => {
    if (matcher.test(value) && !ids.includes(id)) {
      ids.push(id);
    }
    return ids;
  }, []);
};

export const isIntegrationId = (value: string): value is IntegrationId =>
  Object.prototype.hasOwnProperty.call(integrationNames, value);

export const getIntegrationId = (value: IntegrationId | string): IntegrationId | null => {
  if (isIntegrationId(value)) return value;
  return integrationIdsFromText(value)[0] ?? null;
};
