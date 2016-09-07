/**
 * Created by haibao on 2016/8/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// var child = React.createElement('li',{alt:'Hello I am a Li'},'Jack Ma');
// var root1 = React.createElement('ul',null,child);
var root1 = React.DOM.ul({ className: 'my-list' }, React.DOM.li({alt:'Hello I am a Li!'}, 'Text Content'));

ReactDOM.render(root1,document.getElementById('root'));