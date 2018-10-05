import React, { Component } from 'react'
import { Tool } from '..'

import './tool-list.scss'

const ToolList = ({tools}) => {
  return (
  <ul className="tool-list">
    {tools.map(tool => 
      <Tool 
        key={tool.id} 
        tool={tool}
      />
    )}
  </ul>
)
}

export default ToolList