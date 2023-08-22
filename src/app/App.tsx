import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <nav className="p-4 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-semibold">Redux Query App</Link>
          <Link to="/products" className="text-white">Products</Link>
        </div>
      </nav>
    </div>
  );
};

export default App;
