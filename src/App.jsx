import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenitcate'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);


  return (
    <>
      <div>
      </div>
    <div className="card">
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
     
      </div>
     
    </>
  )
}




export default App

