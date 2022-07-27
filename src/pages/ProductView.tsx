// Dynamic route
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ProductType } from "../components/Products";
import { Rating } from "react-simple-star-rating";
import { useAppDispatch } from "../hooks/reduxHook";
import { addToCart } from "../redux/slices/cartSlice";
import { Loader } from "../components";
import styles from "../styles/product-view.module.css";
import useProduct from "../hooks/productsHook";

function ProductView() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isModelOpen, setIsModelOpen] = React.useState<boolean>(false);

  const { id } = useParams<string>();

  const { products } = useProduct(`https://fakestoreapi.com/products/${id}`);

  const [quantity, setQuantity] = React.useState<number>(1);
  const [disabledButton, setDisabledButton] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (quantity > 1) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [quantity]);

  const addProduct = (product: ProductType) => {
    setIsModelOpen(true);

    const productWithQuantity: ProductType = { ...product, quantity: quantity };
    dispatch(addToCart(productWithQuantity));

    setQuantity(1);

    setTimeout(() => {
      setIsModelOpen(false);
    }, 3000);
  };

  return (
    <div className={`container ${isModelOpen && styles.unfocusedContainer}`}>
      {isModelOpen && (
        <div className={styles.modalWrapper}>
          <div className={styles.modalContainer}>
            <div className={styles.modalTitle}>
              <p>Added to cart successfully!!</p>
              <Link className={styles.viewCartButton} to={"/cart"}>
                view cart
              </Link>
            </div>
          </div>
          {/* <div className={styles.progressBar}></div> */}
        </div>
      )}
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
            <div className={styles.priceQtyWrapper}>
              <div className={styles.priceCategory}>
                <p className={styles.price}>${products.price}</p>
                <p className={styles.category}>
                  <strong>Category: </strong>
                  {products.category}
                </p>
              </div>

              <div className={styles.buttonContainer}>
                <button
                  disabled={disabledButton}
                  className={styles.decreaseQtyButton}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <div className={styles.quantityContainer}>
                  <p className={styles.quantity}>Qty: {quantity}</p>
                </div>
                <button
                  className={styles.increaseQtyButton}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.buttonWrapper}>
              <button
                className={styles.buyButton}
                onClick={() => addProduct(products)}
              >
                Add to cart
              </button>

              <button
                className={styles.cancelButton}
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </React.Suspense>
    </div>
  );
}

export default ProductView;
