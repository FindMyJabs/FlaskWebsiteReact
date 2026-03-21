import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/api/technologies')
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()
        setTechnologies(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      }
    }

    loadTechnologies()
  }, [])

  return (
    <main style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
      <h1>Flask + React</h1>
      <p>React is reading data from your Flask backend via the /api proxy.</p>

      {error ? (
        <p style={{ color: 'crimson' }}>Error: {error}</p>
      ) : (
        <ul>
          {technologies.map((tech, index) => (
            <li key={`${tech.name}-${index}`} style={{ marginBottom: 12 }}>
              <strong>{tech.name}</strong>
              <br />
              <span>{tech.description}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
