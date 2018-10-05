import { createReducer } from './utils'
import { actionsTypes } from '../actions/tools'

const initialState = {
  nextToolId: 0,
  items: []
}

const addTool = (state, action) => {
  const {items, nextToolId, ...other} = state
  return {
    ...other,
    nextToolId: nextToolId+1,
    items : [...items, {id: nextToolId, ...action.tool}]
  }
}

const deleteTool = (state, action) => {
  const {items, ...other} = state
  return {
    ...other,
    items : items.filter(tool => tool.id !== action.id)
  }
}

const tools = createReducer(initialState, {
  [actionsTypes.ADD_TOOL]: addTool,
  [actionsTypes.DELETE_TOOL]: deleteTool,
})

export default tools