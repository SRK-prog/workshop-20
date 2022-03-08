import React from "react";
import styled from "styled-components";

const ListCards = ({ item }) => {
  const Wrapper = styled.div`
    width: 500px;
    margin-bottom: 20px;
    @media (max-width: 900px) {
      width: 100%;
    }
  `;
  const Title = styled.div`
    background: rgb(232, 245, 254);
    font-weight: 600;
    padding: 15px;
  `;
  const Desc = styled.div`
    background: rgb(247, 247, 247);
    padding: 15px;
    line-height: 25px;
  `;

  return (
    <Wrapper>
      <Title>{item.title}</Title>
      <Desc>{item.desc}</Desc>
    </Wrapper>
  );
};

export default ListCards;
