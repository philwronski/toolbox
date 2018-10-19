export const getTools = async () => {
  const stateTools = JSON.parse(localStorage.getItem('tools'))
  if(stateTools) {
    return stateTools.items
  }
  return []
}

export const saveTool = async (tool) => {
  const stateTools = JSON.parse(localStorage.getItem('tools'))
  if(stateTools) {
    stateTools.items = [...stateTools.items, tool]
    localStorage.setItem('tools', JSON.stringify(stateTools))
  } else {
    throw new Error('saveTool - not working')
  }

  return tool;
}