import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


const BodyCSS = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
})

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(BodyCSS.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default BodySectionWithMarginBottom;