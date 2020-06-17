require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const MongoClient = require("mongodb").MongoClient;

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  try {
    // console.log("req.httpVersion", req.httpVersion);
    // console.log("req.method", req.method);
    // console.log("req.body", req.body);

    const formData = JSON.parse(req.body);
    // console.log("formData", formData)

    formData.password = await bcrypt.hash(formData.password, saltRounds);

    const { email, password } = formData;
    // console.log("password", password)
    // console.log("email", email)

    const afterConnection = await client.connect();
    // console.log("afterConnection", afterConnection)

    const db = await client.db(process.env.DB_NAME);
    // console.log("db", db)

    const collection = await db.collection(process.env.COLLECTION_NAME);
    // console.log("collection", collection)

    // write data

    collection.insertOne({ email, password });

    res.status(200).json({ answer: "Registration success" });
  } catch (err) {
    console.log(err);
  }
};
