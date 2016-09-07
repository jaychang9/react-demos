import React,{Component} from 'react';
import './ProfileLink.css';

export default  class ProfileLink extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (<div className="profile_link"><a href="http://jaychang.iteye.com">Person Profile Detail</a></div>);
    }
}