import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";
import { products } from "../data/product";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const product = products[0];

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
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          style={{
            backgroundColor: "#70D1F8",
          }}
          initialValues={{
            count: 4,
            // maxCount: 6,
          }}
        >
          {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
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
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>
                {" "}
                {count} {maxCount && `${-maxCount}`}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
