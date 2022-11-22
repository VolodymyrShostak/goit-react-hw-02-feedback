import React from 'react';
import PropTypes from 'prop-types';

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

Controls.propTypes = {
  onFeedbackBad: PropTypes.func.isRequired,
  onFeedbackGood: PropTypes.func.isRequired,
  onFeedbackNeutral: PropTypes.func.isRequired,
};