const fs=require("fs")
const pdf=require("pdf-parse")

async function readPdf(filename) {
  // Read the PDF file
  const dataBuffer = fs.readFileSync(filename);

  try {
    const data = await pdf(dataBuffer);

    // Number of pages
   
    // Get all text
  console.log(data)
    return data.text

    // Get text from a specific page
    
  } catch (error) {
    console.log('PDF error: ', error);
  }
}

module.exports={
  readPdf
}
