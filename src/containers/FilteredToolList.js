import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToolList } from 'src/components/tools'
import { deleteTool, fetchToolsIdNeeded } from 'src/actions/tools'

class FilteredToolList extends Component {

  componentDidMount() {
    const { fetchTools } = this.props
    fetchTools()
  }

  render() {
    const { tools, deleteToolOnClick, isLoading } = this.props

    return (
      <>
        {isLoading && <p>Loading</p>}
        <ToolList tools={tools} deleteToolOnClick={deleteToolOnClick} />
      </>
    )
  }

}

const mapStateToProps = state => ({
  tools: state.tools.items,
  isLoading: state.tools.isLoading
})

const mapDispatchToProps = dispatch => ({
  deleteToolOnClick: id => dispatch(deleteTool(id)),
  fetchTools: () => dispatch(fetchToolsIdNeeded())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredToolList)