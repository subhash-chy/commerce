// Dynamic route
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductType } from "../components/Products";
import { Rating } from "react-simple-star-rating";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/slices/cartSlice";
import { Loader } from "../components";
import styles from "../styles/products.module.css";
import useProduct from "../hooks/productsHook";

function Product() {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const [isModelOpen, setIsModelOpen] = React.useState<boolean>(false);

  const { id } = useParams<string>();

  const { products } = useProduct(`https://fakestoreapi.com/products/${id}`);

  // const [qty, setQty] = React.useState<number>(0);
  // products from redux store
  const productsFromStore = useAppSelector((state) => state.cart);

  const findQuantity = (): number => {
    const index = productsFromStore.findIndex(
      (product) => product.id === Number(id)
    );
    if (productsFromStore.length && index !== -1) {
      const qty = productsFromStore[index].quantity;
      return qty;
    } else {
      return 0;
    }
  };
  const quantity = findQuantity();

  const addProduct = (product: ProductType) => {
    setIsModelOpen(true);

    const productWithQuantity: ProductType = { ...product, quantity: 1 };
    dispatch(addToCart(productWithQuantity));

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
            <p className={styles.price}>${products.price}</p>
            <p className={styles.category}>
              <strong>Category: </strong>
              {products.category}
            </p>

            {quantity > 0 ? (
              <div className={styles.buttonContainer}>
                <button
                  className={styles.decreaseQtyButton}
                  onClick={() => dispatch(decreaseQuantity(products.id))}
                >
                  -
                </button>
                <div className={styles.quantityContainer}>
                  <p className={styles.quantity}>Qty: {quantity}</p>
                </div>
                <button
                  className={styles.increaseQtyButton}
                  onClick={() => dispatch(increaseQuantity(products.id))}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className={styles.buyButton}
                onClick={() => addProduct(products)}
              >
                Add to cart
              </button>
            )}
            <button
              className={styles.cancelButton}
              // onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </div>
      </React.Suspense>
    </div>
  );
}

export default Product;
