import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBlogPosts } from '../../../actions/blog';

class Blog extends Component {
  componentDidMount() {
    this.props.getBlogPosts();
  }

  componentWillReceiveProps(props) {
    console.log(JSON.stringify(props, null, 2));
  }

  render() {
    return (
      <div>
        <h2>hello, there!</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.blog;
};

const mapDispatchToProps = {
  getBlogPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);