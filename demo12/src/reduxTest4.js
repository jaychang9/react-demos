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

function patchSotreToAddLogin(store) {
    const next = store.dispatch;
    store.dispatch = function(action){
        console.log('action '+action.type);
        next(action);
        console.log('next '+JSON.stringify(store.getState()));
    }
}

function patchSotreToAddCrashReport(store) {
    const next = store.dispatch;
    store.dispatch = function(action){
        try{
            console.log('检测执行是否有错');
            return next(action);
        }catch(e){
            console.error('捕获一个异常 '+e);
            throw e;
        }
    }
}


patchSotreToAddCrashReport(store);
patchSotreToAddLogin(store);
store.dispatch(action1());


