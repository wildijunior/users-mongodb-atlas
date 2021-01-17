import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please insert name, this field required"],
  },
  age: {
    type: Number,
    min: 1,
    max: 99,
  },
  email: {
    type: String,
    required: [true, "Please insert email, this field required"],
  },
  address: {
    type: String,
    required: [true, "Please insert address, this field required"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
