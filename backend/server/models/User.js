const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  });
  UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(20);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });
module.exports = mongoose.model('User', UserSchema);