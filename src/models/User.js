import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  nickname: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: Boolean
});

export default mongoose.model('User', schema);
