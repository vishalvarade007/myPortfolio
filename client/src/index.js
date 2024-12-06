import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { store } from "./Store";
import {Provider as AlertProvider, positions, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position:positions.BOTTOM_CENTER,
  timeout:5000,
  transition:transitions.SCALE
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
        <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...options}>
             <App/>
          </AlertProvider>
        </Provider>
);

reportWebVitals();
