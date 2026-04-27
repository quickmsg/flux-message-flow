import { IntegrationIcon } from "@/components/IntegrationIdentity";
import { ProductIcon } from "@/components/ProductIdentity";
import { integrationIdsFromText } from "@/lib/integrationIdentity";
import { productIdFromText } from "@/lib/productIdentity";
import { cn } from "@/lib/utils";

type TechIconSize = "xs" | "sm" | "md";

type TechIconStripProps = {
  text: string;
  size?: TechIconSize;
  framed?: boolean;
  limit?: number;
  className?: string;
};

export const TechIconStrip = ({
  text,
  size = "xs",
  framed = false,
  limit = 3,
  className,
}: TechIconStripProps) => {
  const product = productIdFromText(text);
  const integrationLimit = Math.max(product ? limit - 1 : limit, 0);
  const integrations = integrationIdsFromText(text).slice(0, integrationLimit);

  if (!product && integrations.length === 0) return null;

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-1", className)}>
      {product && <ProductIcon product={product} size={size} framed={framed} />}
      {integrations.map((integration) => (
        <IntegrationIcon key={integration} integration={integration} size={size} framed={framed} />
      ))}
    </span>
  );
};
