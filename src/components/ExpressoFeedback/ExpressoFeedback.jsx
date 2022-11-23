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
       
      };
    });
  };
  getFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
       
      };
    });
  };
  getFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
       
      };
    });
  };
  counterFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  counterPositivePercentage = () => {
    return (100 / this.counterFeedback()) * this.state.good;
  };

  render() {
    const { good, neutral, bad } = this.state;

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
          {this.counterFeedback() ? (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.counterFeedback()}
                positivePercentage={this.counterPositivePercentage()}
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
