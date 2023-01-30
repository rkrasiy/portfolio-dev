import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import NoPage from './pages/no-page';
import Layout from './pages/layout';
import reportWebVitals from './reportWebVitals';


import MouseMeteor from './pages/mouse-meteor';
import Bubble from './pages/bubble';
import Text from './pages/text';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Bubble />} />
                    <Route path="/mouse-meteor" element={<MouseMeteor />} />
                    <Route path="/bubble" element={<Bubble />} />
                    <Route path="/text" element={<Text />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
