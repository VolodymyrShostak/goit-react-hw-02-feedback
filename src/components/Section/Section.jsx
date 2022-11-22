import PropTypes from 'prop-types';
import React from 'react';

import { Title } from './Section.styled.js';

const Section = ({ title, children }) => {
  return (
    <div className="myclass">
      <Title>{title}</Title>
      {children}
    </div>
  );
};
export default Section;
Section.propTypes = {
  children: PropTypes.object.isRequired,
}
