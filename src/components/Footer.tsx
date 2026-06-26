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
          <a href="https://patlawler.com" target="_blank" rel="noreferrer">
            Pat Lawler ↗
          </a>
          <a href="mailto:pat@lawlerinnovationsinc.com">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
