/**
 * Permet de créer une action redux d'un type donnée en précisant les parametres attendues.
 * 
 * ex: const addTool = createAction('ADD_TOOL', 'tool')
*      addTool({title: 'myTool'})
 * 
 * @param {string} type 
 * @param {string} argNames 
 */
export const createAction = (type, ...argNames) => {
  // On utilise le currying pour passer les valeurs des parametres attendues.
  return (...args) => {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}