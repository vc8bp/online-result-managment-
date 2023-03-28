import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 60px);
  height: calc(100dvh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Input = styled.input`
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee; 
  outline: none;
  transition: border 0.5s ease-in-out;

  :focus {
    border-bottom: 2px solid #f76c6c; 
    
  }
`;

const Button = styled.button`
  height: 40px;
  background-color: #f76c6c;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e35959;
  }
`;

const Error = styled.span`
  color: #f76c6c;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(null)
  const validate = () => {
    if(formData.password.length < 8) return {message: "Your password can not be less then 8 charectors!"}
    return {success: true}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = validate();
    console.log(res)
    if(res.message) {
        return setMessage(res.message)
    }
    console.log("form is good")
    // Form validation logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          autoComplete='on'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {message && <Error>{message}</Error>}
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
