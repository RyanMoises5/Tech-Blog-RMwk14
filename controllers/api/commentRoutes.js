const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

// localhost/api/comment/...

router.post('/post', withAuth, async (req, res) => {
  // req.body = { postId, comment }
  try {
    const newComment = await Comment.create({
      userId: req.session.user_id,
      postId: req.body.postId,
      text: req.body.comment
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
