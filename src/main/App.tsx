import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home, Product } from "../pages";
import { Navbar } from "../components";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
