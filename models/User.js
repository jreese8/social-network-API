const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: "Username required.",
    trim: true
  },

  email: {
    type: String,
    unique: true,
    required: "Email required.",
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
  },

  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: "Thought"
  }],

  friends: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }]
  },

  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    
    id: false
  });

const User = model('User', UserSchema);

module.exports = User;