import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToolList } from 'src/components/tools'
import { deleteTool, fetchTools } from 'src/actions/tools'

class FilteredToolList extends Component {

  componentDidMount() {
    const { fetchTools } = this.props
    fetchTools()
  }

  render() {
    const { tools, deleteToolOnClick } = this.props

    return (
      <ToolList tools={tools} deleteToolOnClick={deleteToolOnClick} />
    )
  }

}

const mapStateToProps = state => ({
  tools: state.tools.items
})

const mapDispatchToProps = dispatch => ({
  deleteToolOnClick: id => dispatch(deleteTool(id)),
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredToolList)