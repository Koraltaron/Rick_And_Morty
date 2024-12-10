import { createRoot } from 'react-dom/client'
import router from './router.tsx'
import "./styles/globals.css"
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './context/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>  
);
