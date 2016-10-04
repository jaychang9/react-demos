/**
 * Created by haibao on 2016/9/29.
 */
import {combineReducers} from 'redux';
import todos from './todos';
import setVisibilityFilter from './setVisibilityFilter';

const rootReducer = combineReducers({todos,setVisibilityFilter});

export default rootReducer;