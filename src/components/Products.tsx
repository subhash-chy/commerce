import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import Loader from "./Loader";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Products() {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {loading && <Loader />}
      {/* <Loader /> */}
      {products.map((product: ProductType) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product">
            <div className="image-container">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description truncate">
                {product.description}
              </p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
