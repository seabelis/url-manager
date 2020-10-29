import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name:event.target.name,
      value: event.target.value,
    })
  }

  return (
    <div className="wrapper">
      <h1>URL Manager</h1>
      {submitting && 
        <div>Submitting Form...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>URL</p>
            <input name="url" onChange={handleChange} value={formData.url} />
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

export default App;