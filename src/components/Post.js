import React, { Component } from 'react';
import { connect } from 'react-redux';

const Post = (props) => {
  return (
    props.post ? (
        <div className="container">
            <div className="post">
                <h4 className="center">{ props.post.title}</h4>
                <p>{ props.post.body }</p>
            </div> 
        </div>
    ) : (
        <div className="center">Loading post ...</div>
    )
  );
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id == id)
    }
}

export default connect(mapStateToProps)(Post);
