import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  renderComments = () => {
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  };

  render() {
    return (
      <div>
        <h4>Comments list</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({
  comments,
});

export default connect(mapStateToProps)(CommentList);
