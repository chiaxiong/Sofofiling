const connectDB = require("./db/server");
const express = require("express");
const app = express();

connectDB();

const UserRoute = require("./routes/user");
const PostRoute = require("./routes/post");

app.use(express.json());
app.use("/api/user", UserRoute);
app.use("/api/post", PostRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server starting: ${port}`);
});
