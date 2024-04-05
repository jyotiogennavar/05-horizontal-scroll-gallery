import React from "react";
import styled from "styled-components";

import { cardData } from "./CardData";

const Cards = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          content={card.content}
          imageWidth={card.imageWidth}
          flexDirection={card.flexDirection}
          index={index}
        />
      ))}
    </>
  );
};

const Card = ({ image, title, content, index, imageWidth, flexDirection }) => {
  return (
    <CardContainer style={{ flexDirection: flexDirection }} r>
      <CardContent>
        <h2>{title}</h2>
        <p>{content}</p>
      </CardContent>
      <CardImage>
        <img src={image} alt={title} style={{ width: imageWidth }}></img>
      </CardImage>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  width: 90dvw;
  overflow: hidden;
  padding: 2rem;

  font-family: "Roboto Slab", serif;
  color: white;

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 1rem;
    width: 100%;
  }
`;

const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 40rem;
  padding: 1rem;

  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 25rem;


    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

`;

const CardImage = styled.div`
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export default Cards;
