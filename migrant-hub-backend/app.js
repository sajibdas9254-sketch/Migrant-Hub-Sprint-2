const express = require("express");

const morgan = require("morgan");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

const postRoutes = require("./routes/postRoutes");

app.use("/api/posts", postRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});