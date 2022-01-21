import React from 'react';
import {Link} from "react-router-dom"
export default function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
  <a className="navbar-brand" href="/blog">My Blog</a>
  <Link to="/login">Login</Link>
  <Link to="/blog" className="mx-5">My Blog</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Signup</a>
      </li>
    </ul>
  </div>
</nav>
)
}

