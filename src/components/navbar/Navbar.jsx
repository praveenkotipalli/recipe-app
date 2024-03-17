import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"
const Navbar = () => {

  const[show,setShow]=useState(false)

  const setUser=()=>{
    localStorage.removeItem("user");
  }
  const user=localStorage.getItem("user");
  const toggleMenu = () =>{
    setShow(!show);
  };

  return (
    <nav className="navWrapper">
    
      <Link to="/">
        <i> {"<ప్రveen's/>"} </i>
        <span>Recipe</span>
      </Link>
    
    <div className={show? "linkWrapper show" : "linkWrapper"}> 
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink onClick={setUser} to="login">{user?"Logout":"Login"}</NavLink>
    </div>
    <div className="burgerMenu" onClick={toggleMenu}>&#9776;</div>
    </nav>
  )
}

export default Navbar