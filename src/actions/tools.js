import { createAction } from './utils'

export const actionsTypes = {
  ADD_TOOL:'ADD_TOOL',
  EDIT_TOOL: 'EDIT_TOOL',
  FILTER_TOOL: 'FILTER_TOOL',
  DELETE_TOOL: 'DELETE_TOOL'
}

export const addTool = createAction(actionsTypes.ADD_TOOL, 'tool')
export const filterTool = createAction(actionsTypes.FILTER_TOOL, 'filter')
export const deleteTool = createAction(actionsTypes.DELETE_TOOL, 'id')
