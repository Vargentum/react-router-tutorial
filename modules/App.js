import React from 'react'
import {IndexLink} from 'react-router'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
      <div>
        Navigation
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})

