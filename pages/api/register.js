require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const mongoose = require("mongoose");
const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const User = require("../../models/User");

export default async (req, res) => {
  try {
    // console.log("req.httpVersion", req.httpVersion);
    // console.log("req.method", req.method);
    // console.log("req.body", req.body);

    const formData = JSON.parse(req.body);
    // console.log("formData", formData)

    formData.password = await bcrypt.hash(formData.password, saltRounds);

    const { name, email, password } = formData;
    // console.log("password", password)
    // console.log("email", email)
    const user = new User({ name, email, password });

    user
      .save()
      .then(() => {
        res
          .status(200)
          .json({ answer: "Registration success. Written with Mongoose" });
      })
      .catch((err) => {
        res.status(200).json({ answer: "Error happened", payload: err });
      });
  } catch (err) {
    console.log(err);
  }
};
