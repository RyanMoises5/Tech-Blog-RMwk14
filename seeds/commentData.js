const { Comment } = require('../models/');

const commentData = [
  {
    text: "Seeded Comment Test 1. I love apples.",
    userId: "1",
    postId: "1"
  },
  {
    text: "Seeded Comment Test 2. How many donuts should I eat?",
    userId: "2",
    postId: "2"
  }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;