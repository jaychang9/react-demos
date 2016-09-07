/**
 * Created by haibao on 2016/9/6.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from  './App';
import inputApp from './reducers';

//把reducer放到store
//store是用来存放应用的状态
let store = createStore(inputApp);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
