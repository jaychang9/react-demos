/**
 * Created by haibao on 2016/10/5.
 */
import React,{Component} from 'react';


class Link extends Component{

    render(){
        const {onFilterChange,filter,name} = this.props;
        return (
            <div>
              <a onClick={(e)=>{alert(filter);onFilterChange(filter)}} href="#">
                  {name}
              </a>
           </div>
        );
    }
}

export default Link;