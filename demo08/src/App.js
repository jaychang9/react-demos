import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import * as action from './actions';

class App extends Component{
    render(){
        return(
          <div>
              <input type="text" value={this.props.inputValue} onChange={this.changeHandle.bind(this)} ref="myInput"/>
              {this.props.inputValue}
          </div>
        );
    }

    changeHandle(){
        const inputValue = this.refs.myInput.value;
        //这里的change是action的方法
        this.props.change(inputValue);
    }
}

//这里的state是由reducer给的
function mapStateToProps(state) {
    return{
      inputValue:state.value
    };
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps,action)(App);


