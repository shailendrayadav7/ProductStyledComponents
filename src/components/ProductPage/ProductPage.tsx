import React from 'react';
import { useFetchProductsQuery } from '../../services/products'; 
import { Link } from 'react-router-dom';  // Import Link
import CardComponent from '../CardComponent/CardComponent';

const ProductPage: React.FC = () => {
  const { data: products, isLoading, isError } = useFetchProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (isError) {
    return <div>Error fetching products.</div>; 
  }

  if (!products) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      <div>
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <CardComponent product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
