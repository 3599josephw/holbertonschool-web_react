import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  th: {
    borderBottom: '1px solid #E7E7E7',
    padding: '10px',
  },
  td: {
    padding: '10px'
  }
});

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th className={css(styles.th)} colSpan={2} style={{backgroundColor: "#deb5b545"}}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr style={{backgroundColor: "#f5f5f5ab"}}>
        <th className={css(styles.th)}>{textFirstCell}</th>
        <th className={css(styles.th)}>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr style={{backgroundColor: "#f5f5f5ab"}}>
      <td className={css(styles.td)}>{textFirstCell}</td>
      <td  className={css(styles.td)}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
