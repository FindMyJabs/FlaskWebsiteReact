import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FormPage from './pages/FormPage'
import ResultsPage from './pages/ResultsPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
