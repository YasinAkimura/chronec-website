import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/**
 * main.tsx should not render anything beside App.tsx 
 * Only configuration or global styles should be added here
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
