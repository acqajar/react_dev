import 'materialize-css/dist/css/materialize.min.css'; // if no reltaive path, assumes node_module
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
