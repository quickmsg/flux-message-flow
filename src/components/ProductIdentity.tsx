import { cn } from "@/lib/utils";
import {
  getProductId,
  getProductName,
  productAssets,
  productNames,
  type ProductId,
} from "@/lib/productIdentity";

type ProductIconSize = "xs" | "sm" | "md" | "lg" | "xl";

type ProductIconProps = {
  product: ProductId | string;
  size?: ProductIconSize;
  framed?: boolean;
  className?: string;
};

type ProductLabelProps = ProductIconProps & {
  label?: string;
  textClassName?: string;
};

const frameSizeClass: Record<ProductIconSize, string> = {
  xs: "h-5 w-5",
  sm: "h-7 w-7",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

const markSizeClass: Record<ProductIconSize, string> = {
  xs: "h-3.5 w-3.5",
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

const ProductMark = ({ product, size = "md" }: { product: ProductId; size?: ProductIconSize }) => {
  const src = productAssets[product];
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={cn("block shrink-0 object-contain", markSizeClass[size])}
      loading="lazy"
    />
  );
};

export const ProductIcon = ({
  product,
  size = "md",
  framed = true,
  className,
}: ProductIconProps) => {
  const productId = getProductId(product);
  if (!productId) return null;

  if (!framed) {
    return <ProductMark product={productId} size={size} />;
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center border border-primary/30 bg-primary/10 shadow-[0_0_24px_hsl(var(--primary)/0.12)]",
        frameSizeClass[size],
        className,
      )}
      title={productNames[productId]}
    >
      <ProductMark product={productId} size={size} />
    </span>
  );
};

export const ProductLabel = ({
  product,
  label,
  size = "xs",
  framed = true,
  className,
  textClassName,
}: ProductLabelProps) => {
  const productId = getProductId(product);
  const text = label ?? getProductName(product);

  if (!productId) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2", className)}>
      <ProductIcon product={productId} size={size} framed={framed} />
      <span className={cn("truncate", textClassName)}>{text}</span>
    </span>
  );
};
