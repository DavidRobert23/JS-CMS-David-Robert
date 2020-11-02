const express = require('express');
const mongodb = require('mongodb');
const db = require('../db');

const router = express.Router();

router.get('/posts', async (req, res) => {
  const posts = await db.posts.find().toArray();
  res.send(posts);
});
router.delete('/posts/:postId', async (req, res) => {
  const _id = new mongodb.ObjectID(req.params.postId);
  const { deletedCount } = await db.posts.deleteOne({ _id });
  if (deletedCount === 1) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});
// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

module.exports = router;
