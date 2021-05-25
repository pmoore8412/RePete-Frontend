import React from 'react';
import { Route } from 'react-router';
import AboutMe from './components/About-Me-Component/AboutMe';
import Headers from './components/Header-Component/Header';
import Landing from './components/Landing-Component/Landing';

const Layout = () => {
    return (
        <div>
            <Headers />
            <Route exact path="/" component={Landing} />
            <Route path="/main" component={Landing} />
            <Route path="/about-me" component={AboutMe} />
        </div>
    );
};

export default Layout;