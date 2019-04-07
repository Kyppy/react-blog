import React, { Component } from 'react';
import axios from 'axios';
import PostItemCard from './PostItemCard';

class Home extends Component {

  state = {
      posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
            posts: res.data.slice(0, 10) 
        })
    });
  };
  
  render() {
    
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        { this.state.posts.length ? (
            this.state.posts.map( post => 
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
    );
  }
};

export default Home;
