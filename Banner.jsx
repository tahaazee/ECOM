// src/Hero.js
import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    
    <HeroWrapper style={{margin: "2px -79px 86px -52px",
        width: "122%",height:"75%"}}>
      <HeroContent>
        <HeroTitle>Discover the Best Deals!</HeroTitle>
        <HeroSubtitle>Shop our latest collections and save big.</HeroSubtitle>
        <HeroButton href="/shop">Start Shopping</HeroButton>
      </HeroContent>
    </HeroWrapper>
    
  );
};

export default Banner;

// Styled components
const HeroWrapper = styled.div`
  background-image: url('https://source.unsplash.com/1600x900/?shopping'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  height: 70vh; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  position: relative;
  padding: 1rem;
    
`;

const HeroContent = styled.div`
  background: rgba(0, 0, 0, 0.5); /* Optional: dark overlay for better text visibility */
  padding: 2rem;
  border-radius: 10px;
      margin: -20px -70px 166px -240px;
    width: 155%;
    height: 75%;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const HeroButton = styled.a`
  display: inline-block;
  background: #ff6347;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #e5533d;
  }
`;
