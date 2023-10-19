import React from 'react'
import {useNavigate } from 'react-router-dom'
import '../App.css';
// import Home from './Home'

export default function Header() {
    const navigate= useNavigate()
    function go(event){
        if (event.target.value==="home"){
            navigate("/")}
        if (event.target.value==="about"){
                navigate("/about")}
        if (event.target.value==="contact"){
                navigate("/contacts")}
        }
  return (
    <div>
      <nav>
                <button onClick={go} value="home">Home</button>
                <button onClick={go} value="about">About</button>
                <button onClick={go} value="contact">Contact</button>
      </nav>
    </div>
  )
  }