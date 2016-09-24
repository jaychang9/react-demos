/**
 * Created by haibao on 2016/9/22.
 */
"use strict";

function logger(core_func){
    let next = core_func;
    return function(){
        console.log("log start");
        let result = next()
        console.log("log end");
        return result;
    }
}
function statistics(core_func){
    let next = core_func;
    return function(){
        console.log("do statistics start");
        let result = next()
        console.log("do statistics end");
        return result;
    }
}
function applyMiddleWare(bizFunc,middleWares){
    middleWares = middleWares.slice();
    middleWares.reverse();
    middleWares.forEach(function(middleWare){
        bizFunc = middleWare(bizFunc);
    });
    return bizFunc;
}

//业务方法
let bizFunc = function (){
    console.log('bizFunc invoked..');
    return 'success';
};

bizFunc = applyMiddleWare(bizFunc,[logger,statistics]);
console.log(bizFunc());

//这个写法是错误的，因为执行applyMiddleWare时的入参bizFunc的作用域是这个方法内，这个方法执行完，bizFunc就消失了

//要么就是在applyMiddleWare最后将bizFunc返回,这样也是可行的
// function applyMiddleWare(bizFunc,middleWares){
//     middleWares = middleWares.slice();
//     middleWares.reverse();
//     middleWares.forEach(function(middleWare){
//         bizFunc = middleWare(bizFunc);
//     });
//     return bizFunc;
// }
// bizFunc = applyMiddleWare(bizFunc,[logger,statistics]);
// console.log(bizFunc());