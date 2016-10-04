/**
 * Created by haibao on 2016/9/29.
 */
import {connect} from 'react-redux';
import BaseApp from '../components/index';
import addTodo from '../actions/addTodo';
import toggleTodo from '../actions/toggleTodo';

const mapStateToProps = (state,ownProps)=>{
    console.log("mapStateToProps",state);
    return {
        todos:state.todos
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onAddClick:(text)=>{
            dispatch(addTodo(text));
        },
        onToggleClick:(index)=>{
            dispatch(toggleTodo(index));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BaseApp);