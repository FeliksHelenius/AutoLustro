import { BrowserRouter, Routes, Route } from 'react-router'
import { StartPage } from './pages/StartPage'
import './App.css'

function OffertPlaceholder() {
  return (
    <div style={{ padding: '3rem 1.5rem', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', marginBottom: '0.5rem' }}>Offertformulär</h1>
      <p style={{ color: '#57534e' }}>Offertflödet med AI-bedömning kommer snart. Du kan redan nu kontakta oss via mejl eller telefon för en offert.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/offert" element={<OffertPlaceholder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
