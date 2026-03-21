import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [postcode, setPostcode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/results', {
      state: {
        name: name.trim(),
        postcode: postcode.trim(),
      },
    })
  }

  return (
    <main style={{ maxWidth: 720, margin: '40px auto', padding: '0 20px' }}>
      <h1>FindMyJabs</h1>
      <p>Fill in the form, then continue to the next page.</p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14, marginTop: 24 }}>
        <label htmlFor="name" style={{ display: 'grid', gap: 6 }}>
          Name
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Jane Doe"
            required
            style={{ padding: 10 }}
          />
        </label>

        <label htmlFor="postcode" style={{ display: 'grid', gap: 6 }}>
          Postcode
          <input
            id="postcode"
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            placeholder="SW1A 1AA"
            required
            style={{ padding: 10 }}
          />
        </label>

        <button type="submit" style={{ width: 160, padding: '10px 14px' }}>
          Continue
        </button>
      </form>
    </main>
  )
}

export default FormPage
