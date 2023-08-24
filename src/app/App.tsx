import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductPage from '../components/ProductPage/ProductPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import '../App.css';

// Define a simple Home component
const Home: React.FC = () => {
  return <div>Welcome to the Home Page!</div>;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
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

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductPage} />
        <Route path="/products/:productId" component={ProductDetailPage} />
      </div>
    </Router>
  );
};

export default App;
