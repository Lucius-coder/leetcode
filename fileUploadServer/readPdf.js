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
(async ()=>{
    try{
        const filePath= path.join('fileUploadServer', 'uploads', 'Exercise problems for Advanced Macroeconomics ( PDFDrive ).pdf');
        const text=await extractTextFromPDF(filePath)
        console.log(text)
    }catch(error){
        console.log(error)
      }
})()