import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";
import { Navbar } from "../components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
