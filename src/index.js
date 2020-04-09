
import './scss/main.scss'
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'


let rerenderEntireTree = () => {
    ReactDOM.render(<App state={ store.getState() } dispatch={ store.dispatch.bind(store) } /> , document.querySelector("#root"));
}

rerenderEntireTree();

store.subcribe(rerenderEntireTree);