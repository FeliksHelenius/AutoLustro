import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { Title3, Body1, Button } from '@fluentui/react-components'
import { DocumentTextRegular, HomeRegular } from '@fluentui/react-icons'
import { StartPage } from './pages/StartPage'
import './App.css'

function OffertPlaceholder() {
  return (
    <div className="offert-placeholder">
      <DocumentTextRegular className="offert-placeholder-icon" />
      <Title3 as="h1">Offertformulär</Title3>
      <Body1 block>
        Offertflödet med AI-bedömning kommer snart. Du kan redan nu kontakta oss via mejl eller telefon för en offert.
      </Body1>
      <Link to="/">
        <Button appearance="secondary" icon={<HomeRegular />}>
          Tillbaka till startsidan
        </Button>
      </Link>
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
