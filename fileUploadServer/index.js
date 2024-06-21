const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("fileInput"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded");
});
app.listen(5000, () => {
  console.log("server listening ...");
});
