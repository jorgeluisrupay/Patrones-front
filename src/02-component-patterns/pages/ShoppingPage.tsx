import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange, products } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{
              backgroundColor: "#70D1F8",
            }}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
              }}
            />
            <ProductTitle title="" className="text-bold" />
            <ProductButtons
              className="custom-button"
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product, key) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{
              width: "100px",
            }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-button"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
