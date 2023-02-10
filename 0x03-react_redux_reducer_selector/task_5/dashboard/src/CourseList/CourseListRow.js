import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  th: {
    borderBottom: '1px solid #E7E7E7',
    padding: '10px',
  },
  td: {
    padding: '10px'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

class CourseListRow extends React.Component {
  constructor(props) {
    super(props);
    this.check = this.check.bind(this);
    this.state = {
      checked: false
    }
  }

  check() {
    if (this.state.checked) {
      this.setState({checked: false})
    } else {
      this.setState({checked: true})
    }
  }

  render() {
    if (this.props.isHeader) {
      if (this.props.textSecondCell === null) {
        return (
          <tr>
            <th className={css(styles.th)} colSpan={2} style={{backgroundColor: "#deb5b545"}}>{this.props.textFirstCell}</th>
          </tr>
        );
      }
      return (
        <tr style={{backgroundColor: "#f5f5f5ab"}}>
          <th className={css(styles.th)}>{this.props.textFirstCell}</th>
          <th className={css(styles.th)}>{this.props.textSecondCell}</th>
        </tr>
      );
    }
    return (
      <tr style={{backgroundColor: "#f5f5f5ab"}} className={`${this.state.checked ? css(styles.rowChecked) : null}`}>
        <td className={css(styles.td)}>
          <input type='checkbox' onChange={() => this.check()}></input>
          {this.props.textFirstCell}
        </td>
        <td className={css(styles.td)}>{this.props.textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
