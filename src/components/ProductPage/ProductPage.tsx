// ProductPage.tsx

import React from 'react';
import { useFetchProductsQuery } from '../../services/products'; 
import CardComponent from '../CardComponent/CardComponent';

const ProductPage: React.FC = () => {
  //console.log('ProductPage component is rendering');
  const { data: products, isLoading, isError } = useFetchProductsQuery(); 
  console.log('Products:', products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products.</div>;
  }

  // Add a nullish check for the 'products' variable
  if (!products) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      <div>
        {products.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
