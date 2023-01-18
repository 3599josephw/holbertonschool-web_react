import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';


describe('BodySectionWithMarginBottom', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('BodySectionWithMarginBottom renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodySectionWithMarginBottom title="test title" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render correctly a BodySection component and props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const element = wrapper.find(BodySection);
    const child = wrapper.find('p');
    expect(element.length).toBe(1);
    expect(child.text()).toBe('test children node');
  });
});
