import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';



describe('NotificationItem tests', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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

  const listNotifications = [
    { id: 1, type: 'urgent', value: 'test 1' },
    { id: 2, type: 'default', html: { __html: 'html' } },
  ];
  /*it('markAsRead has correct id', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const spy = jest.spyOn(wrapper.instance(), 'markAsRead');
    wrapper.find('NotificationItem').get(0).props.markAsRead(1);
    expect(spy).toHaveBeenCalledWith(1);
    wrapper.find('NotificationItem').get(1).props.markAsRead(2);
    expect(spy).toHaveBeenCalledWith(2);
  });*/
});
