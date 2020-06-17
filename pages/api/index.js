require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  try {
    const afterConnection = await client.connect();
    // console.log("afterConnection", afterConnection)

    const db = await client.db(process.env.DB_NAME);
    // console.log("db", db)

    const collection = await db.collection(process.env.COLLECTION_NAME);
    // console.log("collection", collection)

    const users = await collection
      .find({})
      .project({ _id: 0, email: 1 })
      .toArray();
    // console.log("users", users);

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};
