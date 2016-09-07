import {createStore,combineReducers} from 'redux';

/**
 * 这是reducer
 */
function counter(state=0,action){
    //区分action类型
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

/**
 * 这是reducer
 */
function printer(user = {id:1,name:"jaychang"},action){
    //区分action类型
    switch(action.type){
        case 'SELECT':
            return {id:2,name:"mayun"};
        case 'UPDATE':
            return {id:3,name:"liyanhong"};
        default:
            return user;

    }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
//这里的{counter:}
const store = createStore(combineReducers({counter,printer}));


// 可以手动订阅更新，也可以事件【绑定到视图层】。
store.subscribe(() =>
    console.log(store.getState())
);


// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1

store.dispatch({type:'SELECT'});

store.dispatch({type:'UPDATE'});

