import { courseReducer } from './courseReducer';


describe('courseReducer tests', () => {
  it('default state returns an empty array', () => {
    expect(courseReducer(undefined, { type: undefined })).toEqual([]);
  });

  it('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const test = [{
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      }];
    expect(courseReducer(test, { type: 'FETCH_COURSE_SUCCESS' })).toEqual(test);
  });

  it('SELECT_COURSE returns the data with the right item updated', () => {
    const index = 2;
    const data = [{
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      }];
    expect(courseReducer(data, { type: 'SELECT_COURSE', index })).toEqual(data);
  });

  it('UNSELECT_COURSE returns the data with the right item updated', () => {
    const index = 2;
    const test = [{
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      }];
    expect(courseReducer(test, { type: 'UNSELECT_COURSE', index })).toEqual(test);
  });
});