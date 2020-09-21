import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  /* background: #e0e0e0; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image text';
`;

const Image = styled.div`
  grid-area: image;
  width: 100%;
  height: 200px;
  background: lightgrey;
`;


const Text = styled.div`
  grid-area: text;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Services: FC = ()  => {
  return (
    <Container>
      <Image />
      <Text>
        <Title>Selling Your Property?</Title>

      </Text>
    </Container>
  );
}

export default Services;