import { useState } from 'react';
import './App.css';

function App() {
const [age, setAge] = useState(0)
const [upper, setUpper] = useState(0)
const [lower, setLower] = useState(0)

function laske(e){
  e.preventDefault()
  const tulos1 = (220 - age) * 0.85
  const tulos2 = (220 - age) * 0.65
  setUpper(tulos1)
  setLower(tulos2)
}

  return (
    <div id="content">
      <h3>BMI</h3>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
          <input value={age} onChange={e => setAge(e.target.value)}/>
          </div>
          <div>
          <label>Heart rate limits</label>
          <output>{lower.toFixed(1)}-{upper.toFixed(1)}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
