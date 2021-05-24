import React from 'react';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';


function App() {
  return (

    <div>
      <BrowserRouter>
        <CookiesProvider>
          <Layout />
        </CookiesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
