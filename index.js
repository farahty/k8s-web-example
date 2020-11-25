const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json([
    {
      user: "Nimer Farahty",
      email: "nimer.farahty@gmail.com",
    },
    {
      user: "Kareem Farahty",
      email: "kareem.farahty@gmail.com",
    },
    {
      user: "Friends API",
      email: "friends.api@gmail.com",
    },
  ]);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
