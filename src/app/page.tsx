'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default function Home() {
  return <Container>hello world</Container>;
}
