import React from 'react';
import { ButtonWrapper, Button } from "./Controls.styled";

const Controls = ({ onFeedbackGood, onFeedbackNeutral, onFeedbackBad }) => {
  return (
    <ButtonWrapper>
      <Button type="button" onClick={onFeedbackGood}>
        Good
      </Button>
      <Button type="button" onClick={onFeedbackNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onFeedbackBad}>
        Bad
      </Button>
    </ButtonWrapper>
  );
};
export default Controls;
