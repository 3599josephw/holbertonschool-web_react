import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';


describe('CourseList tests', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });
  it('it renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});
