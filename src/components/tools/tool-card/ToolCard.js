import React from 'react'
import { Tool } from '..'

const ToolCard = ({tool, deleteOnClick}) => (
  <li className="tool-card">
    <Tool
      key={tool.id} 
      tool={tool}
      deleteOnClick={() => deleteOnClick(tool.id)}
    />
  </li>
)

export default ToolCard