import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import SearchBar from './SearchBar'

const Header = ({
  categories = [],
  searchTerm = '',
  onSearchChange = () => {},
}) => {
  const { totalItems, openCart } = useCart()

  return (
    <header className="qc-header">
      <div className="qc-header__actions">
        <button
          type="button"
          className="qc-cart-button"
          onClick={openCart}
          aria-label="Open cart"
        >
          <svg
            className="qc-cart-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M6 6h14l-1.5 8.5H7.5L6 6zm0 0L5 3H3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="19" r="1.5" fill="currentColor" />
            <circle cx="17" cy="19" r="1.5" fill="currentColor" />
          </svg>
          <span className="qc-cart-button__label">Cart</span>
          {totalItems > 0 && (
            <span className="qc-cart-badge">{totalItems}</span>
          )}
        </button>
      </div>
      <div className="qc-header__copy">
        <p className="qc-eyebrow">QuickCart</p>
        <h1>Everyday picks, delivered fast.</h1>
        <p className="qc-subtitle">
          Curated essentials, bold design, and a smooth checkout in minutes.
        </p>
        <div className="qc-cta-row">
          <button type="button" className="qc-button qc-button--primary">
            Shop new arrivals
          </button>
          <button type="button" className="qc-button qc-button--ghost">
            Browse categories
          </button>
        </div>
      </div>
      <div className="qc-header__panel">
        <div className="qc-panel">
          <div>
            <p className="qc-panel__label">Delivery window</p>
            <p className="qc-panel__value">Today, 2-4 PM</p>
          </div>
          <div>
            <p className="qc-panel__label">Pickup points</p>
            <p className="qc-panel__value">12 near you</p>
          </div>
          <div>
            <p className="qc-panel__label">Member perks</p>
            <p className="qc-panel__value">Free returns</p>
          </div>
        </div>
      </div>
      <nav className="qc-nav" aria-label="QuickCart navigation">
        <div className="qc-nav__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `qc-nav__link ${isActive ? 'is-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `qc-nav__link ${isActive ? 'is-active' : ''}`
            }
          >
            Cart
          </NavLink>
        </div>
        {categories.length > 0 && (
          <>
            <span className="qc-nav__label">Categories</span>
            <div className="qc-nav__categories">
              {categories.map((category) => (
                <NavLink
                  key={category}
                  to={`/category/${encodeURIComponent(category)}`}
                  className={({ isActive }) =>
                    `qc-nav__link ${isActive ? 'is-active' : ''}`
                  }
                >
                  {category}
                </NavLink>
              ))}
            </div>
          </>
        )}
      </nav>
      <SearchBar value={searchTerm} onChange={onSearchChange} />
    </header>
  )
}

export default Header
