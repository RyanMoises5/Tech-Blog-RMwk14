const { Comment } = require('../models/');

const commentData = [
  {
    text: "Comment Test 1",
    userId: "1",
    postId: "1"
  },
  {
    text: "Comment Test 2",
    userId: "2",
    postId: "2"
  }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;