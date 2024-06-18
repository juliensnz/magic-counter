'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  touch-action: none;

  :first-child {
    transform: rotate(180deg);
  }
`;

const Board = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const ScoreModifier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  background-color: red;
  height: 100%;
  font-size: 2rem;

  &:active {
    background-color: darkred;
  }
`;

const Score = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export default function Home() {
  return (
    <Container>
      <Board>
        <ScoreModifier>+</ScoreModifier>
        <Score>Jade</Score>
        <ScoreModifier>-</ScoreModifier>
      </Board>
      <Board>
        <ScoreModifier>+</ScoreModifier>
        <Score>Julien</Score>
        <ScoreModifier>-</ScoreModifier>
      </Board>
    </Container>
  );
}
