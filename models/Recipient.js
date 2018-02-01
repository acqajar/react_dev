const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
  subject: String,
  recipients: [String],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

module.exports = recipientSchema;
