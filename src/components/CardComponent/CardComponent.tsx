
import React from 'react';
import { Product } from '../../types'; 

interface CardComponentProps {
  product: Product;
}

const CardComponent: React.FC<CardComponentProps> = ({ product }) => {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-800 font-semibold">${product.price}</p>
    </div>
  );
};

export default CardComponent;
