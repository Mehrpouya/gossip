const Facade = require('../../lib/facade');
const gossipCollectionSchema = require('./schema');

class GossipCollectionFacade extends Facade {}

module.exports = new GossipCollectionFacade(gossipCollectionSchema);
