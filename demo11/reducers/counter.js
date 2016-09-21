/**
 * Created by haibao on 2016/9/8.
 */
import {INCREMENT_COUNTER,DECREMENT_COUNTER} from '../actions/counterAction';



export default function cc(state = 0,action) {
    //这里的state为什么直接是值了，而不是Connect的storeState
    console.log("调用  reducer to 更新 state");
    console.log("state值为:"+state);
    console.log(JSON.stringify(action));

    if(INCREMENT_COUNTER === action.type){
        return state+1;
    }else if(DECREMENT_COUNTER === action.type){
        return state-1;
    }else{
        return state;
    }
}