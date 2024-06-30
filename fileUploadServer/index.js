import express from 'express';
import multer from 'multer';
import path from 'path';
import { readPdf } from './readPdf.cjs';
import { fsync, readFileSync } from 'fs';
import cors from "cors"
const app = express();
let middlewareCors=app.use(cors())
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
let fileList=[]
app.post("/uploads", upload.single("uploads"), async(req, res) => {
  console.log(req.file)
 
  console.log("File uploaded");
  if(req.file.mimetype==="application/pdf"){
    let readPdfFile=await readPdf(req.file.path)
    fileList.push(readPdfFile)
    res.send(readPdfFile)
    console.log(readPdfFile)
  }else{
let file=readFileSync(req.file.path)
console.log(file)
  }
  

});
app.get("/uploads",(req,res)=>{
let fileData=JSON.stringify(fileList)
res.send(fileList)
  
})
app.listen(5000, () => {
  console.log("server listening ...");
});
