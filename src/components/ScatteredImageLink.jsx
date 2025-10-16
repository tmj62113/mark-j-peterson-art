import { Link } from "react-router-dom";
import "./ScatteredImageLink.css";

export default function ScatteredImageLink() {
  return (
    <div className="scattered-image-link">
      <Link to="/products" className="left-image">
        <img
          src="/images/homepage/collections/grid-1/00tv_bowlingpin.JPG"
          alt="Steampunk Art Collection"
        />
        <div className="image-overlay-text">
          <p className="collection-title">Digital Collection</p>
          <p className="shop-now">SHOP NOW</p>
        </div>
      </Link>

      <Link to="/products" className="right-image">
        <p className="right-image-title">Fantasy Landscape</p>
        <img
          src="/images/homepage/collections/grid-1/meditate.png"
          alt="Steampunk Art"
        />
        <p className="right-image-shop">SHOP</p>
      </Link>
    </div>
  );
}
