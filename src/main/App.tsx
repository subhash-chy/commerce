import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Loader, Navbar } from "../components";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Cart = React.lazy(() => import("../pages/Cart"));
const ProductView = React.lazy(() => import("../pages/ProductView"));

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <React.Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/product/:id" element={<ProductView />}></Route>
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
