/**
 * Created by haibao on 2016/9/29.
 */
import React,{Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component{


    render(){
        const {todos,onToggleClick}  = this.props;
        console.log("todos= "+JSON.stringify(todos));
        return (
            <ul>
                {todos.map((todo,index)=>
                    <Todo key={index} {...todo} onClick={(e)=>{onToggleClick(index)}}/>
                )}
            </ul>
        )
    }
}