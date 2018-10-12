import React from 'react'
import { Link } from 'react-router-dom'

import './tool-card.scss'

const ToolCard = ({tool, deleteOnClick}) => (
  <li className="tool-card card">
    <div className="card-media">
      <img src="https://image.shutterstock.com/z/stock-photo-software-developer-programming-code-abstract-computer-script-code-programming-code-screen-of-531885736.jpg"/>
    </div>
    <div className="card-content">
      <h3>{tool.title}</h3>
      <p>{tool.description}</p>
    </div>
    <div className="card-actions">
    <button onClick={deleteOnClick}>Delete</button>
    <Link to={`tools/${tool.id}`}>Détails</Link>
    </div>
  </li>
)

export default ToolCard