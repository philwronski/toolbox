import React from 'react'
import { Route } from 'react-router-dom'
import { FilteredToolList, AddTool, ToolDetails } from 'src/containers'

const Tools = ({}) => (
  <div>
    <AddTool />
    <Route exact path="/tools" component={FilteredToolList} />
    <Route path="/tools/:id" component={ToolDetails} />
  </div>  
)

export default Tools