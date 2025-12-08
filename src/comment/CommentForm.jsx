import React, { useState } from 'react';
import '../comment/commentCss.css'
import { form } from 'framer-motion/client';

function CommentForm({ onAddComment }) {
  const [commentText, setCommentText] = useState('');
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    console.log(e);
    
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(commentText, user);
      setCommentText('');
      setUser('');
    }
  };

  return (
    // <form onSubmit={handleSubmit} className='form-comment'>
    //   <textarea
    //   required
    //     value={commentText}
    //     onChange={(e) => setCommentText(e.target.value)}
    //     placeholder="Add a comment..."
    //   />
    //   <div className='user-btn'>
    //       <input required type="text" value={user} placeholder='username' onChange={(e) => setUser(e.target.value)}/>
    //   <button className='post-comment' type="submit">Post Comment</button>
    //   </div>
    // </form>

    <form onSubmit={handleSubmit} className='form-comment'>
      <div className='input-user'>
        <input required type="text" value={user} placeholder='username' onChange={(e) => setUser(e.target.value)}></input>
      </div>
      <textarea
      required
         value={commentText}
         onChange={(e) => setCommentText(e.target.value)}
         placeholder="Add a comment..."
       />
       <div className='user-btn'>
        <button className='post-comment' type="submit">Post Comment</button>
       </div>
    </form>
  );
}

export default CommentForm;