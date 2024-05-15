import { useState } from 'react'
import SignIn from './components/SignIn'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-50">
      <SignIn />
    </div>
  )
}

export default App
