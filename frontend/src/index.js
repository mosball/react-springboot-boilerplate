import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import redux from './redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    redux,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);