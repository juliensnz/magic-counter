'use client';

import {useState} from 'react';
import {WindowContent, GroupBox, Window, Button} from 'react95';
import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   overflow: hidden;
//   touch-action: none;
// `;

// const Board = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f0f0f0;

//   &:first-child {
//     transform: rotate(180deg);
//   }
// `;

// const ScoreModifier = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 20vw;
//   background-color: red;
//   height: 100%;
//   font-size: 2rem;

//   &:active {
//     background-color: darkred;
//   }
// `;

const FullWindow = styled(Window)`
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  margin: 10px;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex: 1;
`;
const FullWindowContent = styled(WindowContent)`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// const Reset = styled.div`
//   height: 20px;
// `;

// const Actions = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 20px;
// `;

const FullGroupBox = styled(GroupBox)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RotatedGroupBox = styled(FullGroupBox)`
  transform: rotate(180deg);
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
const StyledButton = styled(Button)`
  flex: 1;
  height: 50px;
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

  const reset = () => {
    setScores({
      jade: 20,
      julien: 20,
    });
  };

  return [scores, incrementScore, decrementScore, reset] as const;
};

export default function Home() {
  const [scores, incrementScore, decrementScore, reset] = useScore();

  return (
    <FullWindow>
      <FullWindowContent>
        <RotatedGroupBox label="Jade">
          <Score>{scores.jade}</Score>
          <Actions>
            <StyledButton onClick={incrementScore('jade')}>+</StyledButton>
            <StyledButton onClick={decrementScore('jade')}>-</StyledButton>
          </Actions>
        </RotatedGroupBox>
        <FullGroupBox label="Julien">
          <Score>{scores.julien}</Score>
          <Actions>
            <StyledButton onClick={incrementScore('julien')}>+</StyledButton>
            <StyledButton onClick={decrementScore('julien')}>-</StyledButton>
          </Actions>
        </FullGroupBox>
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
