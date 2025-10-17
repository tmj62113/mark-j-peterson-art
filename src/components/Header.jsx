import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/cartStore';
import { useAuth } from '../contexts/AuthContext';
import { theme } from '../config/theme';
import Cart from './cart/Cart';
import MobileMenu from './MobileMenu';
import MegaMenu from './navigation/MegaMenu';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <header className={`header ${isMegaMenuOpen ? 'header--mega-menu-open hover' : ''}`}>
        <div className="header-content">
          {/* Desktop Navigation - Left */}
          <nav className="nav desktop-nav">
            <button
              className="nav-link nav-link-button"
              onClick={() => setIsMegaMenuOpen(true)}
            >
              Shop
            </button>
            <a href="/#about" className="nav-link">About</a>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            {user?.role === 'admin' && (
              <NavLink to="/admin" className="nav-link admin-nav-link">
                <span className="material-symbols-outlined">dashboard</span>
                Admin
              </NavLink>
            )}
          </nav>

          {/* Logo - Center */}
          <Link to="/" className="logo">
            <img src={theme.logo} alt={theme.logoAlt} />
          </Link>

          {/* Mobile/Desktop Actions - Right */}
          <div className="header-actions">
            {isAuthenticated && (
              <div className="user-menu">
                <span className="user-name">{user?.name}</span>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            )}
            <button
              className="cart-button"
              onClick={() => setIsCartOpen(true)}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </button>

            {/* Mobile Menu - only visible on mobile */}
            <MobileMenu />
          </div>
        </div>
      </header>

      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}