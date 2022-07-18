import { ShoppingCartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">CRC</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="icon-container shopping-cart">
        <ShoppingCartIcon className="icon" />
        <div className="icon-notification">10</div>
      </div>
    </nav>
  );
}

export default Navbar;
