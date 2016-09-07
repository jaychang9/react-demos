import React,{Component} from 'react';
import Profile from './Profile';
import ProfileLink from './ProfileLink';
import './Avatar.css';

export  default  class  Avatar extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (<div><Profile/><ProfileLink/></div>);
    }


}

