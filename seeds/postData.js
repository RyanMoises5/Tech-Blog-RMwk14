const { Post } = require('../models/');

const postData = [
  {
    title: "Post Title 1",
    text: "Post Text 1",
    userId: "1"
  },
  {
    title: "Post Title 2",
    text: "Post Text 2",
    userId: "2"
  }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;