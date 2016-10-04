import React,{Component} from 'react';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import rootReducer from './reducers';
import App from './containers/App';

const store = createStore(
    rootReducer
);

render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));