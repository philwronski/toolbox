import { createAction } from './utils'
import { getTools, findTools, isLoadingTool } from 'src/selectors/tools'

export const actionsTypes = {
  ADD_TOOL: 'ADD_TOOL',
  EDIT_TOOL: 'EDIT_TOOL',
  FILTER_TOOL: 'FILTER_TOOL',
  DELETE_TOOL: 'DELETE_TOOL',
  FETCH_TOOLS: 'FETCH_TOOLS',
  IS_LOADING_TOOLS: 'IS_LOADING_TOOLS',
  RECEIVE_TOOLS: 'RECEIVE_TOOLS'
}

const fetchTools = () => async (dispatch) => {
  dispatch(isLoadingTools(true))
  const tools = await getTools()
  if(tools) {
    await dispatch(reveiveTools(tools))
    dispatch(isLoadingTools(false))
  }
}

const shouldFetchTools = (state) => {
  const items = findTools(state)
  console.log(items, !!items)
  if (!!items) {
    return true
  } else if (isLoadingTool(state)) {
    return false
  } else {
    return false
  }
}

export const fetchToolsIdNeeded = () => async (dispatch, getState) => {
  if(shouldFetchTools(getState())) {
    return dispatch(fetchTools())
  } else {
    return Promise.resolve()
  }
}

export const addTool = createAction(actionsTypes.ADD_TOOL, 'tool')
export const filterTool = createAction(actionsTypes.FILTER_TOOL, 'filter')
export const editTool = createAction(actionsTypes.EDIT_TOOL, 'tool')
export const deleteTool = createAction(actionsTypes.DELETE_TOOL, 'id')
export const isLoadingTools = createAction(actionsTypes.IS_LOADING_TOOLS, 'isLoading')
export const reveiveTools = createAction(actionsTypes.RECEIVE_TOOLS, 'tools')
