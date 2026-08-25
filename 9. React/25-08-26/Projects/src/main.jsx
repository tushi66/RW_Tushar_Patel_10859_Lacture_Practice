import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Hooks/Costumhook.jsx'
import { Provider } from 'react-redux'
import { store } from './Features/users/ProductSlice.jsx'
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <Provider store={store}>

    <StrictMode>
      <App />
    </StrictMode>,
    </Provider>

  </AuthProvider>
)
