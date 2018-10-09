import React, { Component } from 'react'
import { Tool } from '..'

import './tool-list.scss'

const ToolList = ({tools, deleteToolOnClick}) => {
  return (
  <ul className="tool-list">
    {tools.map(tool => 
      <Tool 
        key={tool.id} 
        tool={tool}
        deleteOnClick={() => deleteToolOnClick(tool.id)}
      />
    )}
  </ul>
)
}

export default ToolList