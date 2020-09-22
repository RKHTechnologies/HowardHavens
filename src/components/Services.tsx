import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  /* background: #e0e0e0; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image text';
`;

const Image = styled.div`
  grid-area: image;
  width: 80%;
  height: 400px;
  background: lightgrey;
  background-image: url(${ImagesDesktop["house1"]});
  background-size: cover;
  background-position: center;
  text-align: right;
  margin: auto 0 auto auto;
`;



const Text = styled.div`
  grid-area: text;
  padding-left: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-top: 0;
  font-size: 2.5em;
  color: ${colours.primary};
`;

const Description = styled.div``;

const Services: FC = ()  => {
  return (
    <Container>
      <Image />
      <Text>
        <Title>Thinking of Selling?</Title>
        <Description>
          We make the sales process simple and easy, taking care of everything for you.
          <ul>
            <li>Cash Offers allow us to move extremely quickly</li>
            <li>We cover the costs of all solicitor fees</li>
            <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
            <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
            <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
          </ul>
        </Description>
      </Text>
    </Container>
  );
}

export default Services;