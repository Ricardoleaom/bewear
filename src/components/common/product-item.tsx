import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface ProductItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  const firstVariant = product.variants[0];

  // Parse da URL caso ela esteja armazenada como JSON
  let imageUrl = firstVariant.imageUrl;
  if (
    typeof imageUrl === "string" &&
    imageUrl.startsWith("{") &&
    imageUrl.endsWith("}")
  ) {
    try {
      const parsed = JSON.parse(imageUrl);
      imageUrl = typeof parsed === "string" ? parsed : imageUrl;
    } catch (error) {
      console.error("Erro ao fazer parse da URL da imagem:", error);
    }
  }

  return (
    <Link href="/" className="flex max-w-[150px] flex-col gap-4">
      <Image
        src={imageUrl}
        alt={firstVariant.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />
      <div className="flex flex-col gap-1">
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold">
          {formatCentsToBRL(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
