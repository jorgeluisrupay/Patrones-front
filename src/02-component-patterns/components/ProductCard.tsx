import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties } from "react";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interface";
import { ReactElement } from "react";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffee" /> */}
        {/* <span className={styles.productDescription}> {product.title} </span> */}
        {/* <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div> */}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
        {children}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
