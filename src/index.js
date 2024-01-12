import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'
import { HashRouter } from "react-router-dom"

// HashRouter note:
// When using client-side routing in a React app with react-router-dom and hosting the app on AWS S3 as a static website,
// you'll need to handle the 404 errors that occur when users refresh the page or directly access a specific route.
// This is because S3, being a static file server, doesn't inherently understand client-side routing.
// Using HashRouter appends a # to the URLs, and this part of the URL is not sent to the server, making it compatible
// with static hosting solutions like AWS S3.

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
