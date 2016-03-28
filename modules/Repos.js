import React from 'react'
import {browserHistory, Link} from 'react-router'
import NavLink from './NavLink'

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const user = ev.target.elements[0].value
    const repo = ev.target.elements[1].value
    const path = `/repo/${user}/${repo}`

    // browserHistory.push(path)  //way 1
    this.context.router.push(path)  //way 2
  },

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
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})