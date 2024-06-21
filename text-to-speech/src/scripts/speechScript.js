export function checkTextTospeechApiInTheBrowser(){
    if("speechSynthesis"in window){
        alert("your browser supports text to speech functionality")
    }
    else{
        alert(' your browser does not support text to speech functionality')
    }
}
export default function speak(){
    const text=document.querySelector(".text").value
    const utterance =new SpeechSynthesisUtterance(text)
    console.dir(utterance)
    speechSynthesis.speak(utterance)
}