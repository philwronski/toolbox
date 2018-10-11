import React, { Component } from 'react'

const Tool = ({tool, deleteOnClick}) => (
  <div className="tool">
    <h3>{tool.title}</h3>
    <p>{tool.description}</p>
    <button onClick={deleteOnClick}>Delete</button>
  </div>
)

export default Tool