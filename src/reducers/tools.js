import { createReducer } from './utils'
import { actionsTypes } from 'src/actions/tools'
import { uuidv4 } from 'src/utils'

const initialState = {
  isLoading: false,
  items: []
}

const addTool = (state, action) => {
  const { items } = state
  return {
    ...state,
    items : [...items, {id: uuidv4(), ...action.tool}]
  }
}

const deleteTool = (state, action) => {
  const { items } = state
  return {
    ...state,
    items : items.filter(tool => tool.id !== action.id)
  }
}

const receiveTools = (state, action) => {
  const { items } = state
  return {
    ...state,
    items: items.concat(action.tools)
  }
}

const isLoading = (state, action) => ({
  ...state,
  isLoading: action.isLoading
})

const tools = createReducer(initialState, {
  [actionsTypes.ADD_TOOL]: addTool,
  [actionsTypes.DELETE_TOOL]: deleteTool,
  [actionsTypes.RECEIVE_TOOLS]: receiveTools,
  [actionsTypes.IS_LOADING_TOOLS]: isLoading,
})

export default tools