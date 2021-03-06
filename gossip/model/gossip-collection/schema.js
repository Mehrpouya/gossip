const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gossipCollectionSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String },
  tags:  [{type: String}],
  updated: { type: Date, default: Date.now },
  comments:[{
    comment:{type:String},
    date_created:{type:Date ,default: Date.now}
  }]
});
//
// {
//    likes: 100,
//    comments: [
//       {
//          user:'user1',
//          message: 'My first comment',
//          dateCreated: new Date(2017,1,20,2,15),
//          like: 0
//       },
//       {
//          user:'user2',
//          message: 'My second comments',
//          dateCreated: new Date(2017,1,25,7,45),
//          like: 5
//       }
//    ]
// }
module.exports = mongoose.model('GossipCollection', gossipCollectionSchema);
