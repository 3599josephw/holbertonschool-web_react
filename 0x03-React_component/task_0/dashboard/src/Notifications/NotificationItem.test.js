import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe('NotificationItem tests', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('it renders the correct html', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.props().dataPriority === 'urgent');
    expect(wrapper.props().dataValue === 'test');
    expect(wrapper.props().html === '<u>test</u>');
  });
});
