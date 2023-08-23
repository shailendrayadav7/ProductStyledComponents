import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ProductListPage from '../pages/ProductListPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const NavBar = styled.nav`
  padding: 1rem;
  background-color: #007bff;
  color: white;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-semibold">
            Redux Query App
          </Link>
          <Link to="/products" className="text-white">
            Products
          </Link>
        </div>
      </nav>

      {/* Define routes */}
      <Switch>
        <Route path="/" exact>
          {/* Render your home page content */}
          {/* For example: <HomePage /> */}
        </Route>
        <Route path="/products" exact>
          {/* Render the ProductListPage component */}
          <ProductListPage />
        </Route>
        <Route path="/products/:productId">
          {/* Render the ProductDetailPage component */}
          <ProductDetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

