import { Link } from "react-router-dom";
import styles from "../styles/products.module.css";
import { ProductType } from "./Products";

function Product(props: ProductType) {
  const { id, title, description, image, price } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={`${styles.description} truncate-3`}>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </Link>
  );
}

export default Product;
