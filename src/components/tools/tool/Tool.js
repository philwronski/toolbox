import React, { Component } from 'react'

const Tool = ({tool}) => (
  <li className="tool">
    <h3>{tool.title}</h3>
    <p>{tool.description}</p>
  </li>
)

export default Tool