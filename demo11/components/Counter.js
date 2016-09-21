import React,{Component,PropTypes} from  'react';
import {render} from 'react-dom';



class Counter extends Component{


    constructor(props){
        super(props);
    }

    render(){
        const {increase,decrease,increaseIfOdd,increaseAsync,counter} = this.props;
        return (
            <div>
                <h3>Click: {counter} times</h3>
                <button onClick={increase}>Increase+</button><br/>
                <button onClick={decrease}>Decrease-</button><br/>
                <button onClick={increaseIfOdd}>IncreaseIfOdd+</button><br/>
                <button onClick={increaseAsync}>IncreaseAsync+</button><br/>
            </div>);
    }
}


Counter.propTypes={
    increase:PropTypes.func.isRequired,
    decrease:PropTypes.func.isRequired,
    increaseIfOdd:PropTypes.func.isRequired,
    increaseAsync:PropTypes.func.isRequired,
    //counter必须为数字，且必须存在
    counter: PropTypes.number.isRequired
}

export default Counter;







