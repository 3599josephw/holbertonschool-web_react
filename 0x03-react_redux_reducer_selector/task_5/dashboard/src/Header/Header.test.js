import { assert } from 'chai';
import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header tests', () => {
  describe('Header renders without crashing', () => {
    it('Renders', function() {
      shallow(<Header />);
    });
  });
  describe('components render img and h1 tags', () => {
    it('Renders', function() {
      const wrapper = shallow(<Header />);
      assert.equal(wrapper.find('img').length, 1);
      assert.equal(wrapper.find('h1').length, 1);
    });
  });
})