const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Ensure this is hashed
  createdAt: { type: Date, default: Date.now },
  roles: [
    {
      type: String,
      enum: ["user", "admin"],
      required: true,
    },
  ],
  profilePicture: {
    type: String,
    required: false,
  },
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],
});

// Pre-save hook to hash password
userSchema.pre("save", function (next) {
  let user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // Hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", userSchema);
