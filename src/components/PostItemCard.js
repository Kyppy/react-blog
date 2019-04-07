import React from 'react';
import { Link } from 'react-router-dom';


const PostItemCard = props => (
  <div className="post card" key={props.id}>
    <div className="card-content">
      <Link to={'/posts/' + props.id}>
        <span className="card-title">{ props.title }</span>
      </Link>
      <p>{ props.body }</p>
    </div>

  </div>
);

export default PostItemCard;
