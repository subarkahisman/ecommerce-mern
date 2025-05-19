import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi"],
  },
  email: {
    type: String,
    required: [true, "Email harus diisi"],
  },
  password: {
    type: String,
    required: [true, "Password harus diisi"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
