import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>URL Manager</h1>
      <form>
        <fieldset>
          <label>
            <p>URL</p>
            <input name="name" />
          </label>
        </fieldset>
      </form>
    </div>
  )
}

export default App;