const express = require("express");

const cors = require("cors");

const app = express();
const PORT = 1337;
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on 1337");
});
