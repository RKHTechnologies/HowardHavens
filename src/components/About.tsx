import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0 20px;
  font-size: 1.2em;
`;

const About: FC = () => {
  return (
    <Container>
      At Howard Havens we believe in providing you the result you are seeking - quickly, reliably and giving you peace of mind throughout the whole process. 
      <br /><br />
      Our expert team members are fantastic at employing creative solutions, allowing them to find the best possible answer to your unique circumstances and requirements. Due to this, they can move much more rapidly than traditional home sales, with most deals completing in less than 30 days after offer.
    </Container>
  );
}

export default About;