/**
 * Created by haibao on 2016/9/22.
 */
"use strict";

function logger(store){
    console.log('logger ' +store.name);
    let next = store.core_func;
    return function(){
        console.log("log start");
        let result = next()
        console.log("log end");
        return result;
    }
}

function statistics(store){
    console.log('statistics ' +store.name);
    let next = store.core_func;
    return function(){
        console.log("do statistics start");
        let result = next()
        console.log("do statistics end");
        return result;
    }
}

function applyMiddleWare(store,middleWares){
    middleWares = middleWares.slice();
    middleWares.reverse();
    middleWares.forEach(function(middleWare){
        store.core_func = middleWare(store);
    });
}

let store = {};
store.name = 'I am Store';
store.core_func = function (){
    console.log('core_func');
    return 'success';
};


applyMiddleWare(store,[logger,statistics]);
console.log(store.core_func());