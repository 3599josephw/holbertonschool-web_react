import React, { Component } from 'react';

function WithLogging(Wrapped) {
  const name = Wrapped.displayName || Wrapped.name || 'Component';

  class Logs extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }
    render() {
      return <Wrapped {...this.props} />;
    }
  }
  Logs.displayName = `WithLogging(${name})`;
  return Logs;
};

export default WithLogging;