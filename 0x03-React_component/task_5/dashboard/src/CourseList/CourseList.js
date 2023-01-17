import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';


CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: [],
};


function CourseList({listCourses}) {
  return (
    <table id='CourseList'>
      <thead>
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
