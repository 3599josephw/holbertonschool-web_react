import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseAction tests', () => {
  it('selectCourse returns correctly', () => {
    expect(selectCourse(1)).toEqual({
      type: 'SELECT_COURSE',
      index: 1,
    });
  });

  it('unSelectCourse returns correctly', () => {
    expect(unSelectCourse(1)).toEqual({
      type: 'UNSELECT_COURSE',
      index: 1,
    });
  });
});