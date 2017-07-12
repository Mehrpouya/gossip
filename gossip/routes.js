const Router = require('express').Router;
const router = new Router();

const gossipCollection = require('./model/gossip-collection/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to gossip API!' });
});

router.use('/gossip-collection', gossipCollection);

module.exports = router;
