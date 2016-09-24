"use strict";

function createStore(reducer,initialState){

    let state;
    let listeners = [];


    let subscribe = listener =>{
        listeners.push(listener);
        return ()=> {
            listeners = listeners.filter(l=>l !== listener)
        };
    }

    let dispatch = action =>{
        //reducer执行完返回一个小新的state(旧state+action=>新state)
        state = reducer(getState(),action);
        listeners.forEach(listener=>listener());
    }

    let getState = () => state;

    //设置state默认值
    dispatch({});

    //如果提供了initialState那么就会覆盖reducer函数的默认初始值
    if(typeof initialState === 'undefined'){
        state = initialState;
    }

    return {getState,dispatch,subscribe};
}

const actions = [
    {type:"ADD",payload:1},
    {type:"DEC",payload:1}
];

function reducer(state ,action) {
    state = typeof state === 'undefined'?0:state;
    switch (action.type){
        case "ADD":
            return state+action.payload;
        case "DEC":
            return state-action.payload;
        default:
            return state;
    }
}

const  store = createStore(reducer,1);

let l1  =store.subscribe(function(){
    console.log("这是一个监听器1 "+store.getState());
});
let l2 = store.subscribe(function(){
    console.log("这是一个监听器2 "+store.getState());
});



store.dispatch(actions[0]);
store.dispatch(actions[0]);
store.dispatch(actions[1]);
store.dispatch(actions[1]);