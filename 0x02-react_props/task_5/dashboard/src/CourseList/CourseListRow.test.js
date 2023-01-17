import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';


describe('CourseListRow tests', () => {
  it('tests when isHeader is true w/out second cell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="oneCell" />);
    expect(wrapper.find('th').length).toEqual(1);
    expect(wrapper.find('th').text()).toEqual('oneCell');
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  });
  it('tests when isHeader is true w/ second cell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="cellOne" textSecondCell="cellTwo" />);
    expect(wrapper.find('th').length).toEqual(2);
    expect(wrapper.find('th').at(0).text()).toEqual('cellOne');
    expect(wrapper.find('th').at(1).text()).toEqual('cellTwo');
  });

  it('tests when isHeader is false', () => {
    const wrapper = shallow(<NotificationItem type="default" value="notHeader" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'notHeader');
  });
});
