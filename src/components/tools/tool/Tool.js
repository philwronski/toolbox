import React, { Component } from 'react'

export const Tool = ({tool}) => (
  <li className="tool">
    <h3>{tool.title}</h3>
    <p>{tool.description}</p>
  </li>
)