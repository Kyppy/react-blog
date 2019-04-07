import React from 'react';

const Post = props => (
  <div className="post card" key={props.id}>
    <div className="card-content">
      <span className="card-title">{ props.title }</span>
      <p>{ props.body }</p>
    </div>

  </div>
);

export default Post;
