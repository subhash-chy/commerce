import { ShoppingCartIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
// import {SearchIcon}
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useAppSelector } from "../hooks/reduxHook";

function Navbar() {
  const products = useAppSelector((state) => state.cart);
  return (
    <nav className="nav">
      <Link to="/">
        <p className="logo">CRC</p>
      </Link>
      <div className="links">
        <div className="search-with-icon flex flex-grow items-center w-full h-full bg-red-200 rounded-md">
          <div className="input-cotainer bg-white flex items-center rounded-r-md flex-grow">
            <input
              className="input-search p-3 outline-none flex-grow rounded-r-md"
              placeholder="search.."
              type="search"
            />
          </div>
          <div className="input-icon bg-purple-600 text-white py-3 px-2 rounded-l-md flex items-center justify-center">
            <SearchIcon className="search-icon w-6 h-6 " />
          </div>
        </div>
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
