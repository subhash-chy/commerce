import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { RootState } from "../redux/store";
import styles from "../styles/cart.module.css";
import { increaseQuantity, decreaseQuantity } from "../redux/slices/cartSlice";

function Cart() {
  const products = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  // Calculating total price
  const prices: Array<number> = [0];
  products.forEach((product) => prices.push(product.price * product.quantity));

  const total = prices.reduce((accumulator, current) => accumulator + current);

  return (
    <div className="container">
      <h2 className={styles.heading}>Your cart</h2>
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
        <h4>Your cart is empty!</h4>
      )}
    </div>
  );
}

export default Cart;
