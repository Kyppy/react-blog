import React, { Component } from 'react';
import PostItemCard from './PostItemCard';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        { props.posts.length ? (
            props.posts.map( post => 
                <PostItemCard
                    title={ post.title }
                    body= { post.body }
                    key={ post.id }
                    id={ post.id}
                />
            )
         ) : (
            <div className="center">No posts yet! Loading...</div>
         )}
      </div>
    )
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
