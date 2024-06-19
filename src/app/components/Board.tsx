import {Button, Frame, GroupBox} from 'react95';
import styled from 'styled-components';

const FullGroupBox = styled(GroupBox)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex: 1;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledFrame = styled(Frame)`
  padding: 10px;
  min-height: 48px;
`;

const StyledButton = styled(Button)`
  flex: 1;
  height: 50px;
`;

type BoardProps = {
  label: string;
  message: string;
  score: number;
  increment: () => void;
  decrement: () => void;
};

const Board = ({label, message, score, increment, decrement}: BoardProps) => {
  return (
    <FullGroupBox label={label}>
      <Score>{score}</Score>
      <Actions>
        <StyledButton onClick={increment}>+</StyledButton>
        <StyledButton onClick={decrement}>-</StyledButton>
      </Actions>
      <StyledFrame variant="well">{message}</StyledFrame>
    </FullGroupBox>
  );
};

export {Board};
