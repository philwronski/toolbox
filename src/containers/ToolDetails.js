import React from 'react'
import { connect } from 'react-redux'
import { Tool } from 'src/components/tools'
import { findById } from 'src/selectors/tools'

const mapStateToProps = (state, ownProps) => ({
  tool: findById(state, ownProps.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  deleteToolOnClick: id => dispatch(deleteTool(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tool)