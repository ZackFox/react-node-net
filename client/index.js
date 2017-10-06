import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
module.hot.accept();
