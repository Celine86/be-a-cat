import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 // <React.StrictMode>
    <App />
  //</React.StrictMode>,
)
