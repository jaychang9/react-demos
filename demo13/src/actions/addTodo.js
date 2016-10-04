/**
 * Created by haibao on 2016/9/29.
 */

const addTodo = (text) =>{
    return {
        type : 'ADD_TODO',
        text
    }
}

export default addTodo;