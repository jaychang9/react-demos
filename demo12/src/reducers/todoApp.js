/**
 * Created by haibao on 2016/9/18.
 */
import {combineReducers} from 'redux';
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY,VISIBILITY_FILTERS} from '../actions/todo';
import {SHOW_ALL} = VISIBILITY_FILTERS;
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;