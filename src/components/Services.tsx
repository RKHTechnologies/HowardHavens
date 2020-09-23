import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';
import { colours } from '../Shared/SharedStyles';
import checkIcon from '../img/Check_Icon.svg';

interface ServiceProps {
  alt?: boolean;
}

const Service = styled.div`
  width: 100%;
  /* background: #e0e0e0; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${(p: ServiceProps) => p.alt ? "'text image'" : "'image text'"};
  margin-bottom: 150px;
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
  margin:  ${(p: ServiceProps) => p.alt ? "auto auto auto 0" : "auto 0 auto auto"};
`;



const Text = styled.div`
  grid-area: text;
  padding: 0 20px;
  text-align: ${(p: ServiceProps) => p.alt ? "right" : null};
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
  direction: ${(p: ServiceProps) => p.alt ? "rtl" : null};

  li {
    list-style: none;
    margin: 25px 30px 0;

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      background-image: url(${checkIcon});
      background-size: contain;
      position: absolute;
      margin-top: -3px;
      margin-left: ${(p: ServiceProps) => p.alt ? null : "-30px"};
      margin-right: ${(p: ServiceProps) => p.alt ? "-30px" : null};
    }
  }
`;

const Services: FC = ()  => {
  return (
    <>
      <Service>
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
      </Service>

      <Service alt>
        <Image alt />
        <Text alt>
          <Title>Want someone to talk through your options?</Title>
          <Description>
            We make the sales process simple and easy, taking care of everything for you.
          </Description>
        </Text>
      </Service>

      <Service>
        <Image />
        <Text>
          <Title>Love to own your own home, but struggling with the deposit?</Title>
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
      </Service>

      <Service alt>
        <Image alt />
        <Text alt>
          <Title>Struggling to find great deals?</Title>
          <Description>
            Howard Havens also has our own Deal Sourcing mailing list, get in contact today to discuss.
          </Description>
          <CheckList alt>
              <li>Cash Offers allow us to move extremely quickly</li>
              <li>We cover the costs of all solicitor fees</li>
              <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
              <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
              <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
            </CheckList>
        </Text>
      </Service>
    </>
  );
}

export default Services;