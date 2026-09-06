import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contexts from './components/all-context/Contexts.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Contexts>
        <App />
    </Contexts>
    
    </BrowserRouter>
    
)
