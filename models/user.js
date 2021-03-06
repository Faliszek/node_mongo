const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'I am new!'
  },
  forms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Form'
    }
  ],
  addedForms: [String]
});

module.exports = mongoose.model('User', userSchema);
