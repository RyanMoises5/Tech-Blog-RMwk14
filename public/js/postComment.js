const commentFormHandler = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    e.preventDefault();
    const postId = e.target.getAttribute('data-id');
    const comment = document.querySelector('#comment-text').value.trim();
  
    console.log(postId, comment);
  
    const response = await fetch('/api/comment/post', {
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

document 
  .querySelector('.comment-button')
  .addEventListener('click', commentFormHandler)