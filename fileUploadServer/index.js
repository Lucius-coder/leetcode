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
let fileList=["these are the files uploaded to the server"]
app.post("/uploads", upload.single("uploads"), (req, res) => {
  console.log(req.file)
  fileList.push(req.file.originalname)
  console.log("File uploaded");
});
app.get("/uploads",(req,res)=>{
let fileData=JSON.stringify(fileList)

  res.json(fileData)
})
app.listen(5000, () => {
  console.log("server listening ...");
});
