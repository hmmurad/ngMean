const express = require("express");
const path = require("path");
const port = process.env.PORT || 4300;
const app = express();

const destinationDir = path.join(__dirname, "../dist");


app.use(express.static(destinationDir));
console.log(destinationDir)

app.get("*", (res, rej) => {
  res.sendfile(path.join(destinationDir, index.html));
});

// creating server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});