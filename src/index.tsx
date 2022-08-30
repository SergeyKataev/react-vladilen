import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Product} from "./components/Product";
import {products} from "./data/product";
import {ModalState} from "./context/ModalContex";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <ModalState>
            <App/>
        </ModalState>
    </BrowserRouter>

)
;

