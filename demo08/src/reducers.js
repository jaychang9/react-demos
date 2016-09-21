/**
 * Created by haibao on 2016/9/6.
 */
//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
    export default function change(state,action){
        //
        console.log("调用reducer "+JSON.stringify(state));
        if(action.type=="change")return{myValue:action.value};
        return {myValue:'default'};
    }