import React from 'react'
import { connect } from 'react-redux'
import { ToolList } from '../components/tools'
import { deleteTool } from '../actions/tools'

const mapStateToProps = state => ({
  tools: state.tools.items
})

const mapDispatchToProps = dispatch => ({
  deleteToolOnClick: id => dispatch(deleteTool(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolList)