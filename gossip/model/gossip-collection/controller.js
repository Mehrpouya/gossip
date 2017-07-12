const Controller = require('../../lib/controller');
const gossipCollectionFacade = require('./facade');

class GossipCollectionController extends Controller {}

module.exports = new GossipCollectionController(gossipCollectionFacade);
