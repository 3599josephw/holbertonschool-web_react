import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';


describe('CourseList tests', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });
  it('it renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});
