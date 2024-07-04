export default async function fetchUploadText(port,route){
let response=await fetch(`http://localhost:${port}/${route}`)
if (response.ok==200){
    let text=await response
    console.log(text)
}else{
    console.log("error fetching the data")
}
}