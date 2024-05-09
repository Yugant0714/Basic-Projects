import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addcount(){
    setCount(count+1)
  }
  function removecount(){
    setCount(count-1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter : {count}</h2>
      <button onClick={addcount}>Add</button>
      <br />
      <button onClick={removecount}>Remove</button>
    </>
  )
}

export default App
