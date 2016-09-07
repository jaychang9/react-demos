import React,{Component} from 'react';
import './GeroceryList.css';

export  default  class GeroceryList extends Component{
    constructor(props) {
        super(props);
    }


    handleClick(i){
        alert("you click "+this.props.items[i]);
    }

    defaultProps (){
        return {items:[]};
    }

    render(){
        return (
            <div >{
                        this.props.items.map((item, i) => {
                            return (
                                <div className="gerocery_list" onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
                            );
                        })
                }
            </div>
        );
    }
}