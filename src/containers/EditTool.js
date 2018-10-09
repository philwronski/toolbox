import React from 'react'
import { connect } from 'react-redux'
import { editTool } from '../actions/tools'

const EditTool = ({ dispatch, tool }) => {
  let title
  let description

  const onSubmit = e => {
    e.preventDefault()
    if (!title.value.trim() || !description.value.trim()) {
      return
    }
    dispatch(editTool({id: tool.id, title: title.value, description: description.value}))
    title.value = ''
    description.value = ''
  }

  return (
    <form
      onSubmit={onSubmit}>
      <input ref={node => (title = node)} value={tool.title}/>
      <textarea ref={node => (description = node)}>{tool.description}</textarea>
      <button type="submit">Save</button>
    </form>
  )
}

export default connect()(EditTool)
