import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import BookStore from './BookStore';
import NestedComponent from './NestedComponent';
//import FirstComponent from "./firstComponent";
//import SecondComponent from './secondComponent';

ReactDOM.render(
  <React.Fragment>
  <BookStore />
    </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
