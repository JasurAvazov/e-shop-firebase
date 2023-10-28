import { Link } from "react-router-dom"

import React from "react"

const Header = () => {
  return (
    <header>
      <Link to="/">Home1</Link>
      <Link to="/profile">Profile2</Link>
    </header>
  )
}

export default Header
