import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'store/qc'

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)

