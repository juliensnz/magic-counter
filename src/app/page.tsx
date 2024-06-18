'use client';

import {useState} from 'react';
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

const useScore = () => {
  const [scores, setScores] = useState({
    jade: 20,
    julien: 20,
  });

  const incrementScore = (player: 'jade' | 'julien') => () => {
    setScores(prev => ({
      ...prev,
      [player]: prev[player] + 1,
    }));
  };

  const decrementScore = (player: 'jade' | 'julien') => () => {
    setScores(prev => ({
      ...prev,
      [player]: prev[player] - 1,
    }));
  };

  return [scores, incrementScore, decrementScore] as const;
};

export default function Home() {
  const [scores, incrementScore, decrementScore] = useScore();

  return (
    <Container>
      <Board>
        <ScoreModifier onClick={incrementScore('jade')}>+</ScoreModifier>
        <Score>{scores.jade}</Score>
        <ScoreModifier onClick={decrementScore('jade')}>-</ScoreModifier>
      </Board>
      <Board>
        <ScoreModifier onClick={incrementScore('julien')}>+</ScoreModifier>
        <Score>{scores.julien}</Score>
        <ScoreModifier onClick={decrementScore('julien')}>-</ScoreModifier>
      </Board>
    </Container>
  );
}
