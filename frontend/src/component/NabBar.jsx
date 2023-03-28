import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
position: sticky;
top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  >a {
    color: indianred;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #f76c6c;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo><Link to="/">Result Management System</Link></Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink>Logout</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
