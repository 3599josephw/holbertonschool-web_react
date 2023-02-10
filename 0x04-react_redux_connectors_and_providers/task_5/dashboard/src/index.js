import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxApp } from './App/App';
import { Provider } from 'react-redux';
import {store} from './App/AppContext'


window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
