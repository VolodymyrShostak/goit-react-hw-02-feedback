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

  getFeedback = e => {
    const {
      target: { name }
    } = e;
    this.setState(prevState => {
      return {
        [name]: prevState[name] +1,
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
            onFeedback={this.getFeedback}
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
