/**
 * Created by haibao on 2016/9/29.
 */
import React,{Component} from 'react';
import Link from './Link';

export default class Footer extends Component{

    componentWillMount(){
        const {onFilterChange,filter} = this.props;
        console.log("Footer","componentWillMount");
        console.log("Footer",onFilterChange);
        console.log("Footer",filter);
    }

    render(){
        const {onFilterChange,filter} = this.props;
        return (
            <div>
                SHOW:
                {' '}
                <Link onFilterChange={onFilterChange} filter="SHOW_ALL" name="ALL"/>
                {','}
                <Link onFilterChange={onFilterChange} filter="SHOW_ACTIVE" name="ACTIVE"/>
                {','}
                <Link onFilterChange={onFilterChange} filter="SHOW_COMPLETE" name="COMPLETE"/>
            </div>
        )
    }
}