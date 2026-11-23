import './about.css';

export default function About() {
  return (
   <div className="about">
      <div className="about-text">
        <span>OUR STORY</span>
        <h1>About Our Store</h1>

        <p>
          Welcome to My Online Store!
          We believe that shopping should be
          simple, enjoyable and affordable.
        </p>

        <p>
          We carefully select our products
          to bring you quality, style and
          the best shopping experience.
        </p>

        <h3>Quality • Style • Trust</h3>
      </div>

      <div className="about-gallery">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
          alt="Store interior"
        />

        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
          alt="Fashion collection"
        />
      </div>
    </div>
  );
}