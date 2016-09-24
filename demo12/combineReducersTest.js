"use strict";

function combineReducers(reducers){
    return reducers;
}


function createStore(reducers,initialState){

    let state = {};
    let listeners = [];


    let subscribe = listener =>{
        listeners.push(listener);
        return ()=> {
            listeners = listeners.filter(l=>l !== listener)
        };
    }

    let dispatch = action =>{
        //reducer执行完返回一个小新的state(旧state+action=>新state)

        reducers.forEach((reducer)=>{
            state = reducer(getState(),action);
        });
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
    {type:"DEC",payload:1},
    {type:"ADD_TODO",text:"ADD A JOB"},
    {type:"COMPLETED",text:"COMPLETED A JOB"}
];

function reducer1(state ,action) {
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

function reducer2(state ,action) {
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

//合并reducer
let reducers = combineReducers({reducer1,reducer2});

const  store = createStore(reducers,{reducer1:0,reducer2:[]});

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