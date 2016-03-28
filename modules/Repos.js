import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Repos List</h1>
        <ul>
        <li><Link to="/repo/Foo/Test">Test by Foo</Link></li>
        <li><Link to="/repo/Boo/Rest">Rest by Boo</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})