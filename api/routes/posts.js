// routes/posts.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const router = express.Router();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Unauthorized' });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

router.post('/', authenticate, async (req, res) => {
  const { title, content } = req.body;
  try{
    const post = new Post({ title, content, authorId: req.userId });
    await post.save();
    res.status(201).send(post);
  }catch(e){
    res.status(500).send({ message: 'Internal Server Error' });

  }

});

router.get('/', async (req, res) => {
  const { author } = req.query;
  try{
    const posts = author ? await Post.find({ authorId: author }) : await Post.find();
    res.send(posts);
  }catch(e){
    res.status(500).send({ message: 'Internal Server Error' });
  }
  
});

module.exports = router;
