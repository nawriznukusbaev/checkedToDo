import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CheckedToDo from "./checkedToDo";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
       <CheckedToDo/>
    </React.StrictMode>
);

reportWebVitals();
