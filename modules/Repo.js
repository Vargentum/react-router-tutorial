import React, {PropTypes} from 'react';

class Repos extends React.Component {
  render() {
    const {
      params: {repoName, userName}
    } = this.props

    return (
      <div>
        <h2>Repo: {repoName}</h2>
        <h3>Author: {userName}</h3>
      </div>
    )
  }
}

export default Repos