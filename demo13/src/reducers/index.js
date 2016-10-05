/**
 * Created by haibao on 2016/9/29.
 */
import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({todos,visibilityFilter});

export default rootReducer;