import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RPLogo from 'C:/Users/Owner/Documents/projects/repete-frontend/src/images/RePeteHeader.png'


const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
        <div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <img src={RPLogo} alt="RePete Logo" width="3%" height="3%" />
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4">
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to="/about-me" className="nav-link px-2 text-white">About</Link></li>
              <li><Link to="/" className="nav-link px-2 text-white">Members Only</Link></li>
              <li><Link to="/" className="nav-link px-2 text-white">Videos</Link></li>
            </ul>
    
            <div className="text-end me-4">
              <Button variant="outline-success" className="me-2">Login</Button>
              <Button variant="outline-light">Sign-up</Button>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;