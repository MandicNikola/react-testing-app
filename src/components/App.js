import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component {
  renderButton = () => {
    const { auth, changeAuth } = this.props;
    return auth ? (
      <button onClick={() => changeAuth(!auth)}>Sign Out</button>
    ) : (
      <button onClick={() => changeAuth(!auth)}>Sign in</button>
    );
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(App);
