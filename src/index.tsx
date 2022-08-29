import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Product} from "./components/Product";
import {products} from "./data/product";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App/>
)
;

