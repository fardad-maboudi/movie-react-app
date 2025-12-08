// App.js (Parent Component)
import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function App() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (commentText) => {
    const newComment = {
      id: Date.now(), // Simple unique ID
      text: commentText,
      author: 'Anonymous', // Or get from user input
      timestamp: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Comments</h1>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;


// CommentForm.js
import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(commentText);
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default CommentForm;

// CommentList.js
import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;

// Comment.js
import React from 'react';

function Comment({ comment }) {
  return (
    <div>
      <p>{comment.text}</p>
      <small>By {comment.author} on {comment.timestamp}</small>
    </div>
  );
}

export default Comment;