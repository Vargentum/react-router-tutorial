import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Repos List</h1>
        <NavLink to="/">Back</NavLink>
        {
          // <NavLink to="/about">Back</NavLink> All parent routes available in children
        }
        <ul>
          <li><Link to="/repo/Foo/Test">Test by Foo</Link></li>
          <li><Link to="/repo/Boo/Rest">Rest by Boo</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})