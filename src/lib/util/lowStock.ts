import { ProductVariant } from "@medusajs/medusa"

export const lowStock = (variant: Omit<ProductVariant, "beforeInsert">) => {
  return variant.inventory_quantity > 6 && variant.inventory_quantity != null && variant.inventory_quantity < 0
}
