import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <button id="logo" className="logo" onClick={() => window.location.href = '/'}>
        FindMyJabs
      </button>
      <nav aria-label="Primary">
        <ul className="nav-links">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/account">My Account</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
