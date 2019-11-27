const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema({
  response: {
    type: String,
    required: true
  },
  poll_id: {
    type: Schema.Types.ObjectId,
    ref: 'polls'
  }
})

module.exports = Choice = mongoose.model('choices', ChoiceSchema);