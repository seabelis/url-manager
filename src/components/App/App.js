import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
    }, 3000)
  }

  return (
    <div className="wrapper">
      <h1>URL Manager</h1>
      {submitting && 
        <div>Submitting Form...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>URL</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;