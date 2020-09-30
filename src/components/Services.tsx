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
  short?: boolean;
  right?: boolean;
}

const Image = styled.div`
  grid-area: image;
  width: 80%;
  height: ${(p: ImageProps) => p.short ? "400px" : "500px"};
  background: lightgrey;
  background-image: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  background-position-x: ${(p: ImageProps) => p.right ? "right" : null};
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
  padding-left: ${(p: ServiceProps) => p.alt ? "50px" : null};

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
  padding-left: ${(p: ServiceProps) => p.alt ? "50px" : null};
  text-align: ${(p: ServiceProps) => p.alt ? "left" : null};

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2em;
  }
`;

const Description = styled.div`
  text-align: ${(p: ServiceProps) => p.alt ? "justify" : null};
  padding-left: ${(p: ServiceProps) => p.alt ? "50px" :  null};
`;

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

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button`
  padding: 6px 18px;
  border-radius: 3px;
  color: ${colours.light};
  background: ${(p: ButtonProps) => p.primary ? colours.primary : colours.green };
  margin-top: 22px;
  font-size: 1.2em;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${(p: ButtonProps) => p.primary ? `${colours.primary}c7` : `${colours.green}c7` };
  }
`;

const Highlight = styled.span`
  color: ${colours.primary};
  font-weight: 500;
  font-style: italic;
`;

const Services: FC = ()  => {

  const handleClick = (subject: string, address: string) => {
    window.open(
      `mailto:${address}@howardhavens.co.uk?subject=${subject}`,
      '_blank'
    );
  }

  return (
    <Container>

      <Strip id="sales">
        <Service>
          <Image image="deal" right />
          <Text>
            <Title>Need to sell quickly?</Title>
            <Description>
              We make the sales process simple, easy and stress free, taking care of everything for you!
              <br />
              Due to our personal, creative and tailor made solutions, we can guarantee you a fast, reliable sale, and help get you up to 100% of the market value.
            </Description>
            <CheckList>
                <li>Cash Offers allow us to move extremely quickly</li>
                <li>We cover the costs of all solicitors fees</li>
                <li>Any size or condition of property considered</li>
                <li>Fed up of being a landlord, or become an accidental landlord?</li>
                <li>Mortgage arears, unmortgageable, or repossession concerns? We can help</li>
                <li>Facing Divorce? We're here to resolve your property concerns</li>
                <li>Had deals fall through? We follow through with our carefully considered offers</li>
              </CheckList>
              <Button onClick={() => handleClick("Sales Enquiry", "Sales")} >Contact Us Today</Button>
          </Text>
        </Service>
      </Strip>

      <Strip alt id="discuss">
        <Service alt>
          <Image image="explaining" alt short />
          <Text alt>
            <Title alt>Want someone to talk through your options?</Title>
            <Description alt>
              There are so many different options, avenues and <Highlight>opportunities</Highlight> out there when it comes to your property - <Highlight>we understand</Highlight> better than most how difficult the decision can be.
              <br /><br />
              Howard Havens are here to de-mystify, and <Highlight>remove any stresses</Highlight> involved; Our experts are on hand to discuss your individual situation and the avenues available to you.
              We will be able to <Highlight>advise</Highlight> and recommend a <Highlight>great solution</Highlight> for you, with <Highlight>no obligations or charges</Highlight>.
              <br /><br />
              If at this point you decide you would like for us to help, our <Highlight>1-2-1 dedicated team member</Highlight> will guide you through the next steps, <Highlight>removing all hassle</Highlight> and stress!
            </Description>
            <Button onClick={() => handleClick("Arrange a Consultation", "Advice")} primary>Arrange a consultation</Button>
          </Text>
        </Service>
      </Strip>

      <Strip id="tenantbuyers">
        <Service>
          <Image image="tenantBuyers" />
          <Text>
            <Title>Why rent, when you can be a tenant buyer?</Title>
            <Description>
              Our Rent to Buy or 'Tenant Buyers' program gives you the ability to get on the property ladder with a much smaller deposit. You'll live in your new home as a tenant until we complete the purchase.
              <br /><br />
              During this period you have the benefits of being a traditional homeowner, maintaining the property as you please - whilst getting the peace of mind that comes with living in your own home.
            </Description>
            <CheckList>
              <li>No mortgage required to get started</li>
              <li>If the property value goes up, you keep the difference</li>
              <li>You can move in almost immediately (no mortgage application)</li>
              <li>Live in your home, whilst you improve your credit rating</li>
              <li>You're free to make the property your own</li>
            </CheckList>
            <Button onClick={() => handleClick("Tenant Buyers", "Contact")}>Contact us to find out more</Button>
          </Text>
        </Service>
      </Strip>

      <Strip alt id="dealsourcing">
        <Service alt>
          <Image image="growPounds" alt short />
          <Text alt>
            <Title alt>Investors, would you like to receive great deals to your inbox?</Title>
            <Description alt>
              At Howard Havens we have our own <Highlight>deal sourcing mailing list</Highlight>, so you can receive a <Highlight>personally tailored</Highlight> selection of our bespoke <Highlight>packaged deals</Highlight> delivered to your virtual doorstep.
              <br /><br />
              Once you get in contact, we can look to establish what kind of property deal you are seeking; be its location, condition, price or which <Highlight>strategy</Highlight> you are specifically targeting.
              <br />
              We will then get you added into our <Highlight>exclusive mailing list</Highlight> to be one of the first to review <Highlight>fantastic opportunities</Highlight> for you and your business.
            </Description>
            <Button onClick={() => handleClick("Deal Sourcincg", "Sourcing")} primary>Don't miss out, Contact Now</Button>
          </Text>
        </Service>
      </Strip>
    </Container>
  );
}

export default Services;