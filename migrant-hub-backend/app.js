const express = require("express");

const app = express();

app.use(express.json());

const postRoutes = require("./routes/postRoutes");

app.use("/api/posts", postRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});