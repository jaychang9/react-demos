import React,{Component} from 'react';
import {render} from 'react-dom';
import style from './LinkedButton.css';


export  default  class  LinkedButton extends Component{
    constructor(props){
        super(props);
        this.state = {liked:false,count:100};
    }

    handleClick(e){
        e.nativeEvent.stopImmediatePropagation();
        var count = this.state.count-1;
        this.setState({liked:!this.state.liked,count :count});
    }

    handleDivClick(e){
        alert("click div");
    }

    componentWillMount(){
        this.setState({liked:false});
        var count = 0;
        //模拟耗时操作
        for(var i = 0 ; i < 9999 ; i++){
            for(var j = 0 ; j < 9999 ; j++){
                if(i % 2 === 0 && j % 2 === 0){
                    count++;
                }
            }
        }
        console.log('componentWillMount '+new Date().getMilliseconds());

    }

    /**
     * 添加原生dom事件(不推荐)
     */
    componentDidMount(){
        console.log("componentDidMount "+new Date().getMilliseconds());
        //console.log(this._linkbutton.innerHTML);
        console.log(this.refs._linkbutton.innerHTML);
        document.getElementById('hello').addEventListener('click',function(e){
            //阻止事件冒泡到p元素
            e.stopPropagation();
            alert('span click');
        });
    }

    /**
     * 解除原生事件的绑定
     */
    componentWillUnmount(){
        console.log("componentWillUnmount "+new Date().getMilliseconds());
        document.getElementById('hello').removeEventListener('click');
    }

    render(){
        const text = this.state.liked ? 'like':'haven\'t liked XXXX aaassss SSSSS SSSS';
        const count = this.state.count;
        //return (<div onClick={this.handleDivClick.bind(this)} ref={(self) => this._linkbutton = self}><p onClick={this.handleClick.bind(this)}>
        return (<div onClick={this.handleDivClick.bind(this)} ref="_linkbutton"><p onClick={this.handleClick.bind(this)}>
            <span id="hello">Hello</span><br/>
            You {text} this. Click to toggle. Remain {count}
        </p></div>);
    }
}

