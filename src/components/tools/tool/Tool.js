import React, { Component } from 'react'

const Tool = ({tool, deleteOnClick}) => (
  <li className="tool">
    <h3>{tool.title}</h3>
    <p>{tool.description}</p>
    <button onClick={deleteOnClick}>Delete</button>
  </li>
)

export default Tool