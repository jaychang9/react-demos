/**
 * Created by haibao on 2016/9/18.
 */
export ADD_TODO = 'ADD_TODO';
export COMPLETE_TODO = "COMPLETE_TODO";
export SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
    SHOW_ALL :'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
};


export function addTodo(text) {
    return {type:ADD_TODO,text};
}

export function completeTodo(index){
    return {type:COMPLETE_TODO,index};
}

export function setVisivility(filter){
    return {type:SET_VISIBILITY_FILTER,filter};
}