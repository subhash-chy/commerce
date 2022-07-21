import { ShoppingCartIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useAppSelector } from "../hooks/reduxHook";

function Navbar() {
  const products = useAppSelector((state) => state.cart);
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <p className={styles.logo}>CRC</p>
      </Link>
      <div className={styles.links}>
        <div className={styles.searchWithIcon}>
          <div className={styles.inputContainer}>
            <input
              className={styles.inputSearch}
              placeholder="search.."
              type="search"
            />
          </div>
          <div className={styles.inputIcon}>
            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>
      </div>
      <Link to="/cart">
        <div className={`${styles.iconContainer} ${styles.shoppingCart}`}>
          <ShoppingCartIcon className={styles.icon} />
          {products.length > 0 && (
            <div className={styles.iconNotification}>{products.length}</div>
          )}
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
