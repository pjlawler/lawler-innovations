import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">LI</span>
          <span>
            Lawler Innovations
            <small>Software · Aviation</small>
          </span>
        </Link>
        <nav className="nav">
          <NavLink to="/software" className="nav-link">
            Software
          </NavLink>
          <NavLink to="/aviation" className="nav-link">
            Aviation
          </NavLink>
          <a
            className="founder"
            href="https://patlawler.com"
            target="_blank"
            rel="noreferrer"
          >
            Pat Lawler ↗
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
