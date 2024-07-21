// Function to handle script upload
export default function UploadScript(element, port, route) {
  // Get the form element
  let el = document.querySelector(element)
  
  // Add submit event listener to the form
  el.addEventListener("submit", async (e) => {
    e.preventDefault()
    
    // Get file input and text input elements
    let selectionOfTheFile = document.querySelector("#file")
    let textInput = document.querySelector("#text")
    
    // Get the selected file
    let file = selectionOfTheFile.files[0]
    
    if (file) {
      // Create FormData object and append the file
      let formData = new FormData()
      formData.append("uploads", file)
      
      try {
        // Send POST request to upload the file
        const response = await fetch(`http://localhost:${port}/${route}`, {
          method: "POST",
          body: formData,
        })

        if (response.status === 200) {
          // If upload successful, process the response
          let data = await response.json()
          let parsedData = JSON.stringify(data)
          let text = JSON.parse(parsedData)
          let count = 0
          
          // Set the text input value to the uploaded file content
          textInput.value = text[count].filetext
        
          console.log(text)
        } else {
          console.log("the upload failed")
        }
      } catch (error) {
        console.log("something went wrong", error)
      }
    }
  })
}

export default function UploadScript(element, port, route) {
  let el = document.querySelector(element);
  el.addEventListener("submit", async (e) => {
    e.preventDefault();
    let selectionOfTheFile = document.querySelector("#file");
    let textInput = document.querySelector("#text");
    let file = selectionOfTheFile.files[0];
    if (file) {
      let formData = new FormData();
      formData.append("uploads", file);
      try {
        const response = await fetch(`http://localhost:${port}/${route}`, {
          method: "POST",
          body: formData,
        });

        if (response.status === 200) {
          let data = await response.json();
          let parsedData = JSON.stringify(data);
          let text = JSON.parse(parsedData);
          let count=0
          textInput.value = text[count].filetext;
        

          console.log(text)
        } else {
          console.log("the upload failed");
        }
      } catch (error) {
        console.log("something went wrong", error);
      }
    }
  });
}
