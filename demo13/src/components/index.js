/**
 * Created by haibao on 2016/9/29.
 */
import React,{Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';


class BaseApp extends  Component{

    render(){
        const {onAddClick,todos,onToggleClick} = this.props;
        console.log(typeof onAddClick);
        return (
            <div>
                <AddTodo onAddClick={onAddClick}/>
                <TodoList todos={todos} onToggleClick={onToggleClick}/>
                <Footer />
            </div>
        )
    }
}

export default BaseApp;