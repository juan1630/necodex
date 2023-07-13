import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='container-fluid mt-5' >
      <App/>
    </main>
  </React.StrictMode>,
)
