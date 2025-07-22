import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button text="Botón 1" />
    <Button text="Botón 2" />
    <Button text="Botón 3" />
  </StrictMode>,
)
