import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Start extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  jump = () => {
    console.log(123)
    this.context.router.history.push('/clothes')
  }
  render() {
    return <div className='start-page'>
      <div className="start-page-button"
        onClick={this.jump}
      ></div>
    </div>
  }
}