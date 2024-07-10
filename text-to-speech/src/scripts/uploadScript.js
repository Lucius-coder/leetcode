import React from "react";
import { useState } from "react";
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
          textInput.value = text[count];
          if(text.length===1){
            count=0;
          }else{
            count++
          }

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
