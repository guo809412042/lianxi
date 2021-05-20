import React, { Component } from 'react'
import { connect } from 'umi';
class Uu extends Component<any> {
  render() {
    const { userdemo } = this.props
    console.log(userdemo)
    return (
      <div>
        ad
      </div>
    )
  }
}

export default connect(store => store)(Uu);