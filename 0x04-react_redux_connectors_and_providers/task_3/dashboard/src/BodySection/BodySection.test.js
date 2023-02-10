import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('BodySection renders with correct h2', () => {
    const body = (
      <BodySection title="test">
        <p>test children node</p>
      </BodySection>
    );
    const wrapper = shallow(body);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('test');
  });

  it('BodySection rendered with correct p', () => {
    const body = (
      <BodySection title="test">
        <p>test children node</p>
      </BodySection>
    );
    const wrapper = shallow(body);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});