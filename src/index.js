import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'typeface-roboto';
import App from './component/App.jsx';
import store from "./containers/store";


    render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );


