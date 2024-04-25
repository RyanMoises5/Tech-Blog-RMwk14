const { Post } = require('../models/');

const postData = [
  {
    title: "Seeded Post Title 1.",
    text: "Seeded Post Text 1. Can you read this?",
    userId: "1"
  },
  {
    title: "Seeded Post Title 2",
    text: "Seeded Post Text 2. Are birds real?",
    userId: "2"
  }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;