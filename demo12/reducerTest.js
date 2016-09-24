/**
 * Created by haibao on 2016/9/24.
 */
"use strict";
const actions = [
    {type:'ADD',payload:1},
    {type:'ADD',payload:2},
    {type:'ADD',payload:3}
];

let result = actions.reduce((state,x)=>{
    console.log(JSON.stringify(state)+" "+JSON.stringify(x));
    return state+x.payload;
},0);
console.log(JSON.stringify(result));