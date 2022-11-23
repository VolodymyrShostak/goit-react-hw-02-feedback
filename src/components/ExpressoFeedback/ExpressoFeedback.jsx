import React from 'react';
import { Wrapper } from './ExoressoFeedback.styled.js';
import Section from '../Section/Section.jsx';

import Controls from '../Controls';
import Statistics from '../Statistics';
import Notification from '../Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
   
  };
  getFeedbackGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
        positivePercentage:
          ((this.state.good + 1) / (this.state.total + 1)) * 100,
      };
    });
  };
  getFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
        positivePercentage: (this.state.good / (this.state.total + 1)) * 100,
      };
    });
  };
  getFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1,
        positivePercentage: (this.state.good / (this.state.total + 1)) * 100,
      };
    });
  };

  render() {
    const { good, positivePercentage, total, neutral, bad } = this.state;
   
    return (
      <Wrapper>
        <Section title="Please, leave feedback">
          <Controls
            onFeedbackGood={this.getFeedbackGood}
            onFeedbackNeutral={this.getFeedbackNeutral}
            onFeedbackBad={this.getFeedbackBad}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total > 0 ? (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            </>
          ) : (
            <Notification message="There is no feedback..." />
          )}
        </Section>
      </Wrapper>
    );
  }
}
export default Feedback;
