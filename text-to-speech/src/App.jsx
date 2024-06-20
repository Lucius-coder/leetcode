import { useState } from 'react'
import speak from "./scripts/speechScript.js";
import UploadScript from './scripts/uploadScript.js';
import {checkTextTospeechApiInTheBrowser} from "./scripts/speechScript.js";
import './App.css'

function App() {

window.addEventListener("load",checkTextTospeechApiInTheBrowser)
    
    return (
    <><div className="wrapper">
      <div className='textarea'>
    <textarea name="text" id="" className="text"></textarea>
    <input type="file" name="" id="file" />
    <div className="buttonContainer">
   <button onClick={()=>{UploadScript("#file")
}}>upload</button><button onClick={speak}>speak</button>
   <input type="range" name="" id="" />
    </div>
   
    </div>
    </div>
    
        
    </>
  )
}

export default App
