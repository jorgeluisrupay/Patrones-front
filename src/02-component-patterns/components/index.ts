import { ProductCardHOCProps } from "../interfaces/interface";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
