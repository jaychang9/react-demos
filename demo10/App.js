import React,{Component} from  'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

const actions = {increment:()=>({type:"INCREMENT"}),decrement:()=>({type:"DECREMENT"}),incrementIfOdd:()=>({type:'INCREMENTIFODD'})};


function counter(state={count:0},action){
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1};
        case 'DECREMENT':
            return {count:state.count-1};
        case 'INCREMENTIFODD':
            return {count:(state.count % 2 == 0) ? (state.count+1):state.count};
        default:
            return state;
    }
}


const  store = createStore(counter);

class App extends Component{

    constructor(props){
        super(props);
        this.state = {count:0};
    }

    componentWillMount(){
        store.subscribe(() =>{
            console.log(store.getState());
            this.setState(store.getState());
        });
    }

    getDefaultState(){
        return {count:0};
    }

    increase(){
        store.dispatch(actions.increment());
    }

    decrease(){
        store.dispatch(actions.decrement());
    }

    increaseIfOdd(){
        store.dispatch(actions.incrementIfOdd());
    }

    render(){
        return (
            <div>
                <button onClick={this.increase.bind(this)}>increment+</button><br/>
                <button onClick={this.decrease.bind(this)}>decrement-</button><br/>
                <button onClick={this.increaseIfOdd.bind(this)}>incrementIfOdd+</button><br/>
                <h3>{this.state.count}</h3>
            </div>);
    }
}



render(<App/>,document.getElementById('root'));

// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());




