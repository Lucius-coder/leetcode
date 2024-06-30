export default function UploadScript(element,port,route){
let el= document.querySelector(element)
el.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let selectionOfTheFile=document.querySelector("#file")
    let file=selectionOfTheFile.files[0]
    if (file){
        let formData=new FormData();
        formData.append("uploads",file)
        try{
            const response=await fetch(`http://localhost:${port}/${route}`,{
                method:"POST",
                body:formData
            })
            if(response.ok ===200){
                let data=await response.text()
                console.log(data)
            }else{
                console.log("the upload failed")
            }
        }catch(error){
            console.log("something went wrong",error)
        }
        
    }

})

}