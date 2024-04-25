// Post new comment to post
const commentFormHandler = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    e.preventDefault();
    const postId = e.target.getAttribute('data-id');
    const comment = document.querySelector('#comment-text').value.trim();
  
    console.log(postId, comment);
  
    const response = await fetch('/api/comment/new', {
      method: 'POST',
      body: JSON.stringify({ postId, comment }),
      headers: { 'Content-Type': 'application/json' },
    })
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Error when posting comment");
    }
  }
}

// Delete post
const deletePost = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    e.preventDefault();
    const postId = e.target.getAttribute('data-id');
    
    const response = await fetch(`/api/post/delete/${postId}`, {
      method: 'DELETE'
    })
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("Error when deleting post");
    }
  }
}

// Update post
const updatePost = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    e.preventDefault();
    const postId = e.target.getAttribute('data-id');
    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-text').value.trim();

    console.log(postId, title, text)
    
    const response = await fetch(`/api/post/update/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, text }),
      headers: { 'Content-Type': 'application/json' },
    })
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("Error when deleting post");
    }
  }
}

document 
  .querySelector('.comment-button')
  .addEventListener('click', commentFormHandler)

document
  .querySelector('.delete-post-button')
  .addEventListener('click', deletePost)

document
  .querySelector('.update-post-button')
  .addEventListener('click', updatePost)