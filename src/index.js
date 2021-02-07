import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, compose} from "redux";
import App from './Components/App'
import 'antd/dist/antd.css';
import Reducers from './Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers());
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector("#root")
);