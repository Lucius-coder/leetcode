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
   <form action="" method="post">
   <input type="file" name="" id="file" accept='.pdf,.txt'/>
    <div className="buttonContainer">
   <button onClick={()=>{UploadScript("#file")
}}>upload</button><button onClick={speak} type='button'>speak</button>
   
    </div>
   </form>
   
   
    </div>
    </div>
    </>
  )
}
