import React from 'react';
import s from './ExoressoFeedback.js';
// import Section from './Section.js';
import Controls from '../Controls/Controls.js';
import Statistics from '../Statistics/Statistic.js';
import Notification from '../Notification/Notification.js';
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
        const { good } = this.state;
        const { bad } = this.state;
        const { neutral } = this.state;
        const { total } = this.state;
        const { positivePercentage } = this.state;
        
    return (
      <div className={s.feedback}>
        {/* <Section title="Please leave feedback"> */}
        <h2>Please leave feedback</h2>
        <Controls
          onFeedbackGood={this.getFeedbackGood}
          onFeedbackNeutral={this.getFeedbackNeutral}
          onFeedbackBad={this.getFeedbackBad}
        />
        {/* </Section> */}
        {/* <Section title="Statistics"> */}
        {this.state.total > 0 ? (
          <>
            <h2>Statistics</h2>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
        {/* </Section> */}
      </div>
    );
  }
}
export default Feedback;
