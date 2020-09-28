import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faCalendarCheck, faBalanceScaleRight, faBullseye, faDumbbell, faPeopleArrows, faTachometerAlt, faClipboardList, faFighterJet, faClipboardCheck, faBalanceScale } from "@fortawesome/free-solid-svg-icons";

const WhyUsSection = styled.div`
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 200px;
  margin-bottom: 30px;

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 10px 0;
  }
`;

export const PageHeading = styled.div`
  font-weight: 400;
  font-size: 2.5em;
  margin: 20px auto;
  color: ${colours.primary};
  text-align: center;
  font-weight: 300;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${colours.dark};

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: 
    'icon title'
    'icon description';
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    /* grid-template-columns: 1fr 3fr; */
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 50px;
  margin: 7px 15px 0px;
  color: ${colours.primary};
  position: absolute;
  right: 0;
`;

export const Title = styled.h2`
  grid-area: title;
  width: 85%;
  margin-top: 21px;
  margin-bottom: 0;
  color: ${colours.dark};
  font-weight: 500;
`;

export const Description = styled.p`
  grid-area: description;
  width: 85%;
  margin-top: 5px;
  line-height: 24px;
  color: ${colours.darkGrey};
`;



const WhyUs: FC = () => {
 
  return (
    <WhyUsSection>
      <PageHeading>Why Howard Havens?</PageHeading>
      <Grid>
        <GridItem>
          <Icon icon={faFighterJet} size="2x" />
          <Title>Fast, Reliable Results</Title>
          <Description>We get fast results with no banks, credit checks or chains.</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faClipboardCheck} size="2x" />
          <Title>Tailor made solutions</Title>
          <Description>We understand everyone's situation is completely different, and tailor make each solution for you and your circumstances</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faPeopleArrows} size="2x" />
          <Title>1-2-1 Dedicated Customer Service</Title>
          <Description>You'll have a single dedicated staff member, there to guide and assist you throughout</Description>
        </GridItem>
        
        <GridItem>
          <Icon icon={faCalendarCheck} size="2x" />
          <Title>Family Run</Title>
          <Description>Above all we are happy to help make your move as seamless as possible</Description>
        </GridItem>

        <GridItem>
          <Icon icon={faHeartbeat} size="2x" />
          <Title>We take care of </Title>
          <Description></Description>
        </GridItem>

        <GridItem>
          <Icon icon={faBalanceScale} size="2x" />
          <Title>Friendly yet professional</Title>
          <Description></Description>
        </GridItem>
      </Grid>
    </WhyUsSection>
  );
}

export default WhyUs;