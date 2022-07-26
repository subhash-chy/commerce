import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { RootState } from "../redux/store";
import styles from "../styles/cart.module.css";
import { useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/slices/cartSlice";

function Cart() {
  const navigate = useNavigate();

  const products = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  // Calculating total price
  const prices: Array<number> = [0];
  products.forEach((product) => prices.push(product.price * product.quantity));

  const total = prices.reduce((accumulator, current) => accumulator + current);

  return (
    <div className="container">
      <div className={styles.flexer}>
        <h2 className={styles.heading}>Your cart</h2>
        <button
          onClick={() => dispatch(clearCart())}
          className={styles.clearCartButton}
        >
          clear cart
        </button>
      </div>
      {products.map((product) => (
        <div key={product.id} className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h5>{product.title}</h5>
            <p className={styles.description}>{product.description}</p>
          </div>
          <div className={styles.price}>
            <p>${product.price}</p>

            <div className={styles.buttonContainer}>
              <button
                className={styles.removeButton}
                onClick={() => dispatch(decreaseQuantity(product.id))}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button
                className={styles.removeButton}
                onClick={() => dispatch(increaseQuantity(product.id))}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      {products.length > 0 ? (
        <>
          <div className={styles.total}>
            <p className={styles.totalText}>Total Price: </p>
            <p className={styles.totalPrice}>${Math.ceil(total)}</p>
          </div>

          <button className={styles.checkoutButton}>Proceed to checkout</button>
        </>
      ) : (
        <div className={styles.emptyCartWrapper}>
          <h4>No shopping yet!</h4>
          <button
            onClick={() => navigate("/")}
            className={styles.continueShoppingButton}
          >
            continue shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
