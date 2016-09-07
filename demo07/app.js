import React,{Component} from 'react';
import {render} from 'react-dom';
import GeroceryList from './components/GeroceryList';



render(<GeroceryList items={['Apple','Google','Facebook']}/>,document.getElementById('root'));