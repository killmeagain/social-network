
import './scss/main.scss'
import store from './redux/store'
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = { store }>
                <App /> 
            </Provider>
        </BrowserRouter>
        , document.querySelector("#root"));
}

rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store);
});