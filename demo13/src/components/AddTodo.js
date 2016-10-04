/**
 * Created by haibao on 2016/9/29.
 */
import React,{Component} from 'react';
import addTodo from '../actions/addTodo'

export default class AddTodo extends Component{

    render(){
        const {onAddClick} = this.props;
        return(
            <div>
                <input type="text" ref="text"/>
                <button onClick={(e)=>{onAddClick(this.refs.text.value);this.refs.text.value = '';}}>Add</button>
            </div>
        )
    }
}