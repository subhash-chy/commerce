import { ShoppingCartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useAppSelector } from "../hooks/reduxHook";

function Navbar() {
  const products = useAppSelector((state) => state.cart);
  return (
    <nav className="nav">
      <Link to="/">CRC</Link>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/cart">Cart</Link> */}
      </div>
      <Link to="/cart">
        <div className="icon-container shopping-cart">
          <ShoppingCartIcon className="icon" />
          {products.length > 0 && (
            <div className="icon-notification">{products.length}</div>
          )}
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
