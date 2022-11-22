import React from 'react';
import { FeedbackWrapper } from './Statistic.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <FeedbackWrapper>
      <p>
        Good :<span> {good}</span>
      </p>
      <p>
        Neutral :<span> {neutral}</span>
      </p>
      <p>
        Bad :<span> {bad}</span>
      </p>
      <p>
        Total :<span> {total}</span>
      </p>
      <p>
        Positive feedback :<span> {Math.round(positivePercentage)} %</span>
      </p>
    </FeedbackWrapper>
  );
};
export default Statistics;
