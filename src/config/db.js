const mongoose = require("mongoose");

mongoose.connect(process.env.Mongo_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "blog"
});

const db = mongoose.connection;

db.on("error", error => {
  console.log("MongoDB Connection error");
  console.error(error);
});

module.exports = db;
