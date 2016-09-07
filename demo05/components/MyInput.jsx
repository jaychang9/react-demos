import React,{Component} from 'react';
import './MyInput.css';

export  default  class  MyInput1 extends Component{
    constructor(props) {
        super(props);
        this.state = {userInput: 'xx'};
    }




    clearAndFocusInput(){
        // console.log('clearAndFocusInput');
        // this.refs.theInput.value="";
        // this.refs.theInput.focus();
        // this.state({userInput:''});
        console.log(this.state.userInput);
        this.setState({userInput:''},()=>{

            this.refs.theInput.focus();
        });
    }

    render(){
        return (<div style={{width:100}}>
            <div onClick={this.clearAndFocusInput.bind(this)}><p>Click to clear and focus</p></div><br/>
            <input type="text" size="100" onChange={(e) => this.setState({userInput:e.target.value})} ref="theInput"  value={this.state.userInput} />
        </div>);
    }
}

