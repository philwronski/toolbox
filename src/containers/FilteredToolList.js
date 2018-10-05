import React from 'react'
import { connect } from 'react-redux'
import { ToolList } from '../components/tools'

const mapStateToProps = state => ({
  tools: state.tools.items
})

export default connect(mapStateToProps)(ToolList)