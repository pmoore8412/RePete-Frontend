import React from 'react';
import Logo from 'C:/Users/Owner/Documents/projects/repete-frontend/src/images/RePeteLogo.png'

const Landing = () => {
    return (
        <div>
            <div className="container">
                <img src={Logo} alt="RePete Logo" width="35%" height="35%" />
            </div>
            <div className="container mt-3">
                <h1>Welcome</h1>
                <p className="ms-5">Video game videos</p>
            </div>
        </div>
    );
};

export default Landing;