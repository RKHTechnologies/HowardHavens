import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import checkIcon from '../img/Check_Icon.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Strip = styled.div`
  width: 100%;
  background:  ${(p: ServiceProps) => p.alt ? "#f5f5f5" : null};
`;

interface ServiceProps {
  alt?: boolean;
}

const Service = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${(p: ServiceProps) => p.alt ? "'text image'" : "'image text'"};
  margin: 50px 0 100px;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'text'
      'image';
  }
`;

interface ImageProps {
  image: imageLib;
  alt?: boolean;
}

const Image = styled.div`
  grid-area: image;
  width: 80%;
  height: 400px;
  background: lightgrey;
  background-image: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  text-align: right;
  margin:  ${(p: ImageProps) => p.alt ? "auto auto auto 0" : "auto 0 auto auto"};

  @media(max-width: ${SharedSettings.mobile}) {
    margin: auto;
    margin-top: 10px;
    width: 100%;
    height: 250px;
  }
`;



const Text = styled.div`
  grid-area: text;
  padding: 0 20px;
  text-align: ${(p: ServiceProps) => p.alt ? "right" : null};

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 0 10px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  margin-top: 0;
  font-size: 2.5em;
  color: ${colours.primary};

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2em;
  }
`;

const Description = styled.div``;

const CheckList = styled.div`
  margin-top: 20px;

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
      margin-left: -30px;
    }
  }

  @media(max-width: ${SharedSettings.mobile}) {
    margin-left: 15px;
    text-align: left;
  }
`;

const Services: FC = ()  => {

  return (
    <Container>

      <Strip id="sales">
        <Service>
          <Image image="house1" />
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
      </Strip>

      <Strip alt id="discuss">
        <Service alt>
          <Image image="talkThrough" alt />
          <Text alt>
            <Title>Want someone to talk through your options?</Title>
            <Description>
              We understand there are lots of different 
            </Description>
          </Text>
        </Service>
      </Strip>

      <Strip id="tenantbuyers">
        <Service>
          <Image image="house1" />
          <Text>
            <Title>Why be a tenant, when you can be a tenant buyer?</Title>
            <Description>
              Our Rent to Buy or 'Tenant Buyers' program gives you the option to purchase a property at an agreed price within an agreed timescale. 
              <br /><br />
              During this period you have the benefits of being a traditional homeowner, improving the property as your please - whilst living in the property as a tenant until we complete the purchase.
            </Description>
            <CheckList>
                <li>No mortgage required to get started</li>
                <li>If the property value goes up, you keep it - the price doesn't change</li>
                <li>You can move in almost immediately (no mortgage application)</li>
                <li>You're free to make the property your own</li>
                <li>h dklsfhjklsd kflh dsklfhdsklghdsf</li>
              </CheckList>
          </Text>
        </Service>
      </Strip>

      <Strip alt id="dealsourcing">
        <Service alt>
          <Image image="house1" alt />
          <Text alt>
            <Title>Like to be sent great deals?</Title>
            <Description>
              Howard Havens also has our own Deal Sourcing mailing list, get in contact today to discuss.
            </Description>
          </Text>
        </Service>
      </Strip>
    </Container>
  );
}

export default Services;