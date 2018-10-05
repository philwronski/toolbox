import React from 'react'
import { connect } from 'react-redux'
import { addTool } from '../actions/tools'

const AddTool = ({ dispatch }) => {
  let title
  let description

  const onSubmit = e => {
    e.preventDefault()
    if (!title.value.trim() || !description.value.trim()) {
      return
    }
    dispatch(addTool({title: title.value, description: description.value}))
    title.value = ''
    description.value = ''
  }

  return (
    <form
      onSubmit={onSubmit}>
      <input ref={node => (title = node)} />
      <textarea ref={node => (description = node)} />
      <button type="submit">Add Tool</button>
    </form>
  )
}

export default connect()(AddTool)
