import React, { useState } from "react";
import styled from "styled-components";
import { colours, Section, SharedSettings } from "../Shared/SharedStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHammer, faSearchLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface ContainerProps {
  dark?: boolean;
  background?: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 100;
  font-size: 1.6em;
  background: ${(p: ContainerProps) => p.dark ? "#000" : "inherit"};
  background: ${(p: ContainerProps) => p.background};
  color: ${(p: ContainerProps) => p.dark ? colours.light : "inherit"};
  padding: 50px;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 60px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 10px;
  }
`;

const MainHeader = styled.h1`
  text-transform: uppercase;
  letter-spacing: 7px;
  font-weight: 400;
  color: ${colours.light};
  font-size: 2.5em;
  font-weight: 400;
  margin-top: 20px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 1.5em;
  }
`;

const SubHeader = styled.div`
  max-width: 1000px;
  font-weight: 300;
  color: ${colours.light};
  margin-bottom: 25px;

  span {
    font-weight: 600;
    font-style: italic;
  }
`;

const LinksContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;  

  @media(max-width: 1100px) {
    grid-template-columns: 1fr;
    font-size: 0.7em;
    margin: 0;
  }
  
  @media(max-width: 340px) {
    font-size: 0.5em;
  }
`;

interface LinkProps {
  active?: boolean;
}

const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 18px 14px 0;
  border: 3px solid transparent;
  border-radius: 22px;
  cursor: pointer;
  margin: 10px;
  background: ${(p: LinkProps): string => p.active ? "#fff" : "transparent"};
  color: ${(p: LinkProps): string => p.active ? colours.primary : colours.light};
  font-weight: 400;

  & > div {
    background: ${(p: LinkProps): string => p.active ? colours.primary : colours.light};
  }

  &:hover {
    border-color: ${colours.light};
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    padding-left: 20px;
    padding-right: 5px;
  }

  @media(max-width: 1100px) {
    flex-direction: row !important;
    padding: 0 18px 0 0 !important;
    margin: 0;
    border-radius: 8px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;

  @media(max-width: 1100px) {
    width: 95%;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;

  @media(max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;

const FormItem = styled.input`
    width: 100%;
    height: 50px;
    background: ${colours.light};
    border: 0;
    border-radius: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 0 20px;
`;

const MultiLineForm = styled.textarea`
  width: 100%;
  height: 120px;
  background: ${colours.light};
  border: 0;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 18px 20px 0;
`;

const SubmitButton = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border: 2px solid #fff;
  background: transparent;
  letter-spacing: 6px;
  color: #fff;
  font-size: 20px;
  line-height: 44px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: ${colours.dark};
    color: ${colours.primary};
  }

  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
    margin-top: -10px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 7px 15px 0px;
`;


const Contact: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    let newObject: any = {};
    data.forEach((value, key) => {newObject[key] = value});
    
    //Not currently used - for future API integration
    let json = JSON.stringify(newObject);
    console.dir(json);

    window.open(
      `mailto:${(activeLink !== "" && activeLink) || "Contact"}@howardhavens.co.uk
        ?subject=${newObject.subject}
        &body=%0D%0A
        Name: ${newObject.name}%0D%0A
        Email: ${newObject.email}%0D%0A
        Phone: ${newObject.phone}%0D%0A%0D%0A
        Subject: ${newObject.subject}%0D%0A
        Message: ${newObject.message}`, 
        '_blank'
    );
  }

  return (
    <Container background={colours.primary} id="contact">
      <MainHeader>Contact Us</MainHeader>
      <SubHeader>Please get in touch <span>today</span> if you have any questions, are interested in any of our <span>services</span> - or are looking for <span>hassle free solutions</span> to your property needs!</SubHeader>

      <LinksContainer>
        <Link active={activeLink === "Lettings"} onClick={() => setActiveLink("Lettings")}>
          <Icon icon={faHome} size="2x" />
          Lettings@howardhavens.co.uk
        </Link>
        <Link active={activeLink === "Projects"} onClick={() => setActiveLink("Projects")}>
          <Icon icon={faHammer} size="2x"/>
          Projects@howardhavens.co.uk
        </Link>
        <Link active={activeLink === "Sourcing"} onClick={() => setActiveLink("Sourcing")}>
          <Icon icon={faSearchLocation} size="2x"/>
          Sourcing@howardhavens.co.uk
        </Link>
        <Link active={activeLink === "Contact"} onClick={() => setActiveLink("Contact")}>
          <Icon icon={faEnvelope} size="2x"/>
          Contact@howardhavens.co.uk
        </Link>
      </LinksContainer>

      <FormContainer onSubmit={handleSubmit}>
        <Column>
          <FormItem placeholder="Name" name="name" />
          <FormItem placeholder="Email" name="email" />
          <FormItem placeholder="Phone (optional)" name="phone" />
        </Column>

        <Column>
          <FormItem placeholder="Subject" name="subject" />
          <MultiLineForm placeholder="Your Message" name="message"></MultiLineForm>
        </Column>
        <SubmitButton type="submit" value="SUBMIT" />
      </FormContainer>

    </Container>
  );
};

export default Contact;
