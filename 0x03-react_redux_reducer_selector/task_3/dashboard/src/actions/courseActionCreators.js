import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
const { bindActionCreators } = require('redux');


export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index
  };
}

export const boundCourseAction = () =>
  bindActionCreators({
    selectCourse,
    unSelectCourse
  }, dispatch)
