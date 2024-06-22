const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Set the destination directory
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original filename
    }
  })
});
app.post("/uploads", upload.single("uploads"), (req, res) => {
  console.log(req.file);
  console.log("File uploaded");
});
app.listen(5000, () => {
  console.log("server listening ...");
});
