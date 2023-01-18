import React from 'react';
import { render } from '@testing-library/react';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  it('console.log called on mount', () => {
    const spy = jest.spyOn(console, 'log');
    const component = () => <p />;
    const Wrapped = WithLogging(component);
    render(<Wrapped />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenNthCalledWith(1, `Component ${component} is mounted`);
    spy.mockRestore();
  });

  it('console.log called on unmount', () => {
    const spy = jest.spyOn(console, 'log');
    const component = () => <div />;
    const Wrapped = WithLogging(component);
    const { unmount } = render(<Wrapped />);
    unmount();
    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy).toHaveBeenNthCalledWith(1, `Component ${component} is mounted`);
    expect(spy).toHaveBeenNthCalledWith(2, `Component ${component} is going to unmount`);
    spy.mockRestore();
  });
});