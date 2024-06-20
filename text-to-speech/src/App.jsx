import { useState } from 'react'
import speak from "./scripts/speechScript.js";
import {checkTextTospeechApiInTheBrowser} from "./scripts/speechScript.js";
import './App.css'

function App() {


window.addEventListener("load",checkTextTospeechApiInTheBrowser)
    let cols = window.innerWidth-100;
    return (
    <>
        <textarea name="text" id="" cols={cols} rows={3} className="text"></textarea>
        <button onClick={speak}>speak</button>
    </>
  )
}

export default App
