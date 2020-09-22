import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';
import { colours } from '../Shared/SharedStyles';
import checkIcon from '../img/Check_Icon.svg';

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

const CheckList = styled.div`
  margin-top: 20px;

  li {
    list-style: none;
    margin-left: 30px;
    margin-top: 25px;

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      background-image: url(${checkIcon});
      background-size: contain;
      position: absolute;
      margin-top: -3px;
      margin-left: -30px;
    }
  }
`;

const Services: FC = ()  => {
  return (
    <Container>
      <Image />
      <Text>
        <Title>Thinking of Selling?</Title>
        <Description>
          We make the sales process simple and easy, taking care of everything for you.
        </Description>
        <CheckList>
            <li>Cash Offers allow us to move extremely quickly</li>
            <li>We cover the costs of all solicitor fees</li>
            <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
            <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
            <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
          </CheckList>
      </Text>
    </Container>
  );
}

export default Services;