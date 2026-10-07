import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { loadFonts } from './fonts.js'

loadFonts()

createRoot(document.getElementById('root')).render(<App />)
