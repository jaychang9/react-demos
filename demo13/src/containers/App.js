/**
 * Created by haibao on 2016/9/29.
 */
import {connect} from 'react-redux';
import BaseApp from '../components/index';
import addTodo from '../actions/addTodo';
import toggleTodo from '../actions/toggleTodo';
import setVisibilityFilter from '../actions/setVisibilityFilter'

const getVisiableTodos = (todos,filter)=>{
    console.log("getVisiableTodos");
    switch(filter){
        case 'SHOW_ACTIVE':
            return todos.filter(todo=>!todo.completed);
        case 'SHOW_COMPLETE':
            return todos.filter(todo=>todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state,ownProps)=>{
    console.log("mapStateToProps",state);
    return {
        todos:getVisiableTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onAddClick:(text)=>{
            dispatch(addTodo(text));
        },
        onToggleClick:(index)=>{
            dispatch(toggleTodo(index));
        },
        onFilterChange:(filter)=>{
            dispatch(setVisibilityFilter(filter));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BaseApp);