import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    number: Number,
  },
  {
    timestamps: true, // This option will automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Correct the model creation to use UserSchema
export const User = mongoose.model('User', UserSchema);
