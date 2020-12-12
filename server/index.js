const connectDB = require("./db/server");
const express = require("express");
const app = express();

connectDB();

const UserRoute = require("./routes/user");
const PostRoute = require("./routes/post");
const AuthRoute = require("./routes/auth");

app.use(express.json());
app.use("/api/user", UserRoute);
app.use("/api/post", PostRoute);
app.use("/api/auth", AuthRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server starting: ${port}`);
});
