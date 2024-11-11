import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interface";
import { products } from "../data/product";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log("onProductCountChange", count);
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      //Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      return rest;

      // if (count === 0) {
      //   // con desestructuracion se elimina el objeto con key [product.id]
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    products,
    shoppingCart,
    onProductCountChange,
  };
};
