import { useState } from 'react'
import speak from "./scripts/speechScript.js";
import {checkTextTospeechApiInTheBrowser} from "./scripts/speechScript.js";
import './App.css'

function App() {


window.addEventListener("load",checkTextTospeechApiInTheBrowser)
    let cols = window.innerWidth-100;
    return (
    <><div className="wrapper">
      <div className='textarea'>
    <textarea name="text" id="" cols={cols} rows={3} className="text"></textarea>
    <button onClick={speak}>speak</button>
    </div>
    </div>
    
        
    </>
  )
}

export default App
