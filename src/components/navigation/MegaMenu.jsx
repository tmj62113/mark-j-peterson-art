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

  // Menu data structure matching the collections and categories
  const menuData = {
    collections: {
      title: 'Collections',
      image: '/images/homepage/collections/grid-1/00tv_bowlingpin.JPG',
      items: [
        {
          id: 'steampunk',
          name: 'Steampunk Art',
          count: '24 pieces',
          link: '/products?category=Steampunk',
          image: '/images/homepage/collections/grid-1/00tv_bowlingpin.JPG',
        },
        {
          id: 'brass-copper',
          name: 'Brass & Copper',
          count: '32 pieces',
          link: '/products?category=Brass%20%26%20Copper',
          image: '/images/homepage/collections/grid 2/airplane.JPG',
        },
        {
          id: 'victorian',
          name: 'Victorian Dreams',
          count: '15 pieces',
          link: '/products?category=Victorian',
          image: '/images/homepage/collections/ink/IMG_1165.JPG',
        },
      ],
    },
    categories: {
      title: 'Categories',
      image: '/images/homepage/artwork/IMG_1712.PNG',
      subcategories: [
        {
          id: 'original-art',
          name: 'Original Art',
          image: '/images/homepage/artwork/IMG_1714.JPG',
          items: [
            { name: 'Paintings', link: '/products?type=painting' },
            { name: 'Sculptures', link: '/products?type=sculpture' },
            { name: 'Mixed Media', link: '/products?type=mixed-media' },
            { name: 'View All Originals', link: '/products?original=true' },
          ],
        },
        {
          id: 'prints',
          name: 'Prints',
          image: '/images/homepage/artwork/IMG_1716.PNG',
          items: [
            { name: 'Canvas Prints', link: '/products?format=canvas' },
            { name: 'Metal Prints', link: '/products?format=metal' },
            { name: 'Framed Prints', link: '/products?format=framed' },
            { name: 'Paper Prints', link: '/products?format=paper' },
            { name: 'View All Prints', link: '/products?type=print' },
          ],
        },
        {
          id: 'by-size',
          name: 'By Size',
          image: '/images/homepage/artwork/IMG_1720.PNG',
          items: [
            { name: 'Small (under 12")', link: '/products?size=small' },
            { name: 'Medium (12-24")', link: '/products?size=medium' },
            { name: 'Large (24-36")', link: '/products?size=large' },
            { name: 'Extra Large (over 36")', link: '/products?size=xlarge' },
          ],
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
          link: '/products?sort=newest',
          image: '/images/homepage/artwork/IMG_1722.PNG',
        },
        {
          id: 'best-sellers',
          name: 'Best Sellers',
          link: '/products?sort=popular',
          image: '/images/homepage/artwork/IMG_1725.PNG',
        },
        {
          id: 'limited-edition',
          name: 'Limited Edition',
          link: '/products?limited=true',
          image: '/images/homepage/artwork/IMG_1730.PNG',
        },
        {
          id: 'sale',
          name: 'Sale',
          link: '/products?sale=true',
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

            {/* Column 2 - Shop Categories */}
            <div className="mega-menu-categories">
              <ul className="category-list">
                <li
                  className={activeCategory === 'collections' ? 'active' : ''}
                  onMouseEnter={() => handleCategoryHover('collections')}
                >
                  <span className="category-link">Collections</span>
                </li>
                <li
                  className={activeCategory === 'categories' ? 'active' : ''}
                  onMouseEnter={() => handleCategoryHover('categories')}
                >
                  <span className="category-link">Categories</span>
                </li>
                <li
                  className={activeCategory === 'featured' ? 'active' : ''}
                  onMouseEnter={() => handleCategoryHover('featured')}
                >
                  <span className="category-link">Featured</span>
                </li>
              </ul>
            </div>

            {/* Column 3 - Subcategories */}
            <div className="mega-menu-middle">
            <h3 className="mega-menu-title">{currentMenu.title}</h3>

            {/* Collections or Featured - Simple List */}
            {(activeCategory === 'collections' || activeCategory === 'featured') && (
              <ul className="subcategory-list">
                {currentMenu.items.map((item) => (
                  <li key={item.id} onMouseEnter={() => handleItemHover(item)}>
                    <Link to={item.link} className="subcategory-link" onClick={onClose}>
                      {item.name}
                      {item.count && <span className="item-count">{item.count}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Categories - Nested Structure */}
            {activeCategory === 'categories' && (
              <div className="nested-categories">
                {currentMenu.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.id}
                    className={`subcategory-group ${activeSubcategory === subcategory.id ? 'active' : ''}`}
                    onMouseEnter={() => handleSubcategoryHover(subcategory)}
                  >
                    <h4 className="subcategory-title">{subcategory.name}</h4>
                    <ul className="subcategory-items">
                      {subcategory.items.map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.link} className="subcategory-item-link" onClick={onClose}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
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
            <img src="/peterson_logo.png" alt="MJ Peterson Art" />
          </Link>
        </div>
      </div>
    </div>
  );
}
