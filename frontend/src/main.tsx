import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
export const BASE_URL = 'http://localhost:3000'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);