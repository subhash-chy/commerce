import React from "react";
import "../styles/Products.css";

interface Product {
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
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map((product: Product) => (
        <div className="product" key={product.id}>
          <div className="image-container">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="product-content">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
