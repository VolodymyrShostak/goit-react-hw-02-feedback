import React from 'react';

const Controls = ({ onFeedbackGood, onFeedbackNeutral, onFeedbackBad }) => {
  return (
    <div>
      <button type="button" onClick={onFeedbackGood}>
        Good
      </button>
      <button type="button" onClick={onFeedbackNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onFeedbackBad}>
        Bad
      </button>
    </div>
  );
};
export default Controls;
