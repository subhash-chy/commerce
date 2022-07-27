import React from "react";
import styles from "../styles/products.module.css";
import Loader from "./Loader";
import useProduct from "../hooks/productsHook";
import { Product } from "../components";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

function Products() {
  const { products } = useProduct("https://fakestoreapi.com/products");

  return (
    <div className={styles.products}>
      <React.Suspense fallback={<Loader />}>
        {products.slice(0, 1).map((product: ProductType) => (
          <div className={styles.product} key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              quantity={product.quantity}
              rating={product.rating}
            />
          </div>
        ))}

        {products.slice(1, 2).map((product: ProductType) => (
          <div
            className={`${styles.product} ${styles.dominantProduct}`}
            key={product.id}
          >
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              quantity={product.quantity}
              rating={product.rating}
            />
          </div>
        ))}
        {products.slice(2, 4).map((product: ProductType) => (
          <div className={styles.product} key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              quantity={product.quantity}
              rating={product.rating}
            />
          </div>
        ))}

        <div className={styles.ad}>
          <img
            className={styles.adImage}
            src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/CML_Holiday21/Fashion/LANDING_PAGES/headers/CML_HOL21_LP-HEADER_XCAT-M_DT._CB1634600139_.jpg"
            alt="amazon ad"
          />
        </div>

        {products.slice(4, 5).map((product: ProductType) => (
          <div
            className={`${styles.product} ${styles.dominantProduct}`}
            key={product.id}
          >
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              quantity={product.quantity}
              rating={product.rating}
            />
          </div>
        ))}

        {products.slice(5, products.length).map((product: ProductType) => (
          <div className={styles.product} key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              quantity={product.quantity}
              rating={product.rating}
            />
          </div>
        ))}
      </React.Suspense>
    </div>
  );
}

export default Products;
