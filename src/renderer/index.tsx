import React from 'react';
import ReactDOM from 'react-dom';
import RootElement from './Root';

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

ReactDOM.render(<RootElement />, rootEl);