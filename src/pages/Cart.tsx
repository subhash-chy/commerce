import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { RootState } from "../redux/store";
import "../styles/Cart.css";
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
      <h2 className="cart-heading">Your cart</h2>
      {products.map((product) => (
        <div key={product.id} className="cart-product-container">
          <div className="cart-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="cart-image"
            />
          </div>
          <div className="cart-content">
            <h5>{product.title}</h5>
            <p className="cart-description">{product.description}</p>
          </div>
          <div className="cart-price">
            <p>${product.price}</p>
            <button
              className="cart-remove-button"
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {products.length > 0 ? (
        <>
          <div className="cart-total">
            <p className="total-text">Total Payable: </p>
            <p className="total-price">${Math.ceil(total)}</p>
          </div>

          <button className="checkout-button">Proceed to checkout</button>
        </>
      ) : (
        <h4>Your cart is empty!</h4>
      )}
    </div>
  );
}

export default Cart;
