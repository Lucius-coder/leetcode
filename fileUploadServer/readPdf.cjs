// Import required modules
const fs = require("fs")
const pdf = require("pdf-parse")

// Function to read and parse PDF file
async function readPdf(filename) {
  // Read the PDF file
  const dataBuffer = fs.readFileSync(filename);

  try {
    // Parse the PDF data
    const data = await pdf(dataBuffer);

    // Number of pages
    // console.log(data.numpages);
   
    // Get all text
    console.log(data)
    return data.text

    // Get text from a specific page
    // console.log(data.text[pageNum]);
    
  } catch (error) {
    // Log any errors that occur during PDF parsing
    console.log('PDF error: ', error);
  }
}

// Export the readPdf function
module.exports = {
  readPdf
}
