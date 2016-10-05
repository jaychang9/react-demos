/**
 * Created by haibao on 2016/9/29.
 */
import React,{Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import setVisibilityFilter from '../actions/setVisibilityFilter';

class BaseApp extends  Component{

    componentWillMount(){
        console.log("BaseApp","componentWillMount");
    }

    render(){
        const {onAddClick,todos,onToggleClick,visibilityFilter,onFilterChange} = this.props;
        console.log("BaseApp render the visibilityFilter is ",visibilityFilter);
        console.log(typeof onAddClick);
        return (
            <div>
                <AddTodo onAddClick={onAddClick}/>
                <TodoList todos={todos} onToggleClick={onToggleClick}/>
                <Footer filter={visibilityFilter} onFilterChange={onFilterChange}/>
            </div>
        )
    }
}

export default BaseApp;