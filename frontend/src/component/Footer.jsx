import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #f2f2f2;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #333;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
  text-decoration: none;
  &:hover {
    color: #f76c6c;
  }
`;

const Copy = styled.p`
  font-size: 12px;
  margin-top: 20px;
  color: #999;
`;

const Footer = () => {
  return (
    <Container>
      <Logo src="https://via.placeholder.com/150x50" alt="School Logo"/>
      <Title>Useful Links</Title>
      <Link href="#">About Us</Link>
      <Link href="#">Contact Us</Link>
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Terms and Conditions</Link>
      <Copy>&copy; 2023 School Management System</Copy>
    </Container>
  );
};

export default Footer;
