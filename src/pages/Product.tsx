// Dynamic route
import React from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../components/Products";
import { Rating } from "react-simple-star-rating";
import { useAppDispatch } from "../hooks/reduxHook";
import { addToCart } from "../redux/slices/cartSlice";
import { Loader } from "../components";
import styles from "../styles/products.module.css";

function Product() {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  const [product, setProduct] = React.useState<ProductType | undefined>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
        (res) => res.json()
      );
      setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  const addProduct = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container">
      {loading && <Loader />}
      <div className="">
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.ratingComponent}>
            <Rating
              initialValue={0}
              readonly
              allowHalfIcon
              size={20}
              ratingValue={Number(product?.rating.rate) * 20}
            />
            <p className={styles.ratingNumber}>{product?.rating.rate}/5</p>
          </div>
          <h3 className={styles.title}>{product?.title}</h3>
          <p className={styles.description}>{product?.description}</p>
          <p className={styles.price}>${product?.price}</p>
          <p className={styles.category}>
            <strong>Category: </strong>
            {product?.category}
          </p>

          <button
            className={styles.buyButton}
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
          <button className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
