import { createAction } from './utils'
import { getTools, saveTool as _saveTool } from 'src/api/tools'
import { findTools, isLoadingTool } from 'src/selectors/tools'
import { uuidv4 } from 'src/utils'

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
  if (!items || items.length == 0) {
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

export const saveTool = (tool, refresh) => async (dispatch) => {
  tool['id'] = uuidv4()
  await dispatch(addTool(tool))
  await _saveTool(tool)
  if(refresh) {
    dispatch(fetchTools())
  }
}

export const addTool = createAction(actionsTypes.ADD_TOOL, 'tool')
export const filterTool = createAction(actionsTypes.FILTER_TOOL, 'filter')
export const editTool = createAction(actionsTypes.EDIT_TOOL, 'tool')
export const deleteTool = createAction(actionsTypes.DELETE_TOOL, 'id')
export const isLoadingTools = createAction(actionsTypes.IS_LOADING_TOOLS, 'isLoading')
export const reveiveTools = createAction(actionsTypes.RECEIVE_TOOLS, 'tools')
