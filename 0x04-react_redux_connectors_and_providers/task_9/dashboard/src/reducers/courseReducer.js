import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { courseNormalizer } from '../schema/courses';
const { Map, setIn } = require('immutable');


const initialState = Map([]);

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_COURSE:
      return setIn(Map(state), [String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return setIn(Map(state), [String(action.index), 'isSelected'], false);
    case FETCH_COURSE_SUCCESS:
      return state.merge(courseNormalizer(action.data));
    default:
      return state;
  }
}