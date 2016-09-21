/**
 * Created by haibao on 2016/9/21.
 */
const createStore = require( 'redux').createStore;
const combineReducers = require('redux').combineReducers;

function action1(){
    return {
        type:"ACTION1",
        text:"I am Action1"
    }
}

function action2(){
    return {
        type:"ACTION2",
        text:"I am Action2"
    }
}


function action3(){
    return {
        type:"ACTION3",
        text:"I am Action3"
    }
}

function action4(){
    return {
        type:"ACTION4",
        text:"I am Action4"
    }
}

function reducer1(state,action){
    console.log('reducer invoke... '+ JSON.stringify(state));
    switch (action.type){
        case 'ACTION1':
            return Object.assign({},state,{text:action.text});
        case 'ACTION2':
            return Object.assign({},state,{text:action.text});
        default :
            return state === undefined ?{}:state;
    }
}

function reducer2(state,action){
    console.log('reducer invoke... '+ JSON.stringify(state));
    switch (action.type){
        case 'ACTION3':
            return Object.assign({},state,{text:action.text});
        case 'ACTION4':
            return Object.assign({},state,{text:action.text});
        default :
            return state === undefined ?{}:state;
    }
}

const  reducers = combineReducers({reducer1:reducer1,reducer2:reducer2});

//这里如果还是用['Use Redux']数组作为第二个参数，会报错
//The preloadedState argument passed to createStore has unexpected type of "Array". Expected argument to be an object with the following keys: "reducer1", "reducer2"
//提示让我们可以用reducer1,reducer2作为键值  {reducer1:xxx,reducer2:yyy}，当然reducer1,reducer2也可以是其他名称
//const store = createStore(reducers,['Use Redux']);


const  store = createStore(reducers,{reducer1:reducer1,reducer2:reducer2});

store.subscribe(function(){
    console.log("state changed "+JSON.stringify(store.getState()));
});

store.dispatch(action1());
store.dispatch(action3());








