import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { RootState } from "../redux/store";
import styles from "../styles/cart.module.css";
import { removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const products = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  // Calculating total price
  const prices: Array<number> = [0];
  products.forEach((product) => prices.push(product.price));

  const total = prices.reduce((accumulator, current) => accumulator + current);

  const removeProduct = (id: number) => {
    dispatch(removeFromCart(id));
  };

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
            <button
              className={styles.removeButton}
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {products.length > 0 ? (
        <>
          <div className={styles.total}>
            <p className={styles.totalText}>Total Payable: </p>
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
