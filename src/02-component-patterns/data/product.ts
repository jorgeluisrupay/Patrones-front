import { Product } from "../interfaces/interface";

const product1 = {
  id: "1",
  title: "Coffee Mug 1",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffee Mug 2",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [product1, product2];
