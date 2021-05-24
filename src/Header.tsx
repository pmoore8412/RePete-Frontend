import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
        <div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4">
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to="/" className="nav-link px-2 text-white">Features</Link></li>
              <li><Link to="/" className="nav-link px-2 text-white">Pricing</Link></li>
              <li><Link to="/" className="nav-link px-2 text-white">FAQs</Link></li>
              <li><Link to="/" className="nav-link px-2 text-white">About</Link></li>
            </ul>
    
            <div className="text-end me-4">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;