import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from 'react-conflux'
import { smurfReducer } from './store/reducer/smurfReducer'
import { smurfContext } from './store/contexts/smurfContext'
import "./index.css";
import App from "./components/App";




ReactDOM.render(
    <StateProvider reducer={smurfReducer} stateContext={smurfContext}>
        <App />
    </StateProvider>
    , document.getElementById("root"));
