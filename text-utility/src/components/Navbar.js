import React from 'react'
import {
  Link
} from "react-router-dom"

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <div className="navbar-brand">{props.title}</div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/uppercase">Uppercase</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lowercase">Lowercase</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/capitalize">Capitalize</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/removeextraspaces">Remove Extra Spaces</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reversestring">Reverse String</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/textcounter">Text Counter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
