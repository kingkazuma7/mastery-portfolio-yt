import React from 'react'
import "./Navbar.scss";
import { images } from "../../constants"

const Navbar = () => {
  console.log(images);
  return (
    <div>
      <img src={images.logo} alt="logo" />
    </div>
  )
}

export default Navbar
