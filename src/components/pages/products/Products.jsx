import { Link } from "react-router-dom";
import "./products.css";

const products = [
  {
    id: 1,
    name: "Classic Watch",
    price: 45,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Elegant classic wrist watch.",
  },
  {
    id: 2,
    name: "Headphones",
    price: 60,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "High quality wireless headphones.",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 80,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Comfortable everyday sneakers.",
  },
  {
  id: 4,
  name: "Backpack",
  price: 35,
  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  description: "Modern everyday backpack.",
},
{
  id: 5,
  name: "Sunglasses",
  price: 25,
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  description: "Stylish sunglasses.",
},
{
  id: 6,
  name: "Perfume",
  price: 55,
  image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
  description: "Luxury fragrance.",
},
];

export default function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <p className="products-subtitle">
        Discover our latest collection
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h2>${product.price}</h2>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}