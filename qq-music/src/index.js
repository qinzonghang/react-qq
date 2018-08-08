import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import Store from './redux/store.js'

let render=()=> ReactDOM.render(<App />, document.getElementById('root'));

render()

Store.subscribe(render)

