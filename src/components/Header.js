import React from 'react'
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

function Header() {
  return (
    <nav>
      <h1>TECHYSTAR</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink> {/* // click karenge toh scroll hoke about wale pe aa jayega isliye we use #about */}
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  )
}

export default Header