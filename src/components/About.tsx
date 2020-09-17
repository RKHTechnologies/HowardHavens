import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0;
  font-size: 1.2em;
`;

const About: FC = () => {
  return (
    <Container>
      Howard Havens is your local family owned and run property company.   ... modern take ... places the customer at the heart ... customers are both the clients that we work with as well as the tennants within the property ... with years of property experience 
      {/* Want to be a good port of call for potential clients on HMO letters. Also for potential investors. */}

      {/* 
        - Friendly, family run, professional
        - Any House, any location, any condition 
        - Buy your property for cash, means we can move much quicker than typical estate agents
        - 
        - No estate agent fees 
        - 1-2-1 dedicated customer service
        - 
      */}

    </Container>
  );
}

export default About;