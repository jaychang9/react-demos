/**
 * Created by haibao on 2016/9/22.
 */
"use strict";

// function logger(store){
//     return function(next){
//         return function(action){
//             console.log("do logger "+action);
//             let result = next(action);
//             console.log("do logger "+result);
//             return result;
//         }
//     }
// }
let logger = store => next => action=>{
    console.log("do logger "+JSON.stringify(action));
    let result = next(action);
    console.log("do logger "+result);
    return result;
};

let timeoutScheduler = store => next =>action=>{
    console.log("do timeoutScheduler start");
    if(!action.meta || !action.meta.delay){
        return next(action);
    }
    let timeoutId = setTimeout(()=>next(action),action.meta.delay);
    console.log("do timeoutScheduler end");
    return ()=>clearTimeout(timeoutId);
}

timeoutScheduler({})(()=>{console.log("next")})({});

// function statistics(store){
//     return function(next){
//         return function(action){
//             console.log("do statistics start");
//             let result = next(action);
//             console.log("do statistics end");
//             return result;
//         }
//     }
// }
let statistics = store => next => action =>{
    console.log("do statistics start");
    let result = next(action);
    console.log("do statistics end");
    return result;
}

function applyMiddleWare(store,middleWares){
    let dispatch = store.dispatch;
    let mws = middleWares.slice();
    mws.reverse();
    mws.forEach((mw)=>{
        dispatch = mw(store)(dispatch);
    });
    return Object.assign({},store,{dispatch});
}

let store = applyMiddleWare({dispatch:()=>console.log("dispatch")},[statistics,timeoutScheduler,logger]);

console.dir(store);

store.dispatch({type:"Test Action",meta:{delay:5000}});


