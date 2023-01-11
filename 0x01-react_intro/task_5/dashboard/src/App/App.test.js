import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { shallow } from 'enzyme';

describe('App tests', () => {
  describe('App renders without crashing', () => {
    it('Renders', function() {
      const test = document.createElement('div');
      const root = ReactDOMClient.createRoot(div);
      root.render(<App />);
    });
  });
  describe('App renders a div with the class App-header', () => {
    it('Renders', function() {
      const wrapper = shallow(<App />);
      const header = wrapper.find('.App-header');
      assert.equal(header.length, 1);
    });
  });
  describe('App renders a div with the class App-body', () => {
    it('Renders', function() {
      const wrapper = shallow(<App />);
      const body = wrapper.find('.App-body');
      assert.equal(body.length, 1);
    });
  });
  describe('App renders a div with the class App-footer', () => {
    it('Renders', function() {
      const wrapper = shallow(<App />);
      const footer = wrapper.find('.App-footer');
      assert.equal(footer.length, 1);
    });
  });
})