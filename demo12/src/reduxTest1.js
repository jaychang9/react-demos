/**
 * Created by haibao on 2016/9/21.
 */
const createStore = require( 'redux').createStore;

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

function reducer(state,action){
    console.log('reducer invoke... '+action.type+ JSON.stringify(state));
    switch (action.type){
        case 'ACTION1':
            return state.concat({text:action.text});
        case 'ACTION2':
            return state.concat({text:action.text});
        default :
            return state;
    }
}

//当 store 创建后，Redux 会 dispatch 一个 action 到 reducer 上
const  store = createStore(reducer,['Use Redux']);

store.subscribe(function(){
    console.log('state changed.'+ JSON.stringify(store.getState()));
});

// store.dispatch(action1());
//
// store.dispatch(action2());



