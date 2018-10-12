import React, { Component } from 'react'
import { ToolCard } from '..'

import './tool-list.scss'

const ToolList = ({tools, deleteToolOnClick}) => {
  return (
    <ul className="tool-list">
      {tools.map(tool => 
        <ToolCard 
          key={tool.id} 
          tool={tool}
          deleteOnClick={() => deleteToolOnClick(tool.id)}
        />
      )}
    </ul>
  )
}

export default ToolList