import { cn } from "@/lib/utils";
import {
  getIntegrationId,
  integrationAssets,
  integrationIdsFromText,
  integrationNames,
  type IntegrationId,
} from "@/lib/integrationIdentity";

type IntegrationIconSize = "xs" | "sm" | "md";

type IntegrationIconProps = {
  integration: IntegrationId | string;
  size?: IntegrationIconSize;
  framed?: boolean;
  className?: string;
};

type IntegrationIconStripProps = {
  text: string;
  size?: IntegrationIconSize;
  framed?: boolean;
  limit?: number;
  className?: string;
};

const frameSizeClass: Record<IntegrationIconSize, string> = {
  xs: "h-5 w-5",
  sm: "h-7 w-7",
  md: "h-10 w-10",
};

const markSizeClass: Record<IntegrationIconSize, string> = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-7 w-7",
};

const IntegrationMark = ({
  integration,
  size = "md",
}: {
  integration: IntegrationId;
  size?: IntegrationIconSize;
}) => (
  <img
    src={integrationAssets[integration]}
    alt=""
    aria-hidden="true"
    className={cn("block shrink-0 object-contain", markSizeClass[size])}
    loading="lazy"
  />
);

export const IntegrationIcon = ({
  integration,
  size = "md",
  framed = true,
  className,
}: IntegrationIconProps) => {
  const integrationId = getIntegrationId(integration);
  if (!integrationId) return null;

  if (!framed) {
    return <IntegrationMark integration={integrationId} size={size} />;
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center border border-primary/25 bg-primary/10 shadow-[0_0_18px_hsl(var(--primary)/0.10)]",
        frameSizeClass[size],
        className,
      )}
      title={integrationNames[integrationId]}
    >
      <IntegrationMark integration={integrationId} size={size} />
    </span>
  );
};

export const IntegrationIconStrip = ({
  text,
  size = "xs",
  framed = false,
  limit = 3,
  className,
}: IntegrationIconStripProps) => {
  const integrations = integrationIdsFromText(text).slice(0, limit);
  if (integrations.length === 0) return null;

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-1", className)}>
      {integrations.map((integration) => (
        <IntegrationIcon key={integration} integration={integration} size={size} framed={framed} />
      ))}
    </span>
  );
};
