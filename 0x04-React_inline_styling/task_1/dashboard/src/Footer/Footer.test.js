import { assert } from 'chai';
import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer tests', () => {
  describe('Footer renders without crashing', () => {
    it('Renders', function() {
      shallow(<Footer />);
    });
  });
  describe('components at the very least render the text “Copyright”', () => {
    it('Renders', function() {
      const wrapper = shallow(<Footer />);
      assert.match(wrapper.text(), /Copyright/);
    });
  });
})