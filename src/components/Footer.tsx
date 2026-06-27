import { Link } from "react-router-dom"

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Lawler Innovations, Inc. · Veteran-founded</span>
        <div className="footer-links">
          <Link to="/software">Software Engineering</Link>
          <Link to="/aviation">Aviation Services</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
