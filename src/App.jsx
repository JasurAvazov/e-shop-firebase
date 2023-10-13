import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

import "./App.scss"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
