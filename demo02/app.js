import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

var props = {};
props.foo = "foo1";
props.bar = "bar1";

console.log(props);


var component = <div {...props} foo={'foo2'}>{props.foo}Jay Chang</div>;

console.log(component.props);

ReactDOM.render(component,document.getElementById('root'));

