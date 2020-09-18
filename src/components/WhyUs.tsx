import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faCalendarCheck, faBalanceScaleRight, faBullseye, faDumbbell, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

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
  grid-gap: 25px 0;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 
    'icon title'
    'icon description';
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 50px;
  border-radius: 50%;
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
`;



const WhyUs: FC = () => {
 
  return (
    <WhyUsSection>
      <PageHeading>Why Howard Havens?</PageHeading>
      <Grid>
        <GridItem>
          <Icon icon={faCalendarCheck} size="2x" />
          <Title>Family Run</Title>
        </GridItem>
        
        <GridItem>
          <Icon icon={faPeopleArrows} size="2x" />
          <Title>1-2-1 Dedicated Customer Service</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faBalanceScaleRight} size="2x" />
          <Title>Friendly yet professional</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faHeartbeat} size="2x" />
          <Title>We take care of </Title>
        </GridItem>

        <GridItem>
          <Icon icon={faBullseye} size="2x" />
          <Title>We'll help you smash your Targets</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faDumbbell} size="2x" />
          <Title>Focus your fitness around your needs</Title>
        </GridItem>
      </Grid>
    </WhyUsSection>
  );
}

export default WhyUs;