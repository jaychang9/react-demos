/**
 * Created by haibao on 2016/9/29.
 */

const setVisibilityFilter = (state = 'SHOW_ALL',action) => {
    switch(action.type){
        case 'SHOW_ACTIVE':
            return action.filter;
        case 'SHOW_COMPLETED':
            return action.filter;
        default:
            return state;
    }
}

export default setVisibilityFilter;