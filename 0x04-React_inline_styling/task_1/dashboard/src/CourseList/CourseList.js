import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const CourseListCSS = StyleSheet.create({
  table: {
    marginLeft: '50px',
    border: '1px solid #E7E7E7',
    width: '100%',
    textAlign: 'left',
  },
  thead: {
    fontWeight: 'bold',
    ':nth-child(1n) > :first-child': {
      textAlign: 'center',
    },
  },
  th: {
    borderBottom: '1px solid #E7E7E7',
    padding: '10px',
  },
  td: {
    padding: '10px',
  }
})

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: [],
};


function CourseList({listCourses}) {
  return (
    <table className={css(CourseListCSS.table)}>
      <thead className={css(CourseListCSS.thead)}>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (listCourses.map((course) => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
          ))) : (<CourseListRow textFirstCell="No course available yet" />)}
      </tbody>
    </table>
  )
}

export default CourseList;
