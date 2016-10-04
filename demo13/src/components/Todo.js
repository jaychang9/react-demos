/**
 * Created by haibao on 2016/9/29.
 */
import React,{Component,PropTypes} from 'react';


export default class Todo extends Component{

    render(){
        return (
            <li onClick={this.props.onClick} style={{
                textDecoration:this.props.completed ? 'line-through':'none'
            }}>
                {this.props.text}
            </li>
        )
    }
}

Todo.PropTypes = {
    text:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    completed:PropTypes.bool.isRequired
}

