// Import required modules
import express from "express";
import multer from "multer";
import path from "path";
import { readPdf } from "./readPdf.cjs";
import { insertIntoTable, query } from "./database.js";
import cors from "cors";

// Create an Express application
const app = express();
// Enable CORS for all routes
app.use(cors());

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // Set the destination folder for uploaded files
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      // Use the original filename for the uploaded file
      cb(null, file.originalname);
    },
  }),
});

// Initialize an empty array to store the list of uploaded files
let fileList = [];

// Handle POST requests to the "/uploads" endpoint
app.post("/uploads", upload.single("uploads"), async (req, res) => {
  // Log the name of the uploaded file
  console.log("File uploaded:", req.file.originalname);
  try {
    // Check if the uploaded file is a PDF
    if (req.file.mimetype === "application/pdf") {
      // Read the contents of the PDF file
      let readPdfData = await readPdf(req.file.path);
      let fileInsertion = await insertIntoTable(
        "fileinformation",
        [ "filename", "file", "filetext"],
        [ req.file.originalname, req.file.path, readPdfData]
      );
      let tableName="fileinformation"
      let databaseInformation = await query(`select * from ${tableName}`);
      console.log(databaseInformation);
      res.json(databaseInformation)
      // Log the extracted data from the PDF

      console.log(readPdfData);
    } else {
      // Log a message if the uploaded file is not a PDF
      console.log("Uploaded file is not a PDF");
      // TODO: Consider handling non-PDF uploads differently (e.g., error message)
    }
  } catch (error) {
    // Log any errors that occur during upload or processing
    console.error("Error during upload or processing:", error);
    // Send a generic error response to the client
    res.status(500).send("Error processing file ");
  }
});

// Set the port number for the server
let port = 5000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening at port ${port}...`);
});
