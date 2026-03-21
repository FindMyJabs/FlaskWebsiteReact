import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="brand">FindMyJabs</div>
      <nav aria-label="Primary">
        <ul className="nav-links">
          <li><NavLink to="/">Form</NavLink></li>
          <li><NavLink to="/results">Next Page</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
