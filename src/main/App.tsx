import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Loader, Navbar } from "../components";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";

// const Home = React.lazy(() => import("../pages/Home"));
const Cart = React.lazy(() => import("../pages/Cart"));
const ProductView = React.lazy(() => import("../pages/ProductView"));

function App() {
  return (
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
  );
}

export default App;
