import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import students from '../mocks/students';

ReactDOM.render(
  <Root students={students} />,
  document.getElementById('root')
);
