import { Link } from 'react-router-dom';
import './ScatteredTextImage.css';

export default function ScatteredTextImage() {
  return (
    <div className="scattered-text-image">
      <Link to="/products" className="text-side">
        <p className="bold-text">
          Minimalist abstract composition featuring geometric forms in warm earth tones.
          The textured surface and architectural shapes evoke industrial landscapes and
          maritime structures, creating a sense of quiet contemplation through balanced
          asymmetry.
        </p>
      </Link>

      <Link to="/products" className="image-side">
        <img
          src="/images/homepage/collections/grid-1/04shapes_2.png"
          alt="Steampunk Art"
        />
        <div className="image-overlay-text">
          <p className="image-side-title">Abstract Collection</p>
          <p className="image-side-shop">SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
}
