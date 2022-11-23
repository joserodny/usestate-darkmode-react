import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);

 

  return (
    <div className="App"  style={{
          backgroundColor: isActive ? 'black' : '',
          color: isActive ? 'white' : '',
        }}>
     
      <div className="card">
        <button  onClick={() => setIsActive(true)} className='btn'> Dark Mode  </button>
        <button  onClick={() => setIsActive(false)} className='btn'> Light Mode </button>
      </div>
      
    </div>
  )
}

export default App
