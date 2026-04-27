export type ProductId = "halia" | "fluxmq" | "fcp" | "nodemq";

export const productNames: Record<ProductId, string> = {
  halia: "Halia",
  fluxmq: "FluxMQ",
  fcp: "FCP",
  nodemq: "NodeMQ",
};

export const productAssets: Record<ProductId, string> = {
  halia: "/product-icons/halia.svg",
  fluxmq: "/product-icons/fluxmq.svg",
  fcp: "/product-icons/fcp.svg",
  nodemq: "/product-icons/nodemq.svg",
};

export const productIdFromText = (value?: string | null): ProductId | null => {
  if (!value) return null;
  const text = value.toLowerCase();

  if (text.includes("nodemq")) return "nodemq";
  if (text.includes("halia")) return "halia";
  if (text.includes("fluxmq")) return "fluxmq";
  if (/\bfcp\b/i.test(value)) return "fcp";

  return null;
};

export const getProductName = (product: ProductId | string) => {
  const productId = productIdFromText(product) ?? (product as ProductId);
  return productNames[productId as ProductId] ?? product;
};

export const isProductId = (product: ProductId | string): product is ProductId =>
  product === "halia" || product === "fluxmq" || product === "fcp" || product === "nodemq";

export const getProductId = (product: ProductId | string): ProductId | null => {
  if (isProductId(product)) return product;
  return productIdFromText(product);
};
