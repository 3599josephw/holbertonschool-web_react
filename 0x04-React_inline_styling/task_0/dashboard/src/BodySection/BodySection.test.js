import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

desribe('BodySection', () => {
  it('BodySection renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodySection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    const h2 = wrapper.find('h2');
    const child = wrapper.find('p');
    expect(h2.text()).toBe('test title');
    expect(child.text()).toBe('test children node');
  });
});