// src/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import Banner from './Banner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Nav style={{margin:" -32px 161px 1px -148px",width:"144%"}} >
      <Logo href="/" style={{margin: "0 0 0 120px"}}>T-King</Logo>
      {/* Toggle hamburger menu */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      {/* Menu items - visibility toggled by isOpen state */}
      <Menu isOpen={isOpen} >
        <MenuItem href="/" >Home</MenuItem>
       
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/login" style={{margin:"0 180px 0 0"}}>Login</MenuItem>
        <MenuItem href="/cart">
          <FaShoppingCart />
          <CartBadge>3</CartBadge> {/* Example cart badge */}
        
        </MenuItem>
        <MenuItem href="/contact" style={{margin:" 0 359px 0px 0px"}}>Contact</MenuItem>
        <MenuItem href="/cart">
          <FaShoppingCart />
          <CartBadge>3</CartBadge> {/* Example cart badge */}
        </MenuItem>
        <MenuItem href="/login" style={{margin:"0 180px 0 0"}}>Login</MenuItem>
      </Menu>
    </Nav>
   
  
   
    </>

  );
};

export default Navbar;

// Styled components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 0.5rem 1rem;
  color: #fff;
//  margin: -171px -685px 248px -685px;
  
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #333;
  }
`;

const MenuItem = styled.a`
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const CartBadge = styled.span`
  background: red;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: #fff;
`;
