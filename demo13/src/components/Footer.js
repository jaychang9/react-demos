/**
 * Created by haibao on 2016/9/29.
 */
import React,{Component} from 'react';


export default class Footer extends Component{

    renderFilter(filter){
        if(filter === this.props.filter){
            return filter;
        }else{
            return (
                <a onClick={onFilterChange(filter)}>{filter}</a>
            )
        }
    }

    render(){
        return (
            <div>

                SHOW:
                {' '}
                {this.renderFilter()}
                {','}
                {this.renderFilter()}
                {','}
                {this.renderFilter()}
            </div>
        )
    }
}