import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import * as action from './actions';

class App extends Component{
    render(){
        const {changeValue} = this.props;
        return(
          <div>
              <input type="text" value={this.props.inputValue} onChange={(event)=>{changeValue(event.target.value)}} ref="myInput"/>
              {this.props.inputValue}
          </div>
        );
    }

    // changeHandle(){
    //     const inputValue = this.refs.myInput.value;
    //     //这里的change是action的方法(因为下面通过connect将action的所有方法映射到props上了)
    //     this.props.changeValue(inputValue);
    // }
}

//这里的state是由reducer给的
//将storeState的value属性绑定到组件的props上的value属性
function mapStateToProps(storeState) {
    return{
      inputValue:storeState.myValue
    };
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps,action)(App);


