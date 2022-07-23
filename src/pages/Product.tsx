// Dynamic route
import React from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../components/Products";
import { Rating } from "react-simple-star-rating";
import { useAppDispatch } from "../hooks/reduxHook";
import { addToCart } from "../redux/slices/cartSlice";
import { Loader } from "../components";
import styles from "../styles/products.module.css";
import useProduct from "../hooks/productsHook";

function Product() {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  const { products } = useProduct(`https://fakestoreapi.com/products/${id}`);

  const addProduct = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container">
      <React.Suspense fallback={<Loader />}>
        <div className="">
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={products.image}
              alt={products.title}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.ratingComponent}>
              <Rating
                initialValue={0}
                readonly
                allowHalfIcon
                size={20}
                ratingValue={Number(products.rating.rate) * 20}
              />
              <p className={styles.ratingNumber}>{products.rating.rate}/5</p>
            </div>
            <h3 className={styles.title}>{products.title}</h3>
            <p className={styles.description}>{products.description}</p>
            <p className={styles.price}>${products.price}</p>
            <p className={styles.category}>
              <strong>Category: </strong>
              {products.category}
            </p>

            <button
              className={styles.buyButton}
              onClick={() => addProduct(products)}
            >
              Add to cart
            </button>
            <button className={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      </React.Suspense>
    </div>
  );
}

export default Product;
