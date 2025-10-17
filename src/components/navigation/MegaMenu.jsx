import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

export default function MegaMenu({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('collections');
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [previewImage, setPreviewImage] = useState('/images/homepage/collections/grid-1/00tv_bowlingpin.JPG');
  const [hasAnimation, setHasAnimation] = useState(false);

  // Add animation class after mount to trigger CSS transition (matches Kelly Wearstler behavior)
  useEffect(() => {
    if (isOpen) {
      // Reset animation state when opening
      setHasAnimation(false);
      // Use requestAnimationFrame to ensure the initial state is rendered first
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setHasAnimation(true);
        });
      });
    } else {
      // Reset when closing
      setHasAnimation(false);
    }
  }, [isOpen]);

  // Menu data structure matching the collections and featured
  const menuData = {
    collections: {
      title: 'Collections',
      image: '/images/homepage/collections/grid-1/00tv_bowlingpin.JPG',
      items: [
        {
          id: 'steampunk',
          name: 'Steampunk Art',
          count: '24 pieces',
          link: '/products',
          image: '/images/homepage/collections/grid-1/00tv_bowlingpin.JPG',
        },
        {
          id: 'brass-copper',
          name: 'Brass & Copper',
          count: '32 pieces',
          link: '/products',
          image: '/images/homepage/collections/grid 2/airplane.JPG',
        },
        {
          id: 'victorian',
          name: 'Victorian Dreams',
          count: '15 pieces',
          link: '/products',
          image: '/images/homepage/collections/ink/IMG_1165.JPG',
        },
      ],
    },
    featured: {
      title: 'Featured',
      image: '/images/homepage/artwork/IMG_1722.PNG',
      items: [
        {
          id: 'new-arrivals',
          name: 'New Arrivals',
          link: '/products',
          image: '/images/homepage/artwork/IMG_1722.PNG',
        },
        {
          id: 'best-sellers',
          name: 'Best Sellers',
          link: '/products',
          image: '/images/homepage/artwork/IMG_1725.PNG',
        },
        {
          id: 'limited-edition',
          name: 'Limited Edition',
          link: '/products',
          image: '/images/homepage/artwork/IMG_1730.PNG',
        },
        {
          id: 'sale',
          name: 'Sale',
          link: '/products',
          image: '/images/homepage/artwork/IMG_1732.JPG',
        },
      ],
    },
  };

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
    setPreviewImage(menuData[category].image);
  };

  const handleSubcategoryHover = (subcategory) => {
    setActiveSubcategory(subcategory.id);
    setPreviewImage(subcategory.image);
  };

  const handleItemHover = (item) => {
    if (item.image) {
      setPreviewImage(item.image);
    }
  };

  if (!isOpen) return null;

  const currentMenu = menuData[activeCategory];

  return (
    <div className={`mega-menu ${isOpen ? 'active' : ''} ${hasAnimation ? 'animation' : ''}`}>
      <div className="mega-menu-overlay" onClick={onClose} />
      <div className="mega-menu-content">
        <button className="mega-menu-close" onClick={onClose} aria-label="Close menu">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="mega-menu-inner">
          {/* Left Panel - Three Column Navigation */}
          <div className="mega-menu-left">
            {/* Column 1 - Primary Navigation */}
            <div className="mega-menu-primary-nav">
              <ul className="category-list--primary">
                <li>
                  <span className="category-link--nav active">Shop</span>
                </li>
                <li>
                  <Link to="/#about" className="category-link--nav" onClick={onClose}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="category-link--nav" onClick={onClose}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Shop Categories with Subitems */}
            <div className="mega-menu-categories">
              {/* Collections Section */}
              <div className="category-section">
                <h3 className="category-heading">Collections</h3>
                <ul className="category-subitems">
                  {menuData.collections.items.map((item) => (
                    <li key={item.id} onMouseEnter={() => handleItemHover(item)}>
                      <Link to={item.link} className="category-subitem-link" onClick={onClose}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Section */}
              <div className="category-section">
                <h3 className="category-heading">Featured</h3>
                <ul className="category-subitems">
                  {menuData.featured.items.map((item) => (
                    <li key={item.id} onMouseEnter={() => handleItemHover(item)}>
                      <Link to={item.link} className="category-subitem-link" onClick={onClose}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Panel - Image Preview */}
          <div className="mega-menu-right">
            <div className="mega-menu-image">
              <img src={previewImage} alt="Preview" />
            </div>
          </div>

          {/* Logo - Spans across left and middle panels */}
          <Link to="/" className="mega-menu-logo" onClick={onClose}>
            <img src="/peterson_logo_dark.png" alt="MJ Peterson Art" />
          </Link>
        </div>
      </div>
    </div>
  );
}
