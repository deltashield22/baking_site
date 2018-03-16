import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout.component';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
        , document.getElementById('root'));
