/**
 * Created by haibao on 2016/9/29.
 */

const todos = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,{id:action.id,completed:false,text:action.text}];
        case 'TOGGLE_TODO':
            const toggleTodo = state[action.index];
            return [...state.slice(0,action.index),{id:toggleTodo.id,completed:!toggleTodo.completed,text:toggleTodo.text},...state.slice(action.index+1)];
        default:
            return state;
    }
}

export default  todos;