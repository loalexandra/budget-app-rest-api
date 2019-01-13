const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  title: String,
  amount: Number,
  disableUpdate: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
