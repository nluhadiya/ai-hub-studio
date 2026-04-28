import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error connecting to backend"))
  }, [])

  return (
    <div>
      <h1>AI Hub Studio</h1>
      <p>{message}</p>
    </div>
  )
}

export default App