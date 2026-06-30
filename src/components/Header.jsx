import { NavLink } from 'react-router-dom'
import '../css/header.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Categories', to: '/categories' },
]

function Header({ searchTerm, onSearchChange, cartCount }) {
  return (
    <header className="site-header">
      <div className="brand">MINIMA</div>

      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `site-link${isActive ? ' site-link--active' : ''}`
            }
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <label className="search-field">
          <span aria-hidden="true">🔍</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products..."
          />
        </label>
        <NavLink to="/cart" className="cart-button" aria-label="View cart">
          <span>🛒</span>
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
