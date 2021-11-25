import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';
import App from '../../../streamer/client/src/components/App';
import reducers from '../../../streamer/client/src/reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk)
));
ReactDOM.render(

      <Provider store={store}>
          <App />

      </Provider>,

  document.getElementById('root')
);

