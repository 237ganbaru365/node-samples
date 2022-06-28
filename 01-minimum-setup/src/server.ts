// nodeは書き方は違うけど、typescriptを使用するとそっちが優先される
import express from "express";

const PORT = 5000;

// package を[実行]
const app = express();

// add endpoint
app.get("/", (req, res) => {
  // user = mongo model class

  // get data from db
  // const response = user.getById(10)
  // const user = response.data
  //   res.json({ user });
  res.json({ test: "test" });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
