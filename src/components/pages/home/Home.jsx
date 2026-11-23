import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to My Online Store</h1>
        

        <p>
          Discover amazing products at the best prices.
          Quality, style and comfort in one place.
        </p>

        <Link  className="shop-btn">
          Shop Now
        </Link>
      </div>
    
       <div className="home-image">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000" alt="Online Store" />
       </div>

    </div>
  )
}