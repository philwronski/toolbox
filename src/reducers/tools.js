import { createReducer } from './utils'
import { actionsTypes } from '../actions/tools'

const initialState = {
  tools: []
}

const addTool = (state = initialState, action) => {
  const {tools, ...other} = state
  const {tool, id} = action
  tool['id'] = id
  return {
    ...other,
    tools : tools.push(tool)
  }
}

const deleteTool = (state = initialState, action) => {
  const {tools, ...other} = state
  return {
    ...other,
    tools : tools.filter(tool => tool.id !== action.id)
  }
}

const tools = createReducer([], {
  [actionsTypes.ADD_TOOL]: addTool,
  [actionsTypes.DELETE_TOOL]: deleteTool,
})

export default tools