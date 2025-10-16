import { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ThreeTileSlider.css';

export default function ThreeTileSlider() {
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'Victorian Dreams',
      image: '/images/homepage/collections/ink/IMG_1165.JPG',
      link: '/products',
    },
    {
      id: 2,
      title: 'Victorian Dreams',
      image: '/images/homepage/collections/ink/IMG_1166.JPG',
      link: '/products',
    },
    {
      id: 3,
      title: 'Victorian Dreams',
      image: '/images/homepage/collections/ink/IMG_1167.JPG',
      link: '/products',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="three-tile-slider">
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item">
              <Link to={slide.link} className="slide-link">
                <div className="img-wrp">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
