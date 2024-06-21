import React from 'react'
import speak from "./scripts/speechScript.js";
import UploadScript from './scripts/uploadScript.js';
import {checkTextTospeechApiInTheBrowser} from "./scripts/speechScript.js";
import './App.css'
export default function 
textField() {
    window.addEventListener("load",checkTextTospeechApiInTheBrowser)
    
  return (
    <>
    <div className="wrapper">
      <div className='textarea'>
    <textarea name="text" id="" className="text" placeholder=' paste your text here'></textarea>
    <input type="file" name="" id="file" />
    <div className="buttonContainer">
   <button onClick={()=>{UploadScript("#file")
}}>upload</button><button onClick={speak}>speak</button>
   
    </div>
   
    </div>
    </div>
    </>
  )
}
