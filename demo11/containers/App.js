/**
 * Created by haibao on 2016/9/8.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from  '../components/Counter';
import * as actions from '../actions/counterAction';

//将state的count绑定到组件props的count属性上
function mapStateToProps(state) {
    return {
        counter:state.counter
    };
}

function  mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps");
    console.log(actions);

    return bindActionCreators(actions,dispatch);
    //bindActionCreateors(actions,dispatch)实际就是做了下面的事情
    // return{
    //     increase:()=>dispatch(actions.increase()),
    //     decrease:()=>dispatch(actions.decrease()),
    //     increaseIfOdd:()=>dispatch(actions.increaseIfOdd()),
    //     increaseAsync:()=>dispatch(actions.increaseAsync())
    // }
}


Counter.defaultProps = { counter: 0 };

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

//也可以传递actions对象，而不是定义一个mapDispatchToProps
//export default connect(mapStateToProps,actions)(Counter);

//如果省略mapDispatchToProps,那么即是传递了一个dispatch注入到props中
//export default  connect(mapStateToProps)(Counter);



