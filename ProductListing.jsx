// src/ProductListing.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductListing = ({ products = [] }) => {


  
  return (
    <Section style={{margin:" -274px -182px 110px -34px"}}>
      <Title>Our Products</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </ProductInfo>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </Section>
  );
};

// Adding prop type validation
ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default ProductListing;

// Styled components
const Section = styled.section`
  padding: 2rem;
  background: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const ProductInfo = styled.div`
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
`;

const AddToCartButton = styled.button`
  background: #ff6347;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #e5533d;
  }
`;