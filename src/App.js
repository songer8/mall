import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";


import './App.css';
import Detail from './detail/Detail';
import ShoppingCart from './shoppingCart/ShoppingCart';

export default function App(props) {
  return (
    <Router>
          <Route path="/detail" component={Detail} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Redirect to="/detail" /> 
          {/* 全部不命中的话，重定向至/detail； */}
    </Router>
  )
}