const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: [true, 'Por favor, indica el nombre de usuario/a'],
    },

    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: [true, 'Password is required.']
    },

    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    },
  },

  {
    timestamps: true,
    versionKey: false
  }
);

const User = model("User", userSchema);

module.exports = User;
