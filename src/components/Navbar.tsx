import { ShoppingCartIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useAppSelector } from "../hooks/reduxHook";
import { useAuth0 } from "@auth0/auth0-react";
import { ProductType } from "./Products";

function Navbar() {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } =
    useAuth0();

  const products: ProductType[] = useAppSelector((state) => state.cart);
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

      <div className={styles.login}>
        {isLoading && <p>Loading..</p>}
        {!user && !isLoading && (
          <button
            className={styles.loginButton}
            onClick={() => loginWithRedirect()}
          >
            login
          </button>
        )}
        {!isLoading && user && (
          <div className={styles.avatarContainer} onClick={() => logout()}>
            <img
              src={
                user?.picture ||
                "https://w7.pngwing.com/pngs/442/477/png-transparent-computer-icons-user-profile-avatar-profile-heroes-profile-user.png"
              }
              alt={user.name}
            />
          </div>
        )}
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
