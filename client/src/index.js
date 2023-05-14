import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';


const domNode = document.getElementById('root');


const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);






