/**
 * Created by haibao on 2016/9/22.
 */
const createStore = require('redux').createStore;

const ACTIONS = {
    ACTION1:'ACTION1',
    ACTION2:'ACTION2'
}

function action1(){
    return {
        type:'ACTION1',
        text:'I am Action1'
    }
}

function action2(){
    return {
        type:'ACTION2',
        text:'I am Action2'
    }
}

function reducer1(state,action){
    state = typeof state === 'undefined' ? []:state;
    switch(action.type){
        case ACTIONS.ACTION1:
            return state.concat({text:action.text});
        case ACTIONS.ACTION2:
            return state.concat({text:action.text});
        default:
            return state;
    }
}

const store = createStore(reducer1);

const next = store.dispatch;
store.dispatch = function(action){
    console.log('action '+action.type);
    const result = next(action);
    console.log('next '+JSON.stringify(store.getState()));
    return result;
};

store.dispatch(action1());
store.dispatch(action2());


//但这里有个问题，如果我想加入其他功能，比如调用时间的记录，那么我是不是得重新定义dispatch，很是不便
//那么在reduxTest4将给出解决方案