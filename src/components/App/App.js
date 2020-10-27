import React from 'react';
import './App.css';

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('URL added for indexing.')
  }
  return (
    <div className="wrapper">
      <h1>URL Manager</h1>
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