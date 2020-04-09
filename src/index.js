
import './scss/main.scss'
import store from './redux/store'
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'


let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={ state} dispatch={ store.dispatch.bind(store) } /> , document.querySelector("#root"));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});