import { NavLink } from 'react-router-dom'
import '../css/app.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <strong>MINIMA</strong>
          <p>Modern furniture and decor for calm, elevated living spaces.</p>
        </div>

        <div className="footer-links">
          <div>
            <p>Explore</p>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </div>
          <div>
            <p>Company</p>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
      <div className="footer-copy">© 2026 MINIMA. Crafted for modern simplicity.</div>
    </footer>
  )
}

export default Footer
