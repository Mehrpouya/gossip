const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args));

router.route('/search-gossip-titles')
    .get((...args) => controller.findByTitle(...args));

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));
// TODO:add this solution in order to be able to push to the comments array.
//https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose 
module.exports = router;
