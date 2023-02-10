import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';


const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_COURSE:
      return state.map((course) => {
        if (course.index === action.index) {
          return {
            ...course, isSelected: true
          }
        }
        return course;
      });
    case UNSELECT_COURSE:
      return state.map((course) => {
        if (course.index === action.index) {
          return {
            ...course, isSelected: false
          }
        }
        return course;
      });
    case FETCH_COURSE_SUCCESS:
      return state.map((course) => ({
        ...course, isSelected: false
      }));
    default:
      return state;
  }
}