export const findTools = state => state.tools.items

export const isLoadingTool = state => state.tools.isLoading

export const findById = (state, id) => findTools(state).find(i => i.id == id)