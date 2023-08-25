import React from 'react';
import styled from 'styled-components';
import { Product } from '../../types';

interface CardComponentProps {
  product: Product;
}

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const CardDescription = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`;

const CardPrice = styled.p`
  font-weight: 600;
  color: #333;
`;

const CardComponent: React.FC<CardComponentProps> = ({ product }) => {
  console.log('CardComponent is rendering'); // Corrected console log message
  return (
    <CardContainer>
      <CardImage src={product.image} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
      <CardPrice>${product.price}</CardPrice>
    </CardContainer>
  );
};

export default CardComponent;
