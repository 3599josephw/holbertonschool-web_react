import { assert } from 'chai';
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';


describe('App', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });


  it('renders without crashing', () => {
    shallow(<App />);
  });

  test('contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  test('contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  test('contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  test('contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  test('check that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  test('Login is not included, CourseList is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLngth(1);
  });
});
