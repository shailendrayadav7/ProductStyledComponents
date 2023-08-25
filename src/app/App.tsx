// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ProductPage from '../components/ProductPage/ProductPage';
// import ProductDetailPage from '../pages/ProductDetailPage';
// import '../App.css';

// // Define a simple Home component
// const Home: React.FC = () => {
//   return <div>Welcome to the Home Page!</div>;
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="p-4 bg-primary">
//           <div className="container mx-auto flex justify-between items-center">
//             <Link to="/" className="text-white text-2xl font-semibold">
//               Redux Query App
//             </Link>
//             <Link to="/products" className="text-white">
//               Products
//             </Link>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductPage />} />
//           <Route path="/products/:productId" element={<ProductDetailPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from '../components/ProductPage/ProductPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import '../App.css';

// Define a simple Home component
const Home: React.FC = () => {
  console.log('Home component rendered');
  return <div>Welcome to the Home Page!</div>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="p-4 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-semibold">
            Home
          </Link>
          <span style={{ margin: '0 1rem' }}>&nbsp;</span>
          <Link to="/products" className="text-white">
            Products
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;

