/**
 * Created by haibao on 2016/9/30.
 */


const toggleTodo =(index)=>{
    return {
        type:'TOGGLE_TODO',
        index
    }
}

export default toggleTodo;