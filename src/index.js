import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './components/Routes';
import Header from './components/Header';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
