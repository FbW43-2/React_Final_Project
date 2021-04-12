import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import './style.css'

import reducers from "./reducer";

import Menu from './components/menu';

//Connecting people with fun and entertainment

const App = () => {
    return (
        <div>
          <h1>hello</h1>
            <Menu/>
      
        </div>
    );
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
</Provider>, document.getElementById('root'))