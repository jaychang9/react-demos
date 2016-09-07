import React from 'react';
import ReactDOM from 'react-dom';
import  './style.css';
const arr = [<h1>H1</h1>,<h2>h2</h2>,<h3>h3</h3>];
const HelloMessage = (props) => <div> Hello {props.name}<div>{arr}</div></div>;

ReactDOM.render(<HelloMessage name="Jay Chang1"/>,document.getElementById('root'));