'use client';

import {Board} from '@/app/components/Board';
import {useState} from 'react';
import {WindowContent, Window, Button} from 'react95';
import styled from 'styled-components';

const FullWindow = styled(Window)`
  width: calc(100vw - 20px);
  height: calc(100vh - 80px);
  margin: 10px;
`;

const FullWindowContent = styled(WindowContent)`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > *:first-child {
    transform: rotate(180deg);
  }
`;

const Reset = styled(Button)``;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const initialScores: [number, number] = [20, 20] as const;
const letsPlay = `Let's play! 🚀`;
const tie = 'Tie!';
const youWon = 'You won!';
const youLost = 'You lost!';

const useScores = () => {
  const [scores, setScores] = useState<[number, number]>(initialScores);
  const [messages, setMessages] = useState<[string, string]>([letsPlay, letsPlay]);

  const incrementScore = (player: 0 | 1) => () => {
    setScores(prev => ({
      ...prev,
      [player]: prev[player] + 1,
    }));
  };

  const decrementScore = (player: 0 | 1) => () => {
    setScores(prev => ({
      ...prev,
      [player]: prev[player] - 1,
    }));
  };

  const reset = () => {
    setScores(initialScores);
    if (scores[0] === scores[1]) {
      setMessages([tie, tie]);
    } else if (scores[0] > scores[1]) {
      setMessages([youWon, youLost]);
      return;
    } else {
      setMessages([youLost, youWon]);
      return;
    }
  };

  const dispatchMessage = (player: 0 | 1, message: string) => {
    setMessages(prev => ({
      ...prev,
      [player]: message,
    }));
  };

  return [scores, incrementScore, decrementScore, reset, messages] as const;
};

export default function Home() {
  const [scores, incrementScore, decrementScore, reset, messages] = useScores();

  return (
    <FullWindow>
      <FullWindowContent>
        <Board
          label="Jade"
          score={scores[0]}
          increment={incrementScore(0)}
          decrement={decrementScore(0)}
          message={messages[0]}
        />
        <Actions>
          <Reset onClick={reset}>Restart</Reset>
        </Actions>
        <Board
          label="Julien"
          score={scores[1]}
          increment={incrementScore(1)}
          decrement={decrementScore(1)}
          message={messages[1]}
        />
      </FullWindowContent>
    </FullWindow>
  );

  // return (
  //   <Container>
  //     <Board>
  //       <ScoreModifier onClick={incrementScore('jade')}>+</ScoreModifier>
  //       <Score>{scores.jade}</Score>
  //       <ScoreModifier onClick={decrementScore('jade')}>-</ScoreModifier>
  //     </Board>
  //     <Actions>
  //       <Reset onClick={reset}>Reset</Reset>
  //     </Actions>
  //     <Board>
  //       <ScoreModifier onClick={incrementScore('julien')}>+</ScoreModifier>
  //       <Score>{scores.julien}</Score>
  //       <ScoreModifier onClick={decrementScore('julien')}>-</ScoreModifier>
  //     </Board>
  //   </Container>
  // );
}
