import React from 'react';
import s from './ExoressoFeedback.js';
import Section from './Section.js';
import Controls from './Controls.js';
import Statistics from './Statistic.js';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
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
    return (
      <div className={s.feedback}>
        <Section title="Please leave feedback">
          <Controls
            onFeedbackGood={this.getFeedbackGood}
            onFeedbackNeutral={this.getFeedbackNeutral}
            onFeedbackBad={this.getFeedbackBad}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
export default Feedback;
