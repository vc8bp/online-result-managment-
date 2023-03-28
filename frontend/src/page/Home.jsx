import React from "react";
import styled from "styled-components";
import Footer from "../component/Footer";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 80px;
`;

const HeroText = styled.div`
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #777;
  margin-bottom: 40px;
`;

const HeroImage = styled.img`
  width: 600px;
  height: auto;
`;

const Features = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  >div {
    flex : 1;
  }
`;

const Feature = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.i`
  font-size: 48px;
  color: #f76c6c;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin-bottom: 20px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #777;
  line-height: 1.5;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Hero>
          <HeroText>
            <Title>Transforming Education</Title>
            <Subtitle>
              Efficiently Manage Your School's Results with Our Platform
            </Subtitle>
          </HeroText>
          <HeroImage
            src="https://images.unsplash.com/photo-1617529497832-5ad49d9b5928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="students receiving results"
          />
        </Hero>
        <Features>
          <Feature>
            <FeatureIcon className="fas fa-list" />
            <FeatureTitle>Result Management</FeatureTitle>
            <FeatureDescription>
              Manage student results on our platform and allow
              parents and students to access them securely.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureIcon className="fas fa-envelope" />
            <FeatureTitle>Communication</FeatureTitle>
            <FeatureDescription>
              Communicate with parents and students via messaging and email
              regarding their results.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureIcon className="fas fa-chart-bar" />
            <FeatureTitle>Analytics and Reporting</FeatureTitle>
            <FeatureDescription>
              Get insights into student performance and trends with our
              analytics tools.
            </FeatureDescription>
          </Feature>
        </Features>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
