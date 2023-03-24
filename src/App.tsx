import { Home } from "./pages/Home"
import './App.css'
import { Navbar } from "./components/Navbar"
import { Post } from "./pages/Post"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
