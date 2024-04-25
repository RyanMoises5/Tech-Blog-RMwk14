const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

// localhost/api/post/...

router.post('/new', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      text: req.body.text,
      userId: req.session.user_id
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;