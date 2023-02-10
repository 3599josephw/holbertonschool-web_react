import { assert } from 'chai';
import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login tests', () => {
  describe('Login renders without crashing', () => {
    it('Renders', function() {
      shallow(<Login />);
    });
  });
  describe('components renders 2 input tags and 2 label tags', () => {
    it('Renders', function() {
      const wrapper = shallow(<Login />);
      assert.equal(wrapper.find('input').length, 2);
      assert.equal(wrapper.find('label').length, 2);
    });
  });
})