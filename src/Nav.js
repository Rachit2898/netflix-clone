import React, {useState, useEffect} from "react";
import "./Nav.css";
import logo from "./images/logo.jpeg";
import loginLogo from "./images/loginLogo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
const [show, handleShow]=useState(false)
const history = useNavigate();

const transitionBar=()=>{
  if(window.scrollY>100){
    handleShow(true);
  }else{
    handleShow(false);
  }
};

useEffect(()=>{
  window.addEventListener("scroll",transitionBar);
  return()=>window.removeEventListener("scroll",transitionBar)
},[])

  return (
    <div className={`nav ${ show && 'nav_black'}`}>
      <div className="nav__contents">
        <img   onClick ={()=>history("/")} className="nav__logo" src={logo} />
        <img 
        onClick ={()=>history("/profile")} 
        className="nav__avtar" src={loginLogo} />
      </div>
    </div>
  );
}

export default Nav;
