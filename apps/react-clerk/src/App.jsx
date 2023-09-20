import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1>Clerk + React</h1>
        <img src={logo} alt="logo" />
        <a
          href="https://docs.clerk.dev/reference/clerk-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
        <Link to="/fetch">Fetch Example</Link>
      </div>
    </>
  );
}

export default App;

import { useAuth } from '@clerk/clerk-react'
import * as React from 'react'

export const Fetch = () => {
  const [data, setData] = React.useState({})
  const { sessionId, getToken } = useAuth()

  const payload = JSON.stringify({ sessionId: sessionId })

  const handleFetch = async () => {
    await fetch(`http://localhost:8081/protected`, {
      method: 'POST',
      headers: new Headers({
        'Authorization': `Bearer ${await getToken()}`,
        'Content-Type': 'application/json'
      }),
      body: payload
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setData(data)
    })
  }


  return (
    <>
      <div>
        <button onClick={() => handleFetch()}>
          Send Fetch
        </button>

      </div>
      <div style={{ color: 'white' }}>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </>
  )
}



