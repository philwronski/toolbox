export const getTools = async () => {
  const stateTools = JSON.parse(localStorage.getItem('tools'))
  if(stateTools) {
    return stateTools.items
  }
  return []
}

export const findTools = state => state.tools.items

export const isLoadingTool = state => state.tools.isLoading

export const findById = (state, id) => findTools(state).find(i => i.id == id)