import React from 'react';
import PropTypes from 'prop-types';


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan={2} style={{backgroundColor: "#deb5b545"}}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr style={{backgroundColor: "#f5f5f5ab"}}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr style={{backgroundColor: "#f5f5f5ab"}}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
