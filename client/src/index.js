import 'materialize-css/dist/css/materialize.min.css'; // if no reltaive path, assumes node_module
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// console.log('Stripe key is ', process.env.REACT_APP_STRIPE_KEY);
// console.log('Stripe key is ', process.env.NODE_ENV);
