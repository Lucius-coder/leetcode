import express from "express";
import multer from "multer";
import path from "path";
import { readPdf } from "./readPdf.cjs";
import cors from "cors";

const app = express();
app.use(cors());

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

let fileList = [];

app.post("/uploads", upload.single("uploads"), async (req, res) => {
  console.log("File uploaded:", req.file.originalname); // Log filename only
  try {
    if (req.file.mimetype === "application/pdf") {
      let readPdfData = await readPdf(req.file.path);
     
      console.log(readPdfData);
    } else {
      console.log("Uploaded file is not a PDF");
      // Consider handling non-PDF uploads differently (e.g., error message)
    }
  } catch (error) {
    console.error("Error during upload or processing:", error);
    res.status(500).send("Error processing file "); // Send generic error response
  }
});

let port = 5000;

app.listen(port, () => {
  console.log(`Server listening at port ${port}...`);
});
