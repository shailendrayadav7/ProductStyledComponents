import React from 'react';
import { useParams } from 'react-router-dom'; 
import { useFetchProductByIdQuery } from '../services/products'; 

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); 

  const { data: product, isLoading, isError } = useFetchProductByIdQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !product) {
    return <div>Error fetching product details.</div>;
  }

  return (
    <div>
      <h1>Product Detail Page</h1>
      <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
