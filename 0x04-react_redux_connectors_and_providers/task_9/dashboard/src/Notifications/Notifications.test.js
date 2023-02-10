import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Notifications tests', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe('Notifications renders without crashing', () => {
    it('Renders', function() {
      shallow(<Notifications />);
    });
  });
  describe('Notifications renders three list items', () => {
    it('Renders', function() {
      const wrapper = shallow(<Notifications />);
      const list = wrapper.find('li');
      assert.equal(list.length, 3);
    });
  });
  describe('Notifications renders "Here is the list of notifications"', () => {
    it('Renders', function() {
      const wrapper = shallow(<Notifications />);
      const text = wrapper.find('p');
      expect(text.text()).toEqual('Here is the list of notifications');
    });
  });

  it('console logs id when clicked', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );
    console.log.mockRestore();
  });
});