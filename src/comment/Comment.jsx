import React from 'react';

function Comment({ comment }) {
  return (
    <div className='comment-sec'>
      
      <h5>{comment.author}</h5>
      <p>{comment.text}</p>
      
      {/* <small>on {comment.timestamp}</small> */}
      <small>{comment.timestamp}</small>
    </div>
  );
}

export default Comment;