import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='navigation__section'>
      <NavLink to='/exampleOne'>
        <button>ExampleOne</button>
      </NavLink>
      <NavLink to='exampleTwo'>
        <button>ExampleTwo</button>
      </NavLink>      
    </div>
  )
} 

export default Navigation