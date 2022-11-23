import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper, Button } from "./Controls.styled";

const Controls = ({  onFeedback }) => {
  return (
    <ButtonWrapper>
      <Button type="button" name="good" onClick={onFeedback}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={onFeedback}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onFeedback}>
        Bad
      </Button>
    </ButtonWrapper>
  );
};
export default Controls;

Controls.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  
};