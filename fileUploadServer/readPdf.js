import fs from "fs";
import path from "path";
import pdf from "pdf-parse"
async function extractTextFromPDF(filepath){
    const data=fs.readFileSync(filepath)
    try{
        const pdfData=await pdf(data)
        return pdfData.text;
    }catch (error){
console.log(error)
    }
}