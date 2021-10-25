import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">EnginDemiroğ</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addblog">Blog Ekle</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/category/:id" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kategori
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Action</Link></li>              
                </ul>
              </li>
        
            </ul>
          
          </div>
        </div>
      </nav>
    )
}

export default Header
