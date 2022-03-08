import React from "react";
import Card from "../components/card/Card";
import Sidebar from "../components/sidebar/Sidebar";
import styled from "styled-components";
import ListLinks from "../components/lists/ListLinks";

const Container = styled.div`
  display: flex;
  padding-top: 15px;
`;

const FlexWrapper = styled.div`
  flex: 50;
  @media (max-width: 1500px) {
    flex: 30;
  }
  @media (max-width: 1300px) {
    flex: 20;
  }
  @media (max-width: 1000px) {
    flex: 15;
  }
`;

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <FlexWrapper>
        <Card />
        <ListLinks />
      </FlexWrapper>
    </Container>
  );
};

export default Home;
