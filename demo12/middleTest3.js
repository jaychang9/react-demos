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
function applyMiddleWare(middleWares){

}
//业务方法
let bizFunc = function (){
    console.log('bizFunc invoked..');
    return 'success';
};

//bizFunc = applyMiddleWare([logger,statistics]);

function foo(a){-
    console.log('foo '+a);
    return function(b){
        console.log('bar '+b);
        return function(c){
            console.log('zoo '+c);
        }
    }
}



foo('a')('b')('c')