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
